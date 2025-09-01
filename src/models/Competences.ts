import  {PrismaClient} from '@prisma/client';
import { ICompetence } from '../interface/ICompetence.js';

const prisma = new PrismaClient();


export class CompetenceModel {
    async getAll(): Promise<ICompetence[]> {
        return prisma.competence.findMany({
            include: { referentiels: true , niveaux: true }
        });
    }

    async getById(id: number): Promise<ICompetence | null> {
      return prisma.competence.findUnique({
        include: { referentiels: true , niveaux: true },    
        where: { id },
      });
    }

    async create(data: ICompetence): Promise<ICompetence> {
      return prisma.competence.create({ data });
    }

    async update(id: number, data: Partial<ICompetence>): Promise<ICompetence> {
      return prisma.competence.update({
        where: { id },
        data,
      });
    }

    async delete(id: number): Promise<ICompetence> {
      return prisma.competence.delete({ where: { id } });
    }

    async getNiveauxByCompetenceId(id: number) {
        return prisma.competence.findUnique({
            where: { id },
            include: { niveaux: true }
        });
    }

}