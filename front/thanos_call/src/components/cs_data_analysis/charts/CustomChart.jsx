import React from "react"
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts"

const CustomChart = ({ data, title }) => {
  return (
    <div style={styles.chartContainer}>
      <h3 style={styles.title}>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="blue" barSize={30} fill="#007bff" />
          <Bar dataKey="red" barSize={30} fill="#E57373" />
          <Line type="monotone" dataKey="line" stroke="red" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  chartContainer: {
    position: "relative",
    backgroundColor: "var(--white)",
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

export default CustomChart
