-- CreateTable
CREATE TABLE "CustomerType" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerTypeOnCustomer" (
    "customerId" UUID NOT NULL,
    "customerTypeId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerTypeOnCustomer_pkey" PRIMARY KEY ("customerId","customerTypeId")
);

-- AddForeignKey
ALTER TABLE "CustomerTypeOnCustomer" ADD CONSTRAINT "CustomerTypeOnCustomer_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerTypeOnCustomer" ADD CONSTRAINT "CustomerTypeOnCustomer_customerTypeId_fkey" FOREIGN KEY ("customerTypeId") REFERENCES "CustomerType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
