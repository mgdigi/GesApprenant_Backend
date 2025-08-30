/*
  Warnings:

  - A unique constraint covering the columns `[photo]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.
  - Made the column `photo` on table `Utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Utilisateur_email_key` ON `Utilisateur`;

-- AlterTable
ALTER TABLE `Utilisateur` MODIFY `password` VARCHAR(191) NULL,
    MODIFY `photo` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ProfilSortie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProfilSortieToUtilisateur` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProfilSortieToUtilisateur_AB_unique`(`A`, `B`),
    INDEX `_ProfilSortieToUtilisateur_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Utilisateur_photo_key` ON `Utilisateur`(`photo`);

-- AddForeignKey
ALTER TABLE `_ProfilSortieToUtilisateur` ADD CONSTRAINT `_ProfilSortieToUtilisateur_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProfilSortie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToUtilisateur` ADD CONSTRAINT `_ProfilSortieToUtilisateur_B_fkey` FOREIGN KEY (`B`) REFERENCES `Utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
