/*
  Warnings:

  - The primary key for the `cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cartId` on the `cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[prodId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Cart_cartId_key` ON `cart`;

-- AlterTable
ALTER TABLE `cart` DROP PRIMARY KEY,
    DROP COLUMN `cartId`,
    ADD PRIMARY KEY (`prodId`);

-- CreateIndex
CREATE UNIQUE INDEX `Cart_prodId_key` ON `Cart`(`prodId`);
