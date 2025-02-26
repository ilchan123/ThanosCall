import React, { useState, useEffect } from "react"
import { db, collection, getDocs } from "../../../services/firebase"
import {
  ComposedChart,
  Bar,
  Line,
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
    STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART.WEEK
  )

  const [monthlyData, setMonthlyData] = useState([])
  const [ageData, setAgeData] = useState([])
  const [genderRatioData, setGenderRatioData] = useState([])
  const [repeatCustomerData, setRepeatCustomerData] = useState([])
  const [threeMonthInactiveData, setThreeMonthInactiveData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerMonthSnapshot = await getDocs(
          collection(db, "customer_month")
        )
        const monthlyDocs = customerMonthSnapshot.docs.map((doc) => ({
          month: doc.id,
          blue: Number(doc.data().blue) || 0,
          red: Number(doc.data().red) || 0,
        }))
        setMonthlyData(monthlyDocs)

        const customerAgeSnapshot = await getDocs(
          collection(db, "customer_age")
        )
        const ageDocs = customerAgeSnapshot.docs.map((doc) => ({
          category: `${parseInt(doc.id)}대`,
          value: Number(doc.data().blue) + Number(doc.data().navy) || 0,
        }))
        setAgeData(ageDocs)

        const genderSnapshot = await getDocs(collection(db, "customer_all"))
        const genderData = genderSnapshot.docs
          .find((doc) => doc.id === "gender")
          ?.data()
        setGenderRatioData([
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART.MALE,
            value: Number(genderData?.male) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .FEMALE,
            value: Number(genderData?.female) || 0,
          },
        ])

        const againSnapshot = await getDocs(collection(db, "customer_all"))
        const againData = againSnapshot.docs
          .find((doc) => doc.id === "again")
          ?.data()
        setRepeatCustomerData([
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .RE_BUY_USER,
            value: Number(againData?.re) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .NO_BUY_USER,
            value: Number(againData?.non) || 0,
          },
        ])

        const threeMonSnapshot = await getDocs(collection(db, "customer_all"))
        const threeMonData = threeMonSnapshot.docs
          .find((doc) => doc.id === "three_mon")
          ?.data()
        setThreeMonthInactiveData([
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .THREE_MONTH_NO,
            value: Number(threeMonData?.no) || 0,
          },
          {
            name: STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .RE_BUY_USER,
            value: Number(threeMonData?.repurchase) || 0,
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
              STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
                .MONTH_SIGN_STATIC
            }
          </h3>
          <div style={styles.dropdownContainer}>
            <DropdownButton
              options={[
                STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART.WEEK,
                STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART.MONTH,
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
              <Line dataKey="red" stroke="#FF4E42" strokeWidth={2}>
                <LabelList dataKey="red" position="top" />
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.rightChartBox}>
          <BarChart
            data={ageData}
            title={
              STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
                .GENER_USER_COUNT
            }
          />{" "}
        </div>
      </div>

      <div style={styles.pieChartContainer}>
        <PieChart
          data={
            genderRatioData.length
              ? genderRatioData
              : [
                  {
                    name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                      .USER_DATA_STATICS_CHART.NO_DATA,
                    value: 0,
                  },
                ]
          }
          colors={["var(--red100)", "var(--gray200)"]}
          title={
            STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .GENDER_PRECENT
          }
        />
        <PieChart
          data={
            repeatCustomerData.length
              ? repeatCustomerData
              : [
                  {
                    name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                      .USER_DATA_STATICS_CHART.NO_DATA,
                    value: 0,
                  },
                ]
          }
          colors={["var(--blue300)", "var(--gray200)"]}
          title={
            STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .RE_BUY_PRECENT
          }
        />
        <PieChart
          data={
            threeMonthInactiveData.length
              ? threeMonthInactiveData
              : [
                  {
                    name: STRINGS.CS_DATA_ANALYSIS.CHARTS
                      .USER_DATA_STATICS_CHART.NO_DATA,
                    value: 0,
                  },
                ]
          }
          colors={["var(--red300)", "var(--gray200)"]}
          title={
            STRINGS.CS_DATA_ANALYSIS.CHARTS.USER_DATA_STATICS_CHART
              .THREE_MONTH_NO_BUY
          }
        />
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
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "var(--box-shadow-overlay)",
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "97.2%",
    height: "260px",
    backgroundColor: "var(--white)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "var(--box-shadow-overlay)",
    gap: "10px",
  },
}

export default UserDataStaticsChart
