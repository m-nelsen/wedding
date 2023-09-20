import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: process.env.USER_ID as string,
          name: process.env.USER_NAME as string,
          password: process.env.USER_PASSWORD as string,
        };

        return credentials?.username === user.name &&
          credentials?.password === user.password
          ? user
          : null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
