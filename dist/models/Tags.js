import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class TagModel {
    async getAll() {
        return prisma.tag.findMany();
    }
    async getById(id) {
        return prisma.tag.findUnique({
            where: { id }
        });
    }
    async create(data) {
        return prisma.tag.create({ data });
    }
    async update(id, data) {
        return prisma.tag.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return prisma.tag.delete({
            where: { id }
        });
    }
}
