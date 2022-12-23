/*
  Warnings:

  - Added the required column `birth_date` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "birth_date" TEXT NOT NULL;
