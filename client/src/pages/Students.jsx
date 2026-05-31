function Students() {
  const students = [
    {
      name: "Sujal",
      course: "React",
      progress: "90%",
      attendance: "95%",
      score: "A+",
    },
    {
      name: "Rahul",
      course: "Node",
      progress: "80%",
      attendance: "88%",
      score: "A",
    },
    {
      name: "Aman",
      course: "AI",
      progress: "95%",
      attendance: "98%",
      score: "A+",
    },
    {
      name: "Priya",
      course: "Python",
      progress: "85%",
      attendance: "90%",
      score: "A",
    },
    {
      name: "Anjali",
      course: "Cyber Security",
      progress: "92%",
      attendance: "97%",
      score: "A+",
    },
    {
      name: "Rohit",
      course: "Cloud",
      progress: "78%",
      attendance: "85%",
      score: "B+",
    },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          👨‍🎓 Students Management
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            marginBottom: "30px",
          }}
        >
          Monitor engagement and progress
        </p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#273449",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#334155",
                }}
              >
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Course</th>
                <th style={styles.th}>Progress</th>
                <th style={styles.th}>Attendance</th>
                <th style={styles.th}>Performance</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.course}</td>
                  <td style={styles.td}>{student.progress}</td>
                  <td style={styles.td}>{student.attendance}</td>
                  <td style={styles.td}>{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  th: {
    padding: "20px",
    textAlign: "left",
    fontSize: "20px",
  },

  td: {
    padding: "18px",
    borderBottom: "1px solid #475569",
    fontSize: "18px",
  },
};

export default Students;