import { PrismaClient} from "@prisma/client";
import { IPromotions } from "../interface/IPromotion.js";

const prisma = new PrismaClient();

export class PromotionModel {
  async getAll() {
    return prisma.promotion.findMany({
      include: { niveau: true, referentiels: true, profilsorties: true, utilisateurs:true }
    });
  }

  async getById(id: number) {
    return prisma.promotion.findUnique({
      where: { id },
      include: { niveau: true, referentiels: true, profilsorties: true }
    });
  }

  async create(data) {
    return prisma.promotion.create({ data });
  }

  async update(id, data) {
    return prisma.promotion.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.promotion.delete({ where: { id } });
  }
}
