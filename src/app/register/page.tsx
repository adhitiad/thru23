"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from "@/components";
import { auth } from "@/libs/firebase";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(false);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(true);
  };

  return (
    <>
      <div className="w-full justify-center items-center bg-gradient-to-br from-[#90ce67] to-[#491818]">
        <LoginForm
          Mail={email}
          seMail={setEmail}
          pasword={password}
          setPasword={setPassword}
          Formulir={handleSubmit}
          tittle="Register"
          Erorr={error}
        />
      </div>
    </>
  );
};

export default page;
