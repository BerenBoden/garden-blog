import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req){
                const {email, password} = credentials
                console.log(email, password)
                if(email !== 'john@gmail.com' || password !== '123456'){
                    throw new Error('Invalid email or password.')
                }
                return {id: '1234', name: "John Doe", email: "john@gmail.com"}
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}

export default NextAuth(authOptions)