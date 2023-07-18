/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `details` DROP FOREIGN KEY `Details_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_prodId_fkey`;

-- AlterTable
ALTER TABLE `cart` MODIFY `prodId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `details` MODIFY `prodId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inventory` MODIFY `prodId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    MODIFY `prodId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`prodId`);

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Details` ADD CONSTRAINT `Details_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE RESTRICT ON UPDATE CASCADE;
