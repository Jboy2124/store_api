/*
  Warnings:

  - The primary key for the `cart` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `cart` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`prodId`, `userId`);

-- CreateIndex
CREATE INDEX `Cart_prodId_userId_idx` ON `Cart`(`prodId`, `userId`);