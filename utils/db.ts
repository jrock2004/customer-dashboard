import { PrismaClient } from "@prisma/client";
// import type { Customer as CustomerProps, Membership as MembershipProps } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export type {
  Customer as TCustomer,
  Membership as TMembership,
} from "@prisma/client";
// export type Customer = CustomerProps;
// export type Membership = MembershipProps;
