import { PrismaClient } from "@prisma/client";
import type * as Prisma from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export type TCustomer = Prisma.Customer;
export type TMembership = Prisma.Membership;
