"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProviderAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user as any) {
      setUser(user as any);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  });

  if (loading) {
    return (
      <>
        <div className="w-full justify-center items-center">
          <div className="w-36 h-36 border-8 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
      </>
    );
  }

  if (error !== null) {
    const errorObj: Error = error;

    return <div>Error: {errorObj.message}</div>;
  }

  return <>{user ? children : router.push("/login")}</>;
}
