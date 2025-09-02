import prisma from "../prisma/client.js";
export class ProfilModel {
    async getAll() {
        return prisma.profil.findMany({
            include: { utilisateurs: true }
        });
    }
    async getById(id) {
        return prisma.profil.findUnique({
            where: { id }, include: { utilisateurs: true }
        });
    }
    async create(data) {
        return prisma.profil.create({ data });
    }
    async update(id, data) {
        return prisma.profil.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma.profil.delete({
            where: { id }
        });
    }
}
