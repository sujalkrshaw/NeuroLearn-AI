import AnalyticsChart from "../components/AnalyticsChart";
import KPIcards from "../components/KPIcards";

function Analytics() {
  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
        }}
      >
        📈 Analytics Dashboard
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        AI-powered learning analytics system
      </p>

      <KPIcards />

      <AnalyticsChart />
    </div>
  );
}

export default Analytics;