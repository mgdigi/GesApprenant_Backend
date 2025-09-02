import { IUsers } from "../types/interface/IUser.js";
import bcrypt from "bcrypt";
import prisma from "../prisma/client.js";




export class UserModel {
  async getAll() {
    return prisma.utilisateur.findMany({
      include: { profil: true, niveau: true, referentiel: true, promotion: true }
    });
  }

  async getById(id: number) {
    return prisma.utilisateur.findUnique({
      where: { id },
      include: { profil: true, niveau: true, referentiel: true, promotion: true }
    });
  }

  async create(data: IUsers) {
    return prisma.utilisateur.create({ data });
  }

  async update(id: number, data: Partial<IUsers>) {
    return prisma.utilisateur.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.utilisateur.delete({ where: { id } });
  }

  async getByEmail(email: string) {
    return prisma.utilisateur.findUnique({ where: { email } });
  }

  async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async createRefreshToken(token: string, userId: number) {
    return prisma.refreshToken.create({
      data: {
        token,
        userId
      }
    });
  }
}
