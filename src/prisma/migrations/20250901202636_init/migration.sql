-- CreateTable
CREATE TABLE `Profil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NULL,
    `telephone` VARCHAR(191) NULL,
    `profilId` INTEGER NOT NULL,
    `niveauId` INTEGER NULL,
    `statutAD` VARCHAR(191) NULL,
    `referentielId` INTEGER NULL,
    `promotionId` INTEGER NULL,

    UNIQUE INDEX `Utilisateur_email_key`(`email`),
    UNIQUE INDEX `Utilisateur_photo_key`(`photo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `dateDebut` VARCHAR(191) NOT NULL,
    `dateFin` VARCHAR(191) NOT NULL,
    `nombreApprenant` INTEGER NOT NULL,
    `nombreRefs` INTEGER NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `niveauId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Referentiel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `nombreApprenant` INTEGER NOT NULL,
    `nombreFormateur` INTEGER NOT NULL,
    `nombreSession` VARCHAR(191) NULL,
    `promotionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `referentielId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Competence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brief` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `enonce` VARCHAR(191) NOT NULL,
    `datePublication` VARCHAR(191) NOT NULL,
    `echeance` VARCHAR(191) NOT NULL,
    `statutValidation` VARCHAR(191) NOT NULL,
    `etat` VARCHAR(191) NOT NULL,
    `acquisvise` VARCHAR(191) NOT NULL,
    `contraintes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LivrableAttendu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `etat` VARCHAR(191) NOT NULL,
    `dateLivraison` VARCHAR(191) NOT NULL,
    `briefId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LivrablePartiel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `fonctionnalite` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `livrableAttenduId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ressource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `typeRessource` VARCHAR(191) NOT NULL,
    `ressource` VARCHAR(191) NOT NULL,
    `livrableAttenduId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Correction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etat` VARCHAR(191) NOT NULL,
    `note` INTEGER NOT NULL,
    `commentaireFormateur` VARCHAR(191) NOT NULL,
    `dateCorrection` VARCHAR(191) NOT NULL,
    `briefId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Groupe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BriefAffectation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cibleType` VARCHAR(191) NOT NULL,
    `dateAffectation` VARCHAR(191) NOT NULL,
    `briefId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `datePublication` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `utilisateurId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(191) NOT NULL,
    `datePublication` VARCHAR(191) NOT NULL,
    `postId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VoteSolution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note` INTEGER NOT NULL,
    `dateVote` VARCHAR(191) NOT NULL,
    `commentaire` VARCHAR(191) NOT NULL,
    `solutionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfilSortie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Niveau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RefreshToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RefreshToken_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `_BriefToReferentiel` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BriefToReferentiel_AB_unique`(`A`, `B`),
    INDEX `_BriefToReferentiel_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BriefCompetences` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BriefCompetences_AB_unique`(`A`, `B`),
    INDEX `_BriefCompetences_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BriefTags` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BriefTags_AB_unique`(`A`, `B`),
    INDEX `_BriefTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BriefToUtilisateur` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BriefToUtilisateur_AB_unique`(`A`, `B`),
    INDEX `_BriefToUtilisateur_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BriefToGroupe` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BriefToGroupe_AB_unique`(`A`, `B`),
    INDEX `_BriefToGroupe_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProfilSortieToUtilisateur` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProfilSortieToUtilisateur_AB_unique`(`A`, `B`),
    INDEX `_ProfilSortieToUtilisateur_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProfilSortieToPromotion` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProfilSortieToPromotion_AB_unique`(`A`, `B`),
    INDEX `_ProfilSortieToPromotion_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_profilId_fkey` FOREIGN KEY (`profilId`) REFERENCES `Profil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_niveauId_fkey` FOREIGN KEY (`niveauId`) REFERENCES `Niveau`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_referentielId_fkey` FOREIGN KEY (`referentielId`) REFERENCES `Referentiel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_promotionId_fkey` FOREIGN KEY (`promotionId`) REFERENCES `Promotion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotion` ADD CONSTRAINT `Promotion_niveauId_fkey` FOREIGN KEY (`niveauId`) REFERENCES `Niveau`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Referentiel` ADD CONSTRAINT `Referentiel_promotionId_fkey` FOREIGN KEY (`promotionId`) REFERENCES `Promotion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_referentielId_fkey` FOREIGN KEY (`referentielId`) REFERENCES `Referentiel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LivrableAttendu` ADD CONSTRAINT `LivrableAttendu_briefId_fkey` FOREIGN KEY (`briefId`) REFERENCES `Brief`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LivrablePartiel` ADD CONSTRAINT `LivrablePartiel_livrableAttenduId_fkey` FOREIGN KEY (`livrableAttenduId`) REFERENCES `LivrableAttendu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ressource` ADD CONSTRAINT `Ressource_livrableAttenduId_fkey` FOREIGN KEY (`livrableAttenduId`) REFERENCES `LivrableAttendu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Correction` ADD CONSTRAINT `Correction_briefId_fkey` FOREIGN KEY (`briefId`) REFERENCES `Brief`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BriefAffectation` ADD CONSTRAINT `BriefAffectation_briefId_fkey` FOREIGN KEY (`briefId`) REFERENCES `Brief`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solution` ADD CONSTRAINT `Solution_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VoteSolution` ADD CONSTRAINT `VoteSolution_solutionId_fkey` FOREIGN KEY (`solutionId`) REFERENCES `Solution`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToNiveau` ADD CONSTRAINT `_CompetenceToNiveau_B_fkey` FOREIGN KEY (`B`) REFERENCES `Niveau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToReferentiel` ADD CONSTRAINT `_CompetenceToReferentiel_A_fkey` FOREIGN KEY (`A`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompetenceToReferentiel` ADD CONSTRAINT `_CompetenceToReferentiel_B_fkey` FOREIGN KEY (`B`) REFERENCES `Referentiel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefToReferentiel` ADD CONSTRAINT `_BriefToReferentiel_A_fkey` FOREIGN KEY (`A`) REFERENCES `Brief`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefToReferentiel` ADD CONSTRAINT `_BriefToReferentiel_B_fkey` FOREIGN KEY (`B`) REFERENCES `Referentiel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefCompetences` ADD CONSTRAINT `_BriefCompetences_A_fkey` FOREIGN KEY (`A`) REFERENCES `Brief`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefCompetences` ADD CONSTRAINT `_BriefCompetences_B_fkey` FOREIGN KEY (`B`) REFERENCES `Competence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefTags` ADD CONSTRAINT `_BriefTags_A_fkey` FOREIGN KEY (`A`) REFERENCES `Brief`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefTags` ADD CONSTRAINT `_BriefTags_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefToUtilisateur` ADD CONSTRAINT `_BriefToUtilisateur_A_fkey` FOREIGN KEY (`A`) REFERENCES `Brief`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefToUtilisateur` ADD CONSTRAINT `_BriefToUtilisateur_B_fkey` FOREIGN KEY (`B`) REFERENCES `Utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefToGroupe` ADD CONSTRAINT `_BriefToGroupe_A_fkey` FOREIGN KEY (`A`) REFERENCES `Brief`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BriefToGroupe` ADD CONSTRAINT `_BriefToGroupe_B_fkey` FOREIGN KEY (`B`) REFERENCES `Groupe`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToUtilisateur` ADD CONSTRAINT `_ProfilSortieToUtilisateur_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProfilSortie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToUtilisateur` ADD CONSTRAINT `_ProfilSortieToUtilisateur_B_fkey` FOREIGN KEY (`B`) REFERENCES `Utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToPromotion` ADD CONSTRAINT `_ProfilSortieToPromotion_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProfilSortie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProfilSortieToPromotion` ADD CONSTRAINT `_ProfilSortieToPromotion_B_fkey` FOREIGN KEY (`B`) REFERENCES `Promotion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
