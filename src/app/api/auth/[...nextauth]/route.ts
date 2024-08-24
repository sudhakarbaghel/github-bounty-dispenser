import NextAuth, { type NextAuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: "Iv23livz4uyjtVcTplPv",
      clientSecret: "c7f0b59ebd357cb7c33bd206c95b4496433d0dbd",
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
