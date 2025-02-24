import React, { useEffect, useState } from "react"
import { db } from "../../services/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import ConsultMemo from "./ConsultMemo"
import { STRINGS } from "../../config/string"

const ReturnExchange = ({ orderId }) => {
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!orderId) return

    const fetchOrderData = async () => {
      setLoading(true)
      setError("")

      try {
        const orderNumber = Number(orderId)
        if (isNaN(orderNumber)) {
          setError(STRINGS.BOXES.RETURN_EXCHANGE.CORREC_NUMBER)
          setLoading(false)
          return
        }

        const q = query(
          collection(db, "customer"),
          where("order_id", "==", orderNumber)
        )
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data()
          setOrderData(data)
        } else {
          setOrderData(null)
          setError(STRINGS.BOXES.RETURN_EXCHANGE.NOT_FIND_ORDER_INFO)
        }
      } catch (error) {
        setError(STRINGS.BOXES.RETURN_EXCHANGE.DATA_TAKE_ERROR_INCUR)
      }

      setLoading(false)
    }

    fetchOrderData()
  }, [orderId])

  return (
    <div style={styles.container}>
      {loading && <p>{STRINGS.BOXES.RETURN_EXCHANGE.LOADING}</p>}
      {error && <p style={styles.error}>{error}</p>}

      {orderData && (
        <div style={styles.card}>
          <h3>{STRINGS.BOXES.RETURN_EXCHANGE.CUSTOMER_CONSULT_INFO}</h3>
          <p>
            {STRINGS.BOXES.RETURN_EXCHANGE.CS_REQUEST_COUNT.replace(
              "{count}",
              orderData.cs_request
            )}
          </p>
          <p>
            {STRINGS.BOXES.RETURN_EXCHANGE.RETURN_REQUEST_COUNT.replace(
              "{count}",
              orderData.return_request
            )}
          </p>
          <p>
            {STRINGS.BOXES.RETURN_EXCHANGE.EXCHANGE_REQUEST_COUNT.replace(
              "{count}",
              orderData.exchange_request
            )}
          </p>
          <p>
            {STRINGS.BOXES.RETURN_EXCHANGE.INSULT.replace(
              "{count}",
              orderData.insult
            )}
          </p>

          <hr style={styles.separator} />

          <ConsultMemo />
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    width: "80%",
    flex: 1,
    padding: "15px",
    marginTop: "25px",
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "0px 0px 8px 8px",
    backgroundColor: "var(--white)",
    boxShadow: "0px 2px 4px var(--gray300)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
  },
  error: {
    color: "var(--red100)",
    textAlign: "center",
    marginBottom: "10px",
  },
  card: {
    padding: "10px",
    backgroundColor: "var(--white)",
    display: "flex",
    flexDirection: "column",
    lineHeight: "0.5",
  },
  separator: {
    margin: "10px 0",
    marginTop: "5px",
    border: "0",
    height: "3px",
    backgroundColor: "var(--gray300)",
  },
}

export default ReturnExchange
