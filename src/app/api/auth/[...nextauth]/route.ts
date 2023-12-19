import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import "dotenv/config";

const api = process.env.API;

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined,
        req: NextApiRequest
      ) {
        const { username, password } = credentials || {};
        const res = await fetch(`${api}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.success) {
          return data;
        } else {
          return null;
        }

        // Return null if user data could not be retrieve
      },
    }),
  ],
};
