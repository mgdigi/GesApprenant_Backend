import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class CompetenceModel {
    async getAll() {
        return prisma.competence.findMany({
            include: { referentiels: true, niveaux: true }
        });
    }
    async getById(id) {
        return prisma.competence.findUnique({
            include: { referentiels: true, niveaux: true },
            where: { id },
        });
    }
    async create(data) {
        return prisma.competence.create({ data });
    }
    async update(id, data) {
        return prisma.competence.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return prisma.competence.delete({ where: { id } });
    }
    async getNiveauxByCompetenceId(id) {
        return prisma.competence.findUnique({
            where: { id },
            include: { niveaux: true }
        });
    }
}
