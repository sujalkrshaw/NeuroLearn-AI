function StudentTable() {
  const students = [
    {
      name: "Sujal",
      course: "React",
      progress: "90%",
    },
    {
      name: "Rahul",
      course: "Node",
      progress: "80%",
    },
    {
      name: "Aman",
      course: "AI",
      progress: "95%",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    >
      <h2>👨‍🎓 Students</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Progress</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;