import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(email, password);

        // Find the user with the matching email
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        // Check whether the provided password matches the hashed password in the database
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } else {
          throw new Error("Invalid email or password.");
        }
      },
    }),
  ],
  pages: {
    login: "/login",
    register: "/register",
  },
  database: process.env.DATABASE_URL,
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
