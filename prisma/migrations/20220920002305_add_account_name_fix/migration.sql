/*
  Warnings:

  - You are about to drop the column `account_name` on the `Movement` table. All the data in the column will be lost.
  - Added the required column `account_name` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "account_name" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "Movement" DROP COLUMN "account_name";
