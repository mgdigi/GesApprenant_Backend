import { IProfil } from "../types/interface/IProfil.js";
import prisma from "../prisma/client.js";



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