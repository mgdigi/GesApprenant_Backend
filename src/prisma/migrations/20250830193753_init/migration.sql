/*
  Warnings:

  - Added the required column `statut` to the `Promotion` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `Utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Utilisateur` DROP FOREIGN KEY `Utilisateur_niveauId_fkey`;

-- DropIndex
DROP INDEX `Utilisateur_niveauId_fkey` ON `Utilisateur`;

-- AlterTable
ALTER TABLE `Promotion` ADD COLUMN `statut` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Utilisateur` ADD COLUMN `referentielId` INTEGER NULL,
    MODIFY `photo` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `niveauId` INTEGER NULL;

-- CreateTable
CREATE TABLE `_CompetenceToNiveau` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CompetenceToNiveau_AB_unique`(`A`, `B`),
    INDEX `_CompetenceToNiveau_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CompetenceToReferentiel` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CompetenceToReferentiel_AB_unique`(`A`, `B`),
    INDEX `_CompetenceToReferentiel_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProfilSortieToPromotion` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProfilSortieToPromotion_AB_unique`(`A`, `B`),
    INDEX `_ProfilSortieToPromotion_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_niveauId_fkey` FOREIGN KEY (`niveauId`) REFERENCES `Niveau`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_referentielId_fkey` FOREIGN KEY (`referentielId`) REFERENCES `Referentiel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_B_fkey` FOREIGN KEY (`B`) REFERENCES `Niveau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToReferentiel` ADD CONSTRAINT `_CompetenceToReferentiel_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToReferentiel` ADD CONSTRAINT `_CompetenceToReferentiel_B_fkey` FOREIGN KEY (`B`) REFERENCES `Referentiel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToPromotion` ADD CONSTRAINT `_ProfilSortieToPromotion_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProfilSortie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToPromotion` ADD CONSTRAINT `_ProfilSortieToPromotion_B_fkey` FOREIGN KEY (`B`) REFERENCES `Promotion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
