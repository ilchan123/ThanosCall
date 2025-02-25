import React, { useEffect, useState } from "react"
import CustomBarChart from "./CustomBarChart"
import CustomPieChart from "./PieChart"
import CustomChart from "./CustomChart"
import { db, collection, getDocs } from "../../../services/firebase"

const CallInfoStaticsChart = () => {
  const [monthlyCallData, setMonthlyCallData] = useState([])
  const [callCategoryData, setCallCategoryData] = useState([])
  const [pieChartData, setPieChartData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const monthlyDataSnapshot = await getDocs(collection(db, "call_month"))
        const categoryDataSnapshot = await getDocs(collection(db, "call_cat"))
        const percentDataSnapshot = await getDocs(
          collection(db, "call_percent")
        )

        setMonthlyCallData(
          monthlyDataSnapshot.docs.map((doc) => ({
            category: doc.id,
            ...doc.data(),
          }))
        )

        const transformedCategoryData = categoryDataSnapshot.docs.map(
          (doc) => ({
            category: doc.id,
            blue: doc.data().blue || 0,
            navy: doc.data().navy || 0,
          })
        )
        setCallCategoryData(transformedCategoryData)

        const percentData = percentDataSnapshot.docs.map((doc) => ({
          name: doc.id,
          value: doc.data().percent,
        }))
        setPieChartData(percentData)
      } catch (error) {
        console.error("Firestore 데이터 로드 중 오류 발생:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.barChartRow}>
        <div style={styles.barChartLarge}>
          {monthlyCallData.length > 0 ? (
            <CustomChart data={monthlyCallData} title="월별 상담 건수" />
          ) : (
            <p>데이터를 불러오는 중...</p>
          )}
        </div>
        <div style={styles.barChartSmall}>
          {callCategoryData.length > 0 ? (
            <CustomBarChart data={callCategoryData} title="상담 유형별 건수" />
          ) : (
            <p>데이터를 불러오는 중...</p>
          )}
        </div>
      </div>

      <div style={styles.pieChartContainer}>
        {pieChartData.length > 0 ? (
          pieChartData.map((data, index) => (
            <div key={index} style={styles.pieChart}>
              <CustomPieChart
                data={[data, { name: "기타", value: 100 - data.value }]}
                colors={
                  data.name.includes("전월")
                    ? ["#E63946", "#E0E0E0"]
                    : ["#007bff", "#E0E0E0"]
                }
                title={data.name}
              />
            </div>
          ))
        ) : (
          <p>데이터를 불러오는 중...</p>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "var(--blue500)",
    width: "100%",
    margin: "0 auto",
    borderRadius: "12px",
  },
  barChartRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "10px",
  },
  barChartLarge: {
    width: "65%",
    height: "400px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
  },
  barChartSmall: {
    width: "35%",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "97.5%",
    height: "270px",
    backgroundColor: "#FFFFFF",
    marginTop: "10px",
    marginRight: "40px",
    borderRadius: "12px",
  },
  pieChart: {
    flex: "1",
    textAlign: "center",
  },
}

export default CallInfoStaticsChart
