# Exemple Claire - Mini site location saisonniere

Ce dossier contient un site vitrine simple, adapte a une personne sans experience en code.
Il suffit de modifier les textes et les photos.

## Ouvrir le site en local
- Ouvrir `index.html` dans un navigateur, ou
- Lancer un petit serveur local : `python3 -m http.server` puis aller sur http://localhost:8000/exemples/claire-location/

## Modifier les textes
- Les textes sont dans les fichiers HTML (ex: `index.html`, `logement.html`).
- Remplacer les phrases entre les balises `<p>` et `<h1>`.

## Remplacer les photos
- Mettre vos images dans `assets/photos/`.
- Garder des noms simples (ex: `photo-01.jpg`).
- Modifier les balises `<img>` dans `galerie.html` et `index.html`.

## Mettre votre calendrier Google
1) Creer un Google Calendar pour la location.
2) Dans les parametres du calendrier, activer le partage public (lecture seule).
3) Copier le lien "Integrer le calendrier".
4) Dans `disponibilites.html`, remplacer l'URL de l'iframe par votre lien.

Astuce : pour synchroniser avec votre ordinateur, utilisez le lien iCal prive de Google Calendar.

## Publier sur GitHub Pages (optionnel)
- Mettre les fichiers du site a la racine d'un depot.
- Activer GitHub Pages dans Settings > Pages.
- Choisir la branche `main` et le dossier `/`.

