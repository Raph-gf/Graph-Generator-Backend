# Graph-Generator-Backend

## Description

Backend Node.js pour la génération et la gestion de graphes.

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/)
- Clé d'API recupérable sur EVERFLOW

## Installation

Clone le dépôt et installe les dépendances :

```bash
git clone https://github.com/ton-utilisateur/graph-generator-backend.git
cd graph-generator-backend
npm install
```

## Configuration

Crée un fichier `.env` à la racine du projet pour y placer tes variables d’environnement (ex : PORT, EVERFLOW_API_KEY, etc.).

## Lancement du serveur

En mode développement (avec nodemon) :

```bash
npm run dev
```

Ou directement :

```bash
node index.mjs
```

## Dépendances principales

- [express](https://www.npmjs.com/package/express) – Serveur web
- [cors](https://www.npmjs.com/package/cors) – Gestion du CORS
- [dotenv](https://www.npmjs.com/package/dotenv) – Variables d’environnement
- [axios](https://www.npmjs.com/package/axios) – Requêtes HTTP
- [eslint](https://www.npmjs.com/package/eslint) – Linting du code

## Contribution

1. Fork le projet
2. Crée une branche (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -am 'Ajoute une nouvelle fonctionnalité'`)
4. Push la branche (`git push origin feature/ma-feature`)
5. Ouvre une Pull Request

## Licence

ISC

---
