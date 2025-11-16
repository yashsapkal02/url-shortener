import { useState } from "react";
import Layout from "../components/Layout";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) return setError(data.error);

    window.location.href = "/login";
  }

  return (
    <Layout>
      <div className="card center-box">
        <h2 className="page-title">Create Account</h2>

        <form onSubmit={submit}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button>Sign Up</button>

          {error && <div className="alert alert-error">{error}</div>}
        </form>
      </div>
    </Layout>
  );
}
