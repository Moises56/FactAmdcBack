/*
Warnings:
- Added the required column `correlativo` to the `Factura` table without a default value. This is not possible if the table is not empty.
*/
-- AlterTable
ALTER TABLE `Factura`
ADD COLUMN `correlativo` VARCHAR(255) DEFAULT 'Fact-2024-1';