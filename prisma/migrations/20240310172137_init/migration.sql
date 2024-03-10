/*
  Warnings:

  - You are about to drop the column `count` on the `CustomerMembership` table. All the data in the column will be lost.
  - Added the required column `remaining` to the `CustomerMembership` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerMembership" DROP COLUMN "count",
ADD COLUMN     "remaining" INTEGER NOT NULL;
