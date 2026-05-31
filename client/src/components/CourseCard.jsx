function CourseCard({ title, image }) {
  return (
    <div
      style={{
        background: "#273449",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        transition: "0.3s",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />

      <h2
        style={{
          marginTop: "20px",
          fontSize: "32px",
          color: "white",
        }}
      >
        📚 {title}
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          marginTop: "10px",
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        Premium AI powered interactive learning course.
      </p>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#475569",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "75%",
              height: "100%",
              background:
                "linear-gradient(to right,#06b6d4,#9333ea)",
            }}
          ></div>
        </div>

        <p
          style={{
            marginTop: "10px",
            color: "#94a3b8",
          }}
        >
          Course Progress — 75%
        </p>
      </div>

      <button
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "15px",
          border: "none",
          borderRadius: "12px",
          background:
            "linear-gradient(to right,#06b6d4,#9333ea)",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;