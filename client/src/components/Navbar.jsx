import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.05)",
        padding: "20px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.1)",
        marginBottom: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          🎓 EduAI Platform
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "8px",
          }}
        >
          Premium AI Learning Dashboard
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "12px 20px",
            borderRadius: "12px",
            border: "none",
            background:
              "linear-gradient(to right,#06b6d4,#7c3aed)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Upgrade
        </button>

        <img
          src="https://i.pravatar.cc/50"
          alt=""
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
          }}
        />
      </div>
    </motion.div>
  );
}

export default Navbar;