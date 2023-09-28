import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class UserService {
    async create(name, email, password) {
        const hashedPassword = await bcrypt.hash(password, 5);
        const result = await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });
        return result;
    }
}

export default new UserService();