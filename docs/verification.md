# Vérification locale — 13 octobre 2026

## Qualité du code

- Biome : succès, sans avertissement.
- knip : succès.
- TypeScript : succès.
- Build de production avec `pnpm check:com` / Turbopack : succès ; deux accueils, huit études de cas et deux images de partage générés statiquement.
- `git diff --check` : succès.

La commande `pnpm check:com` passe entièrement avec Next.js 16.4.0 : Biome, knip, TypeScript et build Turbopack. Aucun déploiement distant n’a été exécuté.

## Navigation et rendu

Les dix routes éditoriales répondent en HTTP 200 avec langue HTML, canonical, alternates et JSON-LD corrects. La racine renvoie une redirection temporaire 307 vers `/fr` ou `/en`, selon le choix manuel mémorisé puis l’en-tête `Accept-Language` (français par défaut). Cette réponse est privée, non mise en cache et varie selon la langue et le cookie. Les locales inconnues, projets inconnus et segments dans la mauvaise langue répondent en 404. Le sitemap comprend dix URLs et les deux images OG répondent en PNG.

Accueil contrôlé à 360, 768 et 1440 px. Fiches GitSetup, NetViewer et Belouga contrôlées sur mobile ; Arbeauté sur ordinateur. Aucun débordement horizontal détecté sur les vues contrôlées. Le chargement différé des captures secondaires est conservé.

Contrôles interactifs réalisés : ouverture du menu par Entrée, fermeture par Échap avec retour du focus, accès aux projets, actualisation d’une fiche, changement de langue conservant le projet et la section, lien d’évitement donnant le focus au contenu principal. La préférence de réduction des animations laisse le contenu visible, sans transformation, avec les transitions désactivées. L’émulation de cette préférence a ensuite été réinitialisée.

## Lighthouse mobile

Audit du build de production local après la migration Tailwind et la mise à jour des dépendances, profil mobile par défaut de Lighthouse :

| Catégorie | Score |
| --- | ---: |
| Performance | 96 |
| Accessibilité | 100 |
| Bonnes pratiques | 100 |
| SEO | 100 |

L’audit des contrastes et celui des intitulés de liens passent. LCP : 2,9 s ; CLS : 0 ; temps de blocage total : 10 ms. Ces mesures locales peuvent varier selon l’appareil, le réseau et l’hébergement final. Elles ne remplacent pas un contrôle après publication.

## Correctifs de navigation et de présentation

- Défilement natif fluide, y compris le retour en haut ; défilement immédiat si la réduction des animations est activée. Contrôle navigateur du départ progressif et de l’arrivée à `scrollY = 0`.
- Logo N/H en majuscules dans la navigation, la page 404 et les images de partage.
- Accueil sur au moins `100dvh` en incluant la navigation : début des projets à 900 px sur un écran de 900 px, à 1024 px sur un écran de 1024 px et à 800 px sur un mobile de 800 px. Sur mobile de 600 px, le contenu reste complet et l’accueil s’allonge. Aucun débordement horizontal sur ces vues.
- Footer bleu-gris clair, texte anthracite et accent désaturé.
- Tests HTTP de langue : dix combinaisons de préférences, poids, langues régionales, absence de langue prise en charge et cookies valides ou invalides. Accès directs `/fr` et `/en` respectés. Le choix manuel français a aussi été testé dans le navigateur puis conservé à une nouvelle visite de `/`.

## Migration Tailwind et dépendances

Les styles de composants sont exprimés en utilitaires Tailwind dans les TSX, avec quelques compositions communes dans `lib/styles.ts`. `app/globals.css` est réduit de 1 942 à 72 lignes, limité au thème, à la base et aux règles globales de hauteur et d’accessibilité. Aucun sélecteur de composant n’y subsiste.

Après cette migration, le build complet, les dix routes, les six routes invalides et les douze cas de sélection de langue ont été revérifiés. Contrôle visuel supplémentaire de l’accueil à 360 et 1440 px, de la fiche GitSetup à 768 px et du changement de langue depuis cette fiche. Aucun débordement horizontal sur ces vues ; les boutons de l’accueil restent sur une ligne à 360 px.

Toutes les dépendances directes ont été mises à jour par `pnpm up --latest` ; `pnpm outdated` ne renvoie aucune dépendance obsolète. Versions principales : Next.js 16.4.0, React 19.3.0, Tailwind 4.3.3, TypeScript 7.0.2, Framer Motion 14.1.0 et Biome 2.5.15. La configuration Biome a été migrée avec l’outil officiel. `tw-animate-css`, devenu inutilisé, a été retiré.

La contrainte Undici de l’outillage GitHub a été corrigée vers une version 6 compatible et corrigée. L’audit pnpm conserve une vulnérabilité de sévérité élevée dans `braces` 3.0.3, dépendance transitive de l’outillage semantic-release, sans version corrigée publiée d’après l’audit : [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Le contrôle `pnpm audit --audit-level=high` de la CI échouera tant que cette alerte subsiste. Aucun filtre d’audit ni contrôle CI n’a été désactivé.
