/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `AttendanceQueue` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AttendanceQueue_customerId_key" ON "AttendanceQueue"("customerId");
