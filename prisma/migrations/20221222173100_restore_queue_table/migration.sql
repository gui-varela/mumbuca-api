-- AlterTable
ALTER TABLE "Triage" ADD COLUMN     "attendanceQueueId" UUID;

-- CreateTable
CREATE TABLE "AttendanceQueue" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "AttendanceQueue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_attendanceQueueId_fkey" FOREIGN KEY ("attendanceQueueId") REFERENCES "AttendanceQueue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
