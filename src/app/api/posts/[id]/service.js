import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class UserService {
    async get(id){
        const result = await prisma.post.findFirst({
            where: {
                id: parseInt(id)
            }
        });
        return result;
    }
}

export default new UserService();