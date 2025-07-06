import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '160575353182-k2i4dh32o9paoahqqc75aggn3p6aohl6.apps.googleusercontent.com',
            clientSecret: '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',
            authorization: {
                params: {
                    prompt: 'select_account',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async session({ session, token, user }) {
            return session;
        },
        async redirect({ url, baseUrl }) {
            return '/dashboard';
        }
    }
});

export { handler as GET, handler as POST };