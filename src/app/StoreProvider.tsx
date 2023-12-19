"use client";
import { useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/libs/firebase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClientRef = useRef<QueryClient>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      queryClientRef.current?.setQueryData(["user"], user);
    } else {
      queryClientRef.current?.setQueryData(["user"], null);
    }
  });

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
}
