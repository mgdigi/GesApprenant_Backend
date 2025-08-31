import { config } from 'dotenv';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Démarrage du seed...");

  // --------- PROFILS ---------
  const [adminProfil, apprenantProfil, formateurProfil] =
    await prisma.$transaction([
      prisma.profil.create({ data: { libelle: "Administrateur" } }),
      prisma.profil.create({ data: { libelle: "Apprenant" } }),
      prisma.profil.create({ data: { libelle: "Formateur" } }),
    ]);

  // --------- PROFIL SORTIE ---------
  const [devWebSortie, dataScienceSortie] = await prisma.$transaction([
    prisma.profilSortie.create({ data: { libelle: "Développeur Web" } }),
    prisma.profilSortie.create({ data: { libelle: "Data Scientist" } }),
  ]);

  // --------- NIVEAUX ---------
  const niveau1 = await prisma.niveau.create({ data: { libelle: "Niveau 1" } });

  // --------- PROMOTIONS ---------
  const promo2025 = await prisma.promotion.create({
    data: {
      libelle: "Promo 2025",
      dateDebut: "2025-09-01",
      dateFin: "2025-12-31",
      nombreApprenant: 30,
      nombreRefs: 2,
      niveauId: niveau1.id,
      statut: "Active",
    },
  });

  // --------- REFERENTIELS ---------
  const [webDev, dataScience] = await prisma.$transaction([
    prisma.referentiel.create({
      data: {
        nom: "Développement Web",
        description: "Formation complète en HTML, CSS, JS, Node.js",
        nombreApprenant: 30,
        nombreFormateur: 2,
        promotionId: promo2025.id,
      },
    }),
    prisma.referentiel.create({
      data: {
        nom: "Data Science",
        description: "Analyse de données et Machine Learning",
        nombreApprenant: 20,
        nombreFormateur: 1,
        promotionId: promo2025.id,
      },
    }),
  ]);

  // --------- COMPETENCES ---------
  await prisma.competence.createMany({
    data: [
      { libelle: "HTML / CSS" },
      { libelle: "JavaScript" },
      { libelle: "Node.js" },
      { libelle: "Analyse de données" },
    ],
  });

  // --------- TAGS ---------
  await prisma.tag.createMany({
    data: [
      { libelle: "Frontend" },
      { libelle: "Backend" },
      { libelle: "Machine Learning" },
      { libelle: "UI/UX" },
    ],
  });

  // --------- UTILISATEURS ---------
  await prisma.utilisateur.createMany({
    data: [
      {
        nom: "Sane",
        prenom: "Ousseynou",
        email: "saneOuseynou@gmail.com",
        password: "password123",
        adresse: "123 Rue Principale, Dakar",
        telephone: "+221 78 011 82 23",
        profilId: adminProfil.id,
      },
      {
        nom: "Ka",
        prenom: "Mamebousso",
        email: "mamebousso@gmail.com",
        password: "password123",
        adresse: "456 Avenue de la République, Dakar",
        telephone: "+221 77 765 43 21",
        profilId: apprenantProfil.id,
        promotionId: promo2025.id,
        referentielId: webDev.id,
        niveauId: niveau1.id,
      },
      {
        nom: "Wane",
        prenom: "Baila",
        email: "wanebaila@gmail.com",
        password: "password123",
        adresse: "789 Boulevard de l'Indépendance, Dakar",
        telephone: "+221 77 987 65 43",
        profilId: formateurProfil.id,
        niveauId: niveau1.id,
        photo: "https://placehold.co/150x150",
      },
    ],
  });

  console.log("✅ Seed terminé avec succès !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors du seed :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });