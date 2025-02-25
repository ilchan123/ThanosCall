import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts"

const CustomBarChart = ({ data, title }) => {
  return (
    <div style={styles.chartContainer}>
      <h3 style={styles.title}>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="blue" fill="#003366" barSize={30} name="Blue" />
          <Bar dataKey="navy" fill="#00509E" barSize={30} name="Navy" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  chartContainer: {
    position: "relative",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
}

export default CustomBarChart
