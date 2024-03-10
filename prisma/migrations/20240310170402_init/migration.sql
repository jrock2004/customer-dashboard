/*
  Warnings:

  - You are about to drop the column `count` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `totalCount` on the `Membership` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_memberId_fkey";

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "count",
DROP COLUMN "totalCount";

-- CreateTable
CREATE TABLE "CustomerMembership" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "totalCount" INTEGER NOT NULL,
    "membershipId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerMembership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomerMembership" ADD CONSTRAINT "CustomerMembership_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMembership" ADD CONSTRAINT "CustomerMembership_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
