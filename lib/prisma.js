import {PrismaClient} from '@prisma/client';
export const db = new PrismaClient();
//While development we dont want to create a new prisma client on every request, becasue this will cause a memory leak.
//  So we will create a global prisma client and use it in the application.
if(process.env.NODE_ENV !== 'production') {
    global.prisma = db;
}
