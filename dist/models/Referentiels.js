import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class ReferentielModel {
    async getAll() {
        return prisma.referentiel.findMany({
            include: {
                utilisateurs: true,
                sessions: true,
                briefs: true,
                promotion: true,
                competences: true,
            },
        });
    }
    async getById(id) {
        return prisma.referentiel.findUnique({
            where: { id },
            include: {
                utilisateurs: true,
                sessions: true,
                briefs: true,
                promotion: true,
                competences: true,
            },
        });
    }
    async create(data) {
        return prisma.referentiel.create({ data });
    }
    async update(id, data) {
        return prisma.referentiel.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return prisma.referentiel.delete({ where: { id } });
    }
}
