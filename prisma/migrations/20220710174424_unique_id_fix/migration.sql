/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Login` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Login_login_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Login_user_id_key" ON "Login"("user_id");
