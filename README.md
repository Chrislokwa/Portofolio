Portfolio Sci-Fi

Un magnifique portfolio pour développeur front-end avec un design futuriste de type Sci-Fi, construit avec les technologies web modernes.

![Aperçu du Portfolio](https://via.placeholder.com/1200x600/0a0a0f/00f0ff?text=Sci-Fi+Portfolio)

 Fonctionnalités
 
Esthétique Sci-Fi : Design futuriste cyberpunk avec effets de lueur néon, glassmorphisme et arrière-plans animés
Stack Technologique Moderne : Construit avec Next.js 14, TypeScript et Tailwind CSS
Composants shadcn/ui : Beaux composants UI accessibles
Validation de Formulaires : React Hook Form avec validation Zod
Design Réactif : Entièrement réactif sur tous les appareils
Animations Fluides : Animations et transitions engageantes
Galerie de Projets : Vitrine de projets filtrables avec effets au survol
Formulaire de Contact : Formulaire de contact fonctionnel avec validation en temps réel

 Stack Technologique
 
Framework : Next.js 14 (App Router)
Langage : TypeScript
Styling : Tailwind CSS
Composants : shadcn/ui
Formulaires : React Hook Form + Zod
Icônes : Lucide React
Polices : Orbitron + Rajdhani

📦 Installation
Clonez le référentiel :

bash
git clone <votre-url-repo>
cd scifi-portfolio
Installez les dépendances :

bash
npm install
Lancez le serveur de développement :

bash
npm run dev
Ouvrez l'application : Accédez à http://localhost:3000 dans votre navigateur.


bash
git init
git add .
git commit -m "Commit initial"
git branch -M main
git remote add origin https://github.com/votre-utilisateur/scifi-portfolio.git
git push -u origin main
Allez sur Vercel :


EmailJS :

Utilisez EmailJS pour envoyer des e-mails directement depuis le navigateur

📁 Structure du Projet
Code

scifi-portfolio/
├── app/
│   ├── globals.css      # Styles globaux et animations
│   ├── layout.tsx       # Mise en page racine
│   └── page.tsx         # Page principale
├── components/
│   ├── ui/              # Composants shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── header.tsx       # En-tête de navigation
│   ├── hero.tsx         # Section héros
│   ├── about.tsx        # Section à propos
│   ├── projects.tsx     # Vitrine de projets
│   ├── contact.tsx      # Formulaire de contact
│   └── footer.tsx       # Pied de page
├── lib/
│   ├── utils.ts         # Fonctions utilitaires
│   └── validations.ts   # Schémas de validation Zod
├── public/              # Ressources statiques
├── tailwind.config.ts   # Configuration Tailwind
├── next.config.js       # Configuration Next.js
├── tsconfig.json        # Configuration TypeScript
└── package.json         # Dépendances

Licence
Aucune open source
