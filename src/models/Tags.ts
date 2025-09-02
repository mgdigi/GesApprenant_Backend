import {ITag} from "../types/interface/ITag.js";
import prisma from "../prisma/client.js";


export class TagModel
{
    async getAll():Promise<ITag[]>
    {
        return prisma.tag.findMany();
    }

    async getById(id:number):Promise<ITag>
    {
        return prisma.tag.findUnique({
            where:{id}
        });
    }
    
    async create(data:ITag):Promise<ITag>
    {
        return prisma.tag.create({data})
    }

    async update(id:number, data:Partial<ITag>):Promise<ITag>
    {
        return prisma.tag.update({
            where : {id}, 
            data
        })
    }

    async delete(id: number): Promise<ITag>
    {
        return prisma.tag.delete({
            where : {id}
        })
    }
    
}