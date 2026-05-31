import CourseCard from "../components/CourseCard";

function Courses() {
  const courses = [
    {
      title: "React Mastery",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },

    {
      title: "Node.js Bootcamp",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    },

    {
      title: "AI Engineering",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },

    {
      title: "Cyber Security",
      image:
        "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    },

    {
      title: "Python Development",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    },

    {
      title: "Cloud Computing",
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    },

    {
      title: "UI/UX Design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },

    {
      title: "Machine Learning",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
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
          borderRadius: "25px",
          padding: "30px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          📚 Premium Courses
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            marginBottom: "40px",
          }}
        >
          Explore modern AI-powered learning
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;