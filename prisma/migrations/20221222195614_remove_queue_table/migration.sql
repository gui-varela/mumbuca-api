/*
  Warnings:

  - You are about to drop the column `attendanceQueueId` on the `Triage` table. All the data in the column will be lost.
  - You are about to drop the `AttendanceQueue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Triage" DROP CONSTRAINT "Triage_attendanceQueueId_fkey";

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "attendanceQueueId";

-- DropTable
DROP TABLE "AttendanceQueue";
