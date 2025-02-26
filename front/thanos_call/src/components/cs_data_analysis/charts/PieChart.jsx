import React from "react"
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts"

const CustomPieChart = ({ data, colors, title }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      <ResponsiveContainer width="100%" height={210}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            <Label
              value={`${Math.round(data[0].value)}%`}
              position="center"
              fill="#333"
              fontSize={18}
              fontWeight="bold"
            />
          </Pie>
          <Tooltip />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "250px",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
}

export default CustomPieChart
