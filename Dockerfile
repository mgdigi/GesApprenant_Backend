# Étape 1 : Image Node légère
FROM node:20-alpine


# Étape 2 : Répertoire de travail
WORKDIR /app


# Étape 3 : Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install


# Étape 4 : Copier tout le code source
COPY . .


# Étape 5 : Copier le .env (Prisma lira la variable DATABASE_URL à runtime)
COPY .env .env


# Étape 6 : Ne pas générer Prisma au build, mais au run pour éviter les erreurs
# RUN npx prisma generate


# Étape 7 : Exposer le port de l'application
EXPOSE 3000


# Étape 8 : Lancer l'application
CMD ["npx", "ts-node-dev", "--respawn", "src/index.ts"]



