import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
 // --------- PROFILS ---------
 const adminProfil = await prisma.profil.create({ data: { libelle: "Administrateur" } });
 const apprenantProfil = await prisma.profil.create({ data: { libelle: "Apprenant" } });
 const formateurProfil = await prisma.profil.create({ data: { libelle: "Formateur" } });


 // --------- PROMOTIONS ---------
 const promo2025 = await prisma.promotion.create({
   data: {
     libelle: "Promo 2025",
     dateDebut: "2025-09-01",
     dateFin: "2025-12-31",
     nombreApprenant: 30,
     nombreRefs: 2,
     niveau: "Débutant",
     statut: "Active",
   },
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
       prenom: "mamebousso",
       email: "mamebousso@gmail.com",
       password: "password123",
       adresse: "456 Avenue de la République, Dakar",
       telephone: "+221 77 765 43 21",
       profilId: apprenantProfil.id,
       promotionId: promo2025.id,
     },
     {
       nom: "Wane",
       prenom: "Baila",
       email: "wanebaila@gmail.com",
       password: "password123",
       adresse: "789 Boulevard de l'Indépendance, Dakar",
       telephone: "+221 77 987 65 43",
       profilId: formateurProfil.id,
     },
   ],
 });


 // --------- REFERENTIELS ---------
 const webDev = await prisma.referentiel.create({
   data: {
     nom: "Développement Web",
     description: "Formation complète en HTML, CSS, JS, Node.js",
     nombreApprenant: 30,
     nombreFormateur: 2,
     promotionId: promo2025.id,
   },
 });


 const dataScience = await prisma.referentiel.create({
   data: {
     nom: "Data Science",
     description: "Analyse de données et Machine Learning",
     nombreApprenant: 20,
     nombreFormateur: 1,
     promotionId: promo2025.id,
   },
 });


 console.log("✅ Seed terminé !");
}


main()
 .catch((e) => {
   console.error(e);
   process.exit(1);
 })
 .finally(async () => {
   await prisma.$disconnect();
 });


