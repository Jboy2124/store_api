/*
  Warnings:

  - You are about to alter the column `amount` on the `inventory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,2)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `inventory` MODIFY `amount` DECIMAL(65, 30) NULL DEFAULT 0.0;
