import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Analytics":
        return <Analytics />;

      case "Courses":
        return <Courses />;

      case "Students":
        return <Students />;

      case "Login":
        return <Login />;

      case "Register":
        return <Register />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",
        color: "white",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "260px",
          background: "#0f172a",
          borderRight: "1px solid #1e293b",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          🚀 EduAI
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <button onClick={() => setActivePage("Dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setActivePage("Analytics")}>
            Analytics
          </button>

          <button onClick={() => setActivePage("Courses")}>
            Courses
          </button>

          <button onClick={() => setActivePage("Students")}>
            Students
          </button>

          <button onClick={() => setActivePage("Login")}>
            Login
          </button>

          <button onClick={() => setActivePage("Register")}>
            Register
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        {/* TOP NAVBAR */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            🎓 Online Learning Platform
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "10px",
            }}
          >
            Premium AI SaaS Learning Dashboard
          </p>
        </div>

        {/* KPI CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div className="card">
            <h3>👨‍🎓 Students</h3>
            <h1>12K+</h1>
          </div>

          <div className="card">
            <h3>📚 Courses</h3>
            <h1>120+</h1>
          </div>

          <div className="card">
            <h3>📈 Completion</h3>
            <h1>89%</h1>
          </div>

          <div className="card">
            <h3>🤖 AI Score</h3>
            <h1>96%</h1>
          </div>
        </div>

        {/* PAGE CONTENT */}

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
            minHeight: "500px",
          }}
        >
          {renderPage()}
        </div>
      </div>

      <style>
        {`
          button{
            background:#111827;
            color:white;
            border:none;
            padding:15px;
            border-radius:12px;
            cursor:pointer;
            font-size:16px;
            transition:0.3s;
          }

          button:hover{
            background:#7c3aed;
            transform:translateY(-2px);
          }

          .card{
            background:rgba(255,255,255,0.05);
            padding:20px;
            border-radius:20px;
            border:1px solid rgba(255,255,255,0.1);
          }

          .card h1{
            font-size:40px;
          }

          .card h3{
            color:#94a3b8;
          }
        `}
      </style>
    </div>
  );
}

export default App;