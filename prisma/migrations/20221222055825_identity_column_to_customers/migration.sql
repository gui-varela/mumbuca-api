/*
  Warnings:

  - A unique constraint covering the columns `[identity]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identity` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "identity" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_identity_key" ON "Customer"("identity");
