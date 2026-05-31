import Navbar from "../components/Navbar";
import KPIcards from "../components/KPIcards";
import AnalyticsChart from "../components/AnalyticsChart";
import ActivityFeed from "../components/ActivityFeed";
import AIInsights from "../components/AIInsights";

function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <KPIcards />
      </div>

      <AnalyticsChart />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <ActivityFeed />

        <AIInsights />
      </div>
    </div>
  );
}

export default Dashboard;