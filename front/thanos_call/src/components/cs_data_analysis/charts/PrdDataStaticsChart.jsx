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

const UserDataStaticsChart = () => {
  const [period, setPeriod] = useState("주간")

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
          { name: "남성", value: Number(genderData?.male) || 0 },
          { name: "여성", value: Number(genderData?.female) || 0 },
        ])

        const againSnapshot = await getDocs(collection(db, "count_all"))
        const againData = againSnapshot.docs
          .find((doc) => doc.id === "count_again")
          ?.data()
        setRepeatCustomerData([
          { name: "재구매 회원", value: Number(againData?.re) || 0 },
          { name: "미구매 회원", value: Number(againData?.non) || 0 },
        ])

        const threeMonSnapshot = await getDocs(collection(db, "count_all"))
        const threeMonData = threeMonSnapshot.docs
          .find((doc) => doc.id === "count_three")
          ?.data()
        setThreeMonthInactiveData([
          {
            name: "10대",
            value: Number(threeMonData?.rest) || 0,
          },
          {
            name: "20대",
            value: Number(threeMonData?.teen) || 0,
          },
          {
            name: "30대",
            value: Number(threeMonData?.twin) || 0,
          },
          { name: "40대", value: Number(threeMonData?.four) || 0 },
        ])
      } catch (error) {
        console.error("🔥 Firestore 데이터 로드 중 오류 발생:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.topChartsRow}>
        <div style={styles.leftChartBox}>
          <h3 style={styles.chartTitle}>월별 회원 가입 통계</h3>
          <div style={styles.dropdownContainer}>
            <DropdownButton
              options={["주간", "월간"]}
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
            title="연령별 회원 수"
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
                : [{ name: "데이터 없음", value: 0 }]
            }
            colors={["#E63946", "#F4F4F4"]}
            title={"전체 남성/여성 구매 비율 : 70% / 30% "}
          />
        </div>

        <div style={styles.pieChartItem}>
          <PieChart
            data={
              repeatCustomerData.length
                ? repeatCustomerData
                : [{ name: "데이터 없음", value: 0 }]
            }
            colors={["#007bff", "#F4F4F4"]}
            title={"재구매 회원 비율 : 25%"}
          />
        </div>

        <div style={styles.pieChartItem}>
          <PieChart
            data={
              threeMonthInactiveData.length
                ? threeMonthInactiveData
                : [{ name: "데이터 없음", value: 0 }]
            }
            colors={["#FFA500", "#F4F4F4"]}
            title={"3개월 이상 미구매 회원 비율 : 5%"}
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
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  rightChartBox: {
    width: "36%",
    height: "80%",
    marginBottom: "10px",
    backgroundColor: "#FFFFFF",
    fontSize: "12px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  pieChartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "97.2%",
    height: "270px",
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
