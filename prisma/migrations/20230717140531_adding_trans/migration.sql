/*
  Warnings:

  - You are about to drop the column `amount` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `amount`,
    ADD COLUMN `price` DECIMAL(9, 2) NULL DEFAULT 0.00,
    MODIFY `qty` INTEGER NULL DEFAULT 0;
