-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_email_key" ON "Order"("email");
