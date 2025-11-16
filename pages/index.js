import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="card">
        <h1 className="page-title">Welcome</h1>
        <p style={{ fontSize: "1.1rem", marginTop: "10px" }}>
          This is a simple and secure URL shortener.
          <br /><br />
          Sign up or login to create and manage your URLs.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="/signup">Create an account</a> or <a href="/login">Login</a>
        </div>
      </div>
    </Layout>
  );
}
