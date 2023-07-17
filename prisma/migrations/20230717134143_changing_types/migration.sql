-- AlterTable
ALTER TABLE `inventory` MODIFY `availQty` INTEGER NULL DEFAULT 0,
    MODIFY `amount` DECIMAL(9, 2) NULL DEFAULT 0.0;
