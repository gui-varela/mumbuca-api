/*
  Warnings:

  - Added the required column `assistanceReportId` to the `Assistance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assistance" ADD COLUMN     "assistanceReportId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Triage" ADD COLUMN     "attendanceQueueId" UUID;

-- CreateTable
CREATE TABLE "AssistanceReport" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" INTEGER NOT NULL DEFAULT 1,
    "report" TEXT NOT NULL,

    CONSTRAINT "AssistanceReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceQueue" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "AttendanceQueue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_attendanceQueueId_fkey" FOREIGN KEY ("attendanceQueueId") REFERENCES "AttendanceQueue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_assistanceReportId_fkey" FOREIGN KEY ("assistanceReportId") REFERENCES "AssistanceReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
