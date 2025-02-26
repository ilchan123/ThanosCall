import React, { useState } from "react"
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import DropdownButton from "../../cs_list_manage/dropdown_button"
import { STRINGS } from "../../../config/string"

const BarChart = ({ data, title, isHorizontal = false }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(
    STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.PERIOD
  )

  const handlePeriodChange = (value) => {
    setSelectedPeriod(value)
    console.log(STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.SELEC_PERIOD, value)
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Total</h2>

        <DropdownButton
          options={[
            STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.TIME_WEEK,
            STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.TIME_MONTH1,
            STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.TIME_MONTH3,
            STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.TIME_MONTH6,
            STRINGS.CS_DATA_ANALYSIS.CHARTS.BARCHART.TIME_YEAR,
          ]}
          selectedValue={selectedPeriod}
          onSelect={handlePeriodChange}
          style={styles.dropdownButton}
          defaultLabel={selectedPeriod}
        />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          style={styles.chart_size}
          data={data}
          layout={isHorizontal ? "vertical" : "horizontal"}
        >
          {isHorizontal ? (
            <>
              <YAxis type="category" dataKey="category" />
              <XAxis type="number" />
            </>
          ) : (
            <>
              <XAxis dataKey="category" />
              <YAxis />
            </>
          )}
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#007bff" barSize={30} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  container: {
    padding: "16px",
    borderRadius: "10px",
    height: "330px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    width: "100%",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--gray800)",
    margin: 0,
  },
  chart_size: {
    paddingBottom: "10px",
    height: "300px",
  },
  dropdownButton: {
    width: "100px",
    height: "32px",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "center",
    backgroundColor: "var(--blue200)",
    border: "1px solid var(--blue400)",
    borderRadius: "6px",
    cursor: "pointer",
    color: "var(--white)",
    padding: "5px 10px",
  },
}

export default BarChart
