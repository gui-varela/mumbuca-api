/*
  Warnings:

  - You are about to drop the column `assistanceReportId` on the `Assistance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[agencyId]` on the table `Assistance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[forwardingId]` on the table `Assistance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId]` on the table `Assistance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[triageId]` on the table `Assistance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assistantId]` on the table `Assistance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assistanceId]` on the table `AssistanceReport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assistanceId` to the `AssistanceReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assistance" DROP CONSTRAINT "Assistance_assistanceReportId_fkey";

-- AlterTable
ALTER TABLE "Assistance" DROP COLUMN "assistanceReportId";

-- AlterTable
ALTER TABLE "AssistanceReport" ADD COLUMN     "assistanceId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Assistance_agencyId_key" ON "Assistance"("agencyId");

-- CreateIndex
CREATE UNIQUE INDEX "Assistance_forwardingId_key" ON "Assistance"("forwardingId");

-- CreateIndex
CREATE UNIQUE INDEX "Assistance_customerId_key" ON "Assistance"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Assistance_triageId_key" ON "Assistance"("triageId");

-- CreateIndex
CREATE UNIQUE INDEX "Assistance_assistantId_key" ON "Assistance"("assistantId");

-- CreateIndex
CREATE UNIQUE INDEX "AssistanceReport_assistanceId_key" ON "AssistanceReport"("assistanceId");

-- AddForeignKey
ALTER TABLE "AssistanceReport" ADD CONSTRAINT "AssistanceReport_assistanceId_fkey" FOREIGN KEY ("assistanceId") REFERENCES "Assistance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
