/*
  Warnings:

  - Added the required column `agencyId` to the `Assistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `Assistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fowardingId` to the `Assistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triageId` to the `Assistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fowardingId` to the `Triage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Triage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assistance" ADD COLUMN     "agencyId" UUID NOT NULL,
ADD COLUMN     "customerId" UUID NOT NULL,
ADD COLUMN     "fowardingId" UUID NOT NULL,
ADD COLUMN     "triageId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Triage" ADD COLUMN     "customerId" UUID NOT NULL,
ADD COLUMN     "fowardingId" UUID NOT NULL,
ADD COLUMN     "userId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_fowardingId_fkey" FOREIGN KEY ("fowardingId") REFERENCES "Fowarding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_fowardingId_fkey" FOREIGN KEY ("fowardingId") REFERENCES "Fowarding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_triageId_fkey" FOREIGN KEY ("triageId") REFERENCES "Triage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
