/*
  Warnings:

  - Added the required column `account_name` to the `Movement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movement" ADD COLUMN     "account_name" VARCHAR(50) NOT NULL;
