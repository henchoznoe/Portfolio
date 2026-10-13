# Portfolio — Noé Henchoz

Portfolio bilingue français / anglais, destiné aux recruteurs et contacts professionnels. Next.js, TypeScript, Tailwind CSS et Framer Motion. Thème clair, police Manrope auto-hébergée et contenus rendus côté serveur.

## Développement

Node.js 22.22.2 (LTS) ou 24.15+ et pnpm 11+.

```sh
pnpm install
pnpm dev
pnpm check:com
```

`pnpm check:com` exécute Biome, knip, TypeScript et le build de production. `pnpm build` puis `pnpm start` permettent de vérifier la version de production localement.

## Structure

- `app/[locale]` : accueil `/fr` et `/en`, fiches `/fr/projets/[slug]` et `/en/projects/[slug]`.
- `components/portfolio` : contenu serveur, navigation interactive et apparitions légères.
- `lib/config/portfolio.ts` : profil, parcours, compétences, intérêts et traductions.
- `lib/config/projects.ts` : quatre études de cas et index secondaire.
- `lib/config/seo.ts` : métadonnées et données structurées.
- `lib/styles.ts` : compositions réutilisables de classes utilitaires Tailwind.
- `app/og/[locale]` : images de partage générées statiquement.
- `public/work/captures` : captures publiques des projets.
- `docs/content-sources.md` : provenance et limites des contenus.

La racine choisit `/fr` ou `/en` selon le choix manuel mémorisé, puis l’en-tête `Accept-Language` du navigateur (français par défaut). Le changement de langue conserve le projet ou la section courante. Toutes les pages éditoriales sont générées à la compilation, sans appel à GitHub ou LinkedIn pendant la visite. Les locales, chemins et projets inconnus affichent une page 404. La page 404 globale utilise l’option Next.js `experimental.globalNotFound`, nécessaire avec le layout racine dynamique par langue.

## Styles

Tailwind CSS est utilisé en priorité dans les composants TSX, y compris pour les variantes responsive, les survols, les focus et les pseudo-éléments. Les compositions partagées se trouvent dans `lib/styles.ts` et les titres de sections dans `components/portfolio/section-heading.tsx`. `app/globals.css` contient uniquement le thème, les styles de base et les règles globales nécessaires à la hauteur de navigation et à la réduction des animations. Utiliser du CSS natif seulement lorsqu’un utilitaire ne suffit pas.

## Contenus et médias

Les traductions partagent les mêmes projets, liens et technologies. Une fiche décrit le contexte, la contribution, les décisions techniques, une difficulté et le résultat observable. Les schémas sont explicitement distingués des captures. Aucun CV n’est proposé sans document actuel.

Pour ajouter une réalisation, renseigner les deux langues et les médias locaux, puis vérifier les routes, les métadonnées et le changement de langue. Le sitemap et les données structurées dérivent des mêmes données.

## Accessibilité et validation visuelle

Navigation native, lien d’évitement, focus visibles, menu mobile pilotable au clavier avec fermeture par Échap. Le contenu reste visible sans animation ; `prefers-reduced-motion` désactive les apparitions et transitions. Vérifier les deux langues à 360, 768 et 1440 px et contrôler les fiches directement, après actualisation et sur une URL inconnue.

Les contrôles locaux ne constituent pas une publication. La livraison et les workflows GitHub existants restent une étape séparée.

## Licence

Code sous licence MIT. Manrope sous SIL Open Font License, incluse dans `app/fonts/Manrope-LICENSE.txt`. Les portraits et captures servent à présenter les réalisations de leur auteur.
