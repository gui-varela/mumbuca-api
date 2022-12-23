/*
  Warnings:

  - You are about to drop the column `fowardingId` on the `Assistance` table. All the data in the column will be lost.
  - You are about to drop the column `fowardingId` on the `Triage` table. All the data in the column will be lost.
  - You are about to drop the `Fowarding` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `forwardingId` to the `Assistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forwardingId` to the `Triage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assistance" DROP CONSTRAINT "Assistance_fowardingId_fkey";

-- DropForeignKey
ALTER TABLE "Triage" DROP CONSTRAINT "Triage_fowardingId_fkey";

-- AlterTable
ALTER TABLE "Assistance" DROP COLUMN "fowardingId",
ADD COLUMN     "forwardingId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "fowardingId",
ADD COLUMN     "forwardingId" UUID NOT NULL;

-- DropTable
DROP TABLE "Fowarding";

-- CreateTable
CREATE TABLE "Forwarding" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Forwarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Forwarding_name_key" ON "Forwarding"("name");

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_forwardingId_fkey" FOREIGN KEY ("forwardingId") REFERENCES "Forwarding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_forwardingId_fkey" FOREIGN KEY ("forwardingId") REFERENCES "Forwarding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
