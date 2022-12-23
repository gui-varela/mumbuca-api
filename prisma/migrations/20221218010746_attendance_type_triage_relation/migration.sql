-- CreateTable
CREATE TABLE "AttendanceTypesOnTriages" (
    "triageId" UUID NOT NULL,
    "attendanceTypeId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendanceTypesOnTriages_pkey" PRIMARY KEY ("triageId","attendanceTypeId")
);

-- AddForeignKey
ALTER TABLE "AttendanceTypesOnTriages" ADD CONSTRAINT "AttendanceTypesOnTriages_triageId_fkey" FOREIGN KEY ("triageId") REFERENCES "Triage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceTypesOnTriages" ADD CONSTRAINT "AttendanceTypesOnTriages_attendanceTypeId_fkey" FOREIGN KEY ("attendanceTypeId") REFERENCES "AttendanceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
