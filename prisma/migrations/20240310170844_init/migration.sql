/*
  Warnings:

  - You are about to drop the column `totalCount` on the `CustomerMembership` table. All the data in the column will be lost.
  - Added the required column `totalCount` to the `Membership` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerMembership" DROP COLUMN "totalCount";

-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "totalCount" INTEGER NOT NULL;
