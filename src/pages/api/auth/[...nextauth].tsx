import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRETS,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      try {
        await fauna
          .query(
            q.If(
              q.Not(
                q.Exists(
                  q.Match(q.Index('user_by_email'), q.Casefold(user.email))
                )
              ),
              q.Create(q.Collection('users'), { data: { email } }),
              q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
            )
          )
          .then((ret) => console.log(ret))
          .catch((err) =>
            console.error(
              'Error: [%s] %s: %s',
              err.name,
              err.message,
              err.errors()[0].description
            )
          );
        return true;
      } catch (err) {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
