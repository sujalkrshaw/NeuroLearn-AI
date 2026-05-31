import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart() {
  const data = [
    { name: "Mon", students: 400 },
    { name: "Tue", students: 700 },
    { name: "Wed", students: 1000 },
    { name: "Thu", students: 1400 },
    { name: "Fri", students: 1700 },
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2>📈 Learning Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="students"
            stroke="#06b6d4"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;