/*
  Warnings:

  - A unique constraint covering the columns `[login_id]` on the table `Login` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Login_login_id_key" ON "Login"("login_id");
