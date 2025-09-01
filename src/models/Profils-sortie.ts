import { PrismaClient } from "@prisma/client";
import { IProfilSortie } from "../types/interface/IProfilSortie.js";

const prisma = new PrismaClient();

export class ProfilSortieModel {
    async getAll(): Promise<IProfilSortie[]> {
        return prisma.profilSortie.findMany(
            {include: {utilisateurs: true, promotions: true}}
        );
    }

    async getById(id: number): Promise<IProfilSortie | null> {
      return prisma.profilSortie.findUnique({
        where: { id },
        include: {utilisateurs: true, promotions: true}
      });
    }

    async create(data: IProfilSortie): Promise<IProfilSortie> {
      return prisma.profilSortie.create({ data });
    }

    async update(id: number, data: Partial<IProfilSortie>): Promise<IProfilSortie> {
      return prisma.profilSortie.update({
        where: { id },
        data,
      });
    }

    async delete(id: number): Promise<IProfilSortie> {
      return prisma.profilSortie.delete({ where: { id } });
    }
}