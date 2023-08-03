/*
  Warnings:

  - You are about to alter the column `price` on the `details` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,2)` to `Double`.
  - You are about to alter the column `amount` on the `inventory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `details` MODIFY `price` DOUBLE NULL;

-- AlterTable
ALTER TABLE `inventory` MODIFY `amount` DOUBLE NULL;
