function ActivityFeed() {
  const activities = [
    "🚀 New AI course launched",
    "📚 120 students enrolled today",
    "🎯 Completion rate increased",
    "🤖 AI recommendations updated",
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2>🔥 Activity Feed</h2>

      {activities.map((item, index) => (
        <div
          key={index}
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;