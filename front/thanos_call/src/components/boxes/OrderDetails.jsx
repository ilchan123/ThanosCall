import React, { useEffect, useState } from "react"
import { db } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore"
import { STRINGS } from "../../config/string"

const OrderDetails = ({ orderId }) => {
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!orderId) return

    const fetchOrderData = async () => {
      setLoading(true)
      setError("")

      try {
        const docRef = doc(db, "logistics", orderId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()

          if (data.ordered_time && data.ordered_time.seconds) {
            data.ordered_time = new Date(
              data.ordered_time.seconds * 1000
            ).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
          }

          setOrderData(data)
        } else {
          setOrderData(null)
          setError(STRINGS.BOXES.ORDER_DETAILS.NOT_FIND_ORDER_INFO)
        }
      } catch (error) {
        console.error(STRINGS.BOXES.ORDER_DETAILS.DATA_TAKE_ERROR, error)
        setError(STRINGS.BOXES.ORDER_DETAILS.DATA_TAKE_ERROR_INCUR)
      }

      setLoading(false)
    }

    fetchOrderData()
  }, [orderId])

  return (
    <div style={styles.container}>
      {loading && <p>{STRINGS.BOXES.ORDER_DETAILS.LOADING}</p>}
      {error && <p style={styles.error}>{error}</p>}

      {orderData && (
        <div style={styles.card}>
          <h3>
            {STRINGS.BOXES.ORDER_DETAILS.ORDER_NUMBER} {orderId}
          </h3>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.NAME}</strong> {orderData.name}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.EMAIL}</strong>{" "}
            {orderData.customer}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.CONTACT}</strong>{" "}
            {orderData.contact}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.ADDRESS}</strong>{" "}
            {orderData.address}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.PURCHASE_DATE}</strong>{" "}
            {orderData.ordered_time}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.PURCHASE_ITEM}</strong>{" "}
            {orderData.order_list}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.BILL_COUNT}</strong>{" "}
            {orderData.order_price}원
          </p>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    width: "80%",
    flex: 1,
    padding: "16px",
    margin: "auto",
    borderBottom: "1px solid var(--gray500)",
    borderRadius: "8px 8px 0px 0px",
    backgroundColor: "var(--white)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  error: {
    color: "var(--red100)",
    textAlign: "center",
    marginBottom: "10px",
  },
  card: {
    padding: "15px",
    backgroundColor: "var(--white)",
    height: "270px",
    marginBottom: "5px",
  },
}

export default OrderDetails
