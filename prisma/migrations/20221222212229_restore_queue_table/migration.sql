/*
  Warnings:

  - You are about to drop the column `attendanceQueueId` on the `Triage` table. All the data in the column will be lost.
  - Added the required column `agencyId` to the `AttendanceQueue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `AttendanceQueue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forwardingId` to the `AttendanceQueue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Triage" DROP CONSTRAINT "Triage_attendanceQueueId_fkey";

-- AlterTable
ALTER TABLE "AttendanceQueue" ADD COLUMN     "agencyId" UUID NOT NULL,
ADD COLUMN     "customerId" UUID NOT NULL,
ADD COLUMN     "forwardingId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "attendanceQueueId";

-- AddForeignKey
ALTER TABLE "AttendanceQueue" ADD CONSTRAINT "AttendanceQueue_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceQueue" ADD CONSTRAINT "AttendanceQueue_forwardingId_fkey" FOREIGN KEY ("forwardingId") REFERENCES "Forwarding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceQueue" ADD CONSTRAINT "AttendanceQueue_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
