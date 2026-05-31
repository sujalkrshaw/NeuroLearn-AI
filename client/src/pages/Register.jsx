import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/auth/register",
      formData
    );

    alert("✅ Registration Successful");
  };

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>📝 Register</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;