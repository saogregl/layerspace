import {PrismaClient} from '@prisma/client'; 

declare global { 
    var prisma: PrismaClient | undefined 
}

const prismaClient = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prismaClient;

export default prismaClient;