import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials){
                try {
                    const user = await prisma.users.findFirst({
                        where: {
                            email: credentials.email
                        }
                    });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password, user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (err) {
                    throw new Error(err);
                }

            }
        })
    ],
});

export {handler as GET, handler as POST}