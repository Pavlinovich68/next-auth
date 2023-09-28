import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class PostService {
    async read(){
        const result = await prisma.post.findMany({});
        return result;
    }
}

export default new PostService();