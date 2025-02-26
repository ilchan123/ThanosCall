import React, { useEffect, useState } from "react"
import CustomBarChart from "./CustomBarChart"
import CustomPieChart from "./PieChart"
import CustomChart from "./CustomChart"
import { db, collection, getDocs } from "../../../services/firebase"
import { STRINGS } from "../../../config/string"

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
        //
      }
    }

    fetchData()
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.barChartRow}>
        <div style={styles.barChartLarge}>
          {monthlyCallData.length > 0 ? (
            <CustomChart
              data={monthlyCallData}
              title={
                STRINGS.CS_DATA_ANALYSIS.CHARTS.CALL_INFO_STATICS_CHART
                  .MONTH_CONSULT_COUNT
              }
            />
          ) : (
            <p>
              {
                STRINGS.CS_DATA_ANALYSIS.CHARTS.CALL_INFO_STATICS_CHART
                  .DATA_LOADING
              }
            </p>
          )}
        </div>
        <div style={styles.barChartSmall}>
          {callCategoryData.length > 0 ? (
            <CustomBarChart
              data={callCategoryData}
              title={
                STRINGS.CS_DATA_ANALYSIS.CHARTS.CALL_INFO_STATICS_CHART
                  .CALL_CATEGORY_DATA
              }
            />
          ) : (
            <p>
              {
                STRINGS.CS_DATA_ANALYSIS.CHARTS.CALL_INFO_STATICS_CHART
                  .DATA_LOADING
              }
            </p>
          )}
        </div>
      </div>

      <div style={styles.pieChartContainer}>
        {pieChartData.length > 0 ? (
          pieChartData.map((data, index) => (
            <div key={index} style={styles.pieChart}>
              <CustomPieChart
                data={[
                  data,
                  {
                    name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                      .CALL_INFO_STATICS_CHART.ETC,
                    value: 100 - data.value,
                  },
                ]}
                colors={
                  data.name.includes(
                    STRINGS.CS_DATA_ANALYSIS.CHARTS.CALL_INFO_STATICS_CHART
                      .PRE_MONTH
                  )
                    ? ["#E63946", "#E0E0E0"]
                    : ["#007bff", "#E0E0E0"]
                }
                title={data.name}
              />
            </div>
          ))
        ) : (
          <p>
            {
              STRINGS.CS_DATA_ANALYSIS.CHARTS.CALL_INFO_STATICS_CHART
                .DATA_LOADING
            }
          </p>
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
    backgroundColor: "var(--white)",
    borderRadius: "12px",
  },
  barChartSmall: {
    width: "35%",
    backgroundColor: "var(--white)",
    borderRadius: "12px",
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "97.5%",
    height: "270px",
    backgroundColor: "var(--white)",
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
