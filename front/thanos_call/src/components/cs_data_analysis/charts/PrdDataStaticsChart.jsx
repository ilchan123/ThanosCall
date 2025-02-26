import React, { useState, useEffect } from "react"
import { db, collection, getDocs } from "../../../services/firebase"
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts"

import BarChart from "./BarChart"
import PieChart from "./PieChart"
import DropdownButton from "../../cs_list_manage/dropdown_button"
import { STRINGS } from "../../../config/string"

const UserDataStaticsChart = () => {
  const [period, setPeriod] = useState(
    STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.WEEK
  )

  const [monthlyData, setMonthlyData] = useState([])
  const [ageData, setAgeData] = useState([])
  const [genderRatioData, setGenderRatioData] = useState([])
  const [repeatCustomerData, setRepeatCustomerData] = useState([])
  const [threeMonthInactiveData, setThreeMonthInactiveData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerMonthSnapshot = await getDocs(collection(db, "count_cat"))
        const monthlyDocs = customerMonthSnapshot.docs.map((doc) => ({
          month: doc.id,
          blue: Number(doc.data().blue) || 0,
          red: Number(doc.data().red) || 0,
        }))
        setMonthlyData(monthlyDocs)

        const customerAgeSnapshot = await getDocs(collection(db, "count_top"))
        const ageDocs = customerAgeSnapshot.docs.map((doc) => ({
          category: `${doc.id}`,
          value: Number(doc.data().blue) || 0,
          layout: "vertical",
        }))
        setAgeData(ageDocs)

        const genderSnapshot = await getDocs(collection(db, "count_all"))
        const genderData = genderSnapshot.docs
          .find((doc) => doc.id === "count_gender")
          ?.data()
        setGenderRatioData([
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.MALE,
            value: Number(genderData?.male) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.FEMALE,
            value: Number(genderData?.female) || 0,
          },
        ])

        const againSnapshot = await getDocs(collection(db, "count_all"))
        const againData = againSnapshot.docs
          .find((doc) => doc.id === "count_again")
          ?.data()
        setRepeatCustomerData([
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
              .RE_BUY_USER,
            value: Number(againData?.re) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
              .NO_BUY_USER,
            value: Number(againData?.non) || 0,
          },
        ])

        const threeMonSnapshot = await getDocs(collection(db, "count_all"))
        const threeMonData = threeMonSnapshot.docs
          .find((doc) => doc.id === "count_three")
          ?.data()
        setThreeMonthInactiveData([
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.TEEN,
            value: Number(threeMonData?.rest) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.TWIN,
            value: Number(threeMonData?.teen) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.THRE,
            value: Number(threeMonData?.twin) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.FOUR,
            value: Number(threeMonData?.four) || 0,
          },
        ])
      } catch (error) {
        //
      }
    }

    fetchData()
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.topChartsRow}>
        <div style={styles.leftChartBox}>
          <h3 style={styles.chartTitle}>
            {
              STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
                .CATEGORY_SALE_STATIC
            }
          </h3>
          <div style={styles.dropdownContainer}>
            <DropdownButton
              options={[
                STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.WEEK,
                STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART.MONTH,
              ]}
              onSelect={setPeriod}
              defaultLabel={period}
            />
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={monthlyData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="blue" fill="#4E89FF" barSize={40}>
                <LabelList dataKey="blue" position="top" />
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.rightChartBox}>
          <BarChart
            data={ageData}
            title={
              STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
                .GENERATION_COUNT
            }
            layout="vertical"
          />{" "}
        </div>
      </div>

      <div style={styles.pieChartContainer}>
        <div style={styles.pieChartItem}>
          <PieChart
            data={
              genderRatioData.length
                ? genderRatioData
                : [
                    {
                      name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                        .PRD_DATA_STATICS_CHART.NO_DATA,
                      value: 0,
                    },
                  ]
            }
            colors={["var(--red100)", "var(--gray200)"]}
            title={
              STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
                .ALL_GENDER_PERCENT
            }
          />
        </div>

        <div style={styles.pieChartItem}>
          <PieChart
            data={
              repeatCustomerData.length
                ? repeatCustomerData
                : [
                    {
                      name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                        .PRD_DATA_STATICS_CHART.NO_DATA,
                      value: 0,
                    },
                  ]
            }
            colors={["var(--blue300)", "var(--gray200)"]}
            title={
              STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
                .RE_BUY_PERCENT
            }
          />
        </div>

        <div style={styles.pieChartItem}>
          <PieChart
            data={
              threeMonthInactiveData.length
                ? threeMonthInactiveData
                : [
                    {
                      name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                        .PRD_DATA_STATICS_CHART.NO_DATA,
                      value: 0,
                    },
                  ]
            }
            colors={["var(--red300)", "var(--gray200)"]}
            title={
              STRINGS.CS_DATA_ANALYSIS.CHARTS.PRD_DATA_STATICS_CHART
                .THREE_MONTH_NO_BUY
            }
          />
        </div>
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
  topChartsRow: {
    display: "flex",
    width: "100%",
    height: "auto",
    gap: "10px",
    justifyContent: "space-between",
    position: "relative",
  },
  dropdownContainer: {
    position: "absolute",
    top: "30px",
    right: "20px",
    zIndex: 10,
  },
  leftChartBox: {
    width: "64%",
    height: "80%",
    backgroundColor: "var(--white)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "var(--box-shadow-overlay)",
    position: "relative",
  },
  rightChartBox: {
    width: "36%",
    height: "80%",
    marginBottom: "10px",
    backgroundColor: "var(--white)",
    fontSize: "12px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "var(--box-shadow-overlay)",
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "97.2%",
    height: "270px",
    backgroundColor: "var(--white)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "var(--box-shadow-overlay)",
    gap: "10px",
  },
  pieChartItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}

export default UserDataStaticsChart
