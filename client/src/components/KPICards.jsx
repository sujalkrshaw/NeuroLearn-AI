function KPIcards({ stats = {} }) {
  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    width: "220px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "30px",
      }}
    >
      <div style={cardStyle}>
        <h2>👨‍🎓 Students</h2>

        <h1
          style={{
            fontSize: "50px",
          }}
        >
          {stats.students || "12K+"}
        </h1>
      </div>

      <div style={cardStyle}>
        <h2>📚 Courses</h2>

        <h1
          style={{
            fontSize: "50px",
          }}
        >
          {stats.courses || "120+"}
        </h1>
      </div>

      <div style={cardStyle}>
        <h2>📈 Completion</h2>

        <h1
          style={{
            fontSize: "50px",
          }}
        >
          {stats.completion || "89%"}
        </h1>
      </div>

      <div style={cardStyle}>
        <h2>🤖 AI Score</h2>

        <h1
          style={{
            fontSize: "50px",
          }}
        >
          {stats.aiScore || "96%"}
        </h1>
      </div>
    </div>
  );
}

export default KPIcards;