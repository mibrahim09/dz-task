-- CreateTable
CREATE TABLE "product_changes" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER,
    "changes" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "product_changes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_changes" ADD CONSTRAINT "product_changes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
