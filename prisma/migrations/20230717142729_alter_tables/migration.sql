/*
  Warnings:

  - You are about to drop the column `price` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `prodId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `transactions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_prodId_fkey`;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `price`,
    DROP COLUMN `prodId`,
    DROP COLUMN `qty`;

-- CreateTable
CREATE TABLE `Details` (
    `detailId` INTEGER NOT NULL AUTO_INCREMENT,
    `transId` INTEGER NULL,
    `prodId` INTEGER NOT NULL,
    `qty` INTEGER NULL DEFAULT 0,
    `price` DECIMAL(9, 2) NULL DEFAULT 0.0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`detailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Details` ADD CONSTRAINT `Details_transId_fkey` FOREIGN KEY (`transId`) REFERENCES `Transactions`(`transId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Details` ADD CONSTRAINT `Details_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE RESTRICT ON UPDATE CASCADE;
