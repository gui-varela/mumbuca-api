/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CustomerType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CustomerType_name_key" ON "CustomerType"("name");
