// components/Layout.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const u = localStorage.getItem("user");
      if (u) setUser(JSON.parse(u));
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <div className="container">
      <header>
        <div>
          <h2>URL Shortener</h2>
          <small>Simple and secure</small>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>

          {user ? (
            <div className="profile-dropdown">
              <div className="profile-btn" onClick={() => setShowMenu(!showMenu)}>
                <span className="avatar">{user.name[0].toUpperCase()}</span>
                <span className="username">{user.name}</span>
                <span>▾</span>
              </div>

              {showMenu && (
                <div className="dropdown-menu">
                  <p className="email">{user.email}</p>
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/signup">Sign up</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </nav>
      </header>

      <main className="card">{children}</main>
    </div>
  );
}
