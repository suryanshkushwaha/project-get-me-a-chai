import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import connectDB from '@/db/ConnectDB';
import User from '@/models/User';

export const authOptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'github') {
        await connectDB();
        // Check if the user already exists in the database
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          // Create a new user
          await User.create({
            email: user.email,
            username: user.email.split('@')[0],
          });
        }
        return true;
      }
      return false;
    },
    async session({ session, token }) {
      // Ensure database connection
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.name = dbUser.username; // Add username to session
      }
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
