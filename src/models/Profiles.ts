import { PrismaClient } from "@prisma/client";
import { IProfil } from "../interface/IProfil.js";

const prisma = new PrismaClient();

export class ProfilModel {
  async getAll() {
    return prisma.profil.findMany({ 
        include: { utilisateurs: true } });
  }

  async getById(id: number) {
    return prisma.profil.findUnique({ 
        where: { id }, include: { utilisateurs: true } });
  }

  async create(data: IProfil) {
    return prisma.profil.create({ data });
  }

  async update(id: number, data: Partial<IProfil>) {
    return prisma.profil.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.profil.delete({ 
        where: { id } });
  }
}