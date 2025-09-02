import prisma from "../prisma/client.js";
export class NiveauModel {
    async getAll() {
        return prisma.niveau.findMany();
    }
    async getById(id) {
        return prisma.niveau.findUnique({ where: { id } });
    }
    async create(data) {
        return prisma.niveau.create({ data });
    }
    async update(id, data) {
        return prisma.niveau.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return prisma.niveau.delete({ where: { id } });
    }
}
