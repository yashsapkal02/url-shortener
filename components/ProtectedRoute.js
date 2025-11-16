import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures component renders ONLY on client
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  }, [isClient]);

  if (!isClient) return null; // avoid hydration mismatch

  return children;
}
