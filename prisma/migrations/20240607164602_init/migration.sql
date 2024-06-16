-- CreateTable
CREATE TABLE `Factura` (
    `id` VARCHAR(191) NOT NULL,
    `mercado` VARCHAR(191) NOT NULL,
    `propietario` VARCHAR(191) NOT NULL,
    `fechaFactura` DATETIME(3) NOT NULL,
    `numero_local` INTEGER NOT NULL,
    `concepto` VARCHAR(191) NOT NULL,
    `mes` VARCHAR(191) NOT NULL,
    `monto` DECIMAL(10, 2) NOT NULL,
    `usuario` VARCHAR(191) NOT NULL,
    `DNI` VARCHAR(191) NOT NULL,
    `permiso_operacion` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
