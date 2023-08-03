/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `amount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `prodId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `transactions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cartId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_prodId_fkey`;

-- AlterTable
ALTER TABLE `cart` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `prodId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inventory` MODIFY `prodId` VARCHAR(191) NOT NULL,
    MODIFY `availQty` INTEGER NULL DEFAULT 0,
    MODIFY `amount` DECIMAL(9, 2) NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    ADD COLUMN `feature` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `image` VARCHAR(191) NULL,
    MODIFY `prodId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`prodId`);

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `amount`,
    DROP COLUMN `prodId`,
    DROP COLUMN `qty`;

-- CreateTable
CREATE TABLE `Details` (
    `detailId` INTEGER NOT NULL AUTO_INCREMENT,
    `transId` INTEGER NULL,
    `prodId` VARCHAR(191) NOT NULL,
    `qty` INTEGER NULL DEFAULT 0,
    `price` DECIMAL(9, 2) NULL DEFAULT 0.0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`detailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Cart_cartId_key` ON `Cart`(`cartId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Details` ADD CONSTRAINT `Details_transId_fkey` FOREIGN KEY (`transId`) REFERENCES `Transactions`(`transId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Details` ADD CONSTRAINT `Details_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Products`(`prodId`) ON DELETE RESTRICT ON UPDATE CASCADE;
