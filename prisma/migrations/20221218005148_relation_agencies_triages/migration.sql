/*
  Warnings:

  - Added the required column `agencyId` to the `Triage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Triage" ADD COLUMN     "agencyId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
