import React, { useEffect, useState } from "react"
import { db } from "../../services/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
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
        const orderNumber = Number(orderId)
        if (isNaN(orderNumber)) {
          setError(STRINGS.BOXES.ORDER_DETAILS.CORREC_NUMBER)
          setLoading(false)
          return
        }

        const q = query(
          collection(db, "order"),
          where("order_id", "==", orderNumber)
        )
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data()

          if (data.order_day && data.order_day.seconds) {
            data.order_day = new Date(
              data.order_day.seconds * 1000
            ).toLocaleString()
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
            {STRINGS.BOXES.ORDER_DETAILS.ORDER_NUMBER} {orderData.order_id}
          </h3>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.NAME}</strong> {orderData.name}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.CONTACT}</strong>{" "}
            {orderData.phone}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.ADDRESS}</strong>{" "}
            {orderData.address}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.PURCHASE_DATE}</strong>{" "}
            {orderData.order_day}
          </p>{" "}
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.PURCHASE_ITEM}</strong>{" "}
            {orderData.order_list}
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.BILL_COUNT}</strong>{" "}
            {orderData.order_pay}원
          </p>
          <p>
            <strong>{STRINGS.BOXES.ORDER_DETAILS.SHIP_REQUEST_DETAIL}</strong>{" "}
            {orderData.order_request}
          </p>
        </div>
      )}
    </div>
  )
}

// 스타일 객체
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
  },
}

export default OrderDetails
