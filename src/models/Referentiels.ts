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

  async getById(id: number) {
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

  async create(data: any) {
    return prisma.referentiel.create({ data });
  }

  async update(id: number, data: any) {
    return prisma.referentiel.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.referentiel.delete({ where: { id } });
  }
}
