import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class UserService {
    async read(){
        const result = await prisma.post.findMany({});
        return result;
    }
}

export default new UserService();