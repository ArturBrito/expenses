-- DropIndex
DROP INDEX "Movement_account_id_key";

-- AlterTable
ALTER TABLE "Movement" ADD COLUMN     "movement_id" SERIAL NOT NULL,
ADD CONSTRAINT "Movement_pkey" PRIMARY KEY ("movement_id");
