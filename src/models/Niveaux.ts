import { PrismaClient } from "@prisma/client";
import { INiveau } from "../types/interface/INiveau.js";

const prisma = new PrismaClient();

export class NiveauModel {
  async getAll(): Promise<INiveau[]> {
    return prisma.niveau.findMany();
  }

  async getById(id: number): Promise<INiveau | null> {
    return prisma.niveau.findUnique({ where: { id } });
  }

  async create(data: INiveau): Promise<INiveau> {
    return prisma.niveau.create({ data });
  }

  async update(id: number, data: Partial<INiveau>): Promise<INiveau> {
    return prisma.niveau.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<INiveau> {
    return prisma.niveau.delete({ where: { id } });
  }


}