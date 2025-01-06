/*
  Warnings:

  - Made the column `providerId` on table `provider_product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "provider_product" DROP CONSTRAINT "provider_product_providerId_fkey";

-- AlterTable
ALTER TABLE "provider_product" ALTER COLUMN "providerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "provider_product" ADD CONSTRAINT "provider_product_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
