/*
  Warnings:

  - Added the required column `refresh_token` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "refresh_token" VARCHAR(200) NOT NULL;
