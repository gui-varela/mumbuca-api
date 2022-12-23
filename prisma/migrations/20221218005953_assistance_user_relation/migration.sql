/*
  Warnings:

  - You are about to drop the column `userId` on the `Triage` table. All the data in the column will be lost.
  - Added the required column `assistantId` to the `Assistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attendantId` to the `Triage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Triage" DROP CONSTRAINT "Triage_userId_fkey";

-- AlterTable
ALTER TABLE "Assistance" ADD COLUMN     "assistantId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "userId",
ADD COLUMN     "attendantId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_attendantId_fkey" FOREIGN KEY ("attendantId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
