"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(false);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      router.push("/home");
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  // if (!loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  //     </div>
  //   );
  // }

  return (
    <>
      <LoginForm
        Mail={email}
        seMail={setEmail}
        pasword={password}
        setPasword={setPassword}
        Formulir={handleSubmit}
        Erorr={error}
        tittle="Login"
      />
    </>
  );
};

export default page;
