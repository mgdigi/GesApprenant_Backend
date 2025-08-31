import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class UserModel {
    async getAll() {
        return prisma.utilisateur.findMany({
            include: { profil: true, niveau: true, referentiel: true, promotion: true }
        });
    }
    async getById(id) {
        return prisma.utilisateur.findUnique({
            where: { id },
            include: { profil: true, niveau: true, referentiel: true, promotion: true }
        });
    }
    async create(data) {
        return prisma.utilisateur.create({ data });
    }
    async update(id, data) {
        return prisma.utilisateur.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return prisma.utilisateur.delete({ where: { id } });
    }
}
