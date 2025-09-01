import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class ProfilSortieModel {
    async getAll() {
        return prisma.profilSortie.findMany({ include: { utilisateurs: true, promotions: true } });
    }
    async getById(id) {
        return prisma.profilSortie.findUnique({
            where: { id },
            include: { utilisateurs: true, promotions: true }
        });
    }
    async create(data) {
        return prisma.profilSortie.create({ data });
    }
    async update(id, data) {
        return prisma.profilSortie.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return prisma.profilSortie.delete({ where: { id } });
    }
}
