# Exemple Claire - Mini site location saisonnière

Ce dossier contient un site vitrine simple, adapté à une personne sans expérience en code.
Il suffit de modifier les textes et les photos.

## Ouvrir le site en local
- Ouvrir `index.html` dans un navigateur, ou
- Lancer un petit serveur local : `python3 -m http.server` puis aller sur http://localhost:8000/exemples/claire-location/

## Modifier les textes
- Les textes sont dans les fichiers HTML (ex: `index.html`, `logement.html`).
- Remplacer les phrases entre les balises `<p>` et `<h1>`.

## Remplacer les photos
- Mettre vos images dans `assets/photos/`.
- Garder des noms simples (ex: `photo_1.jpeg`).
- Modifier les balises `<img>` dans `galerie.html` et `index.html`.

## Mettre votre calendrier Google
1) Créer un Google Calendar pour la location.
2) Dans les paramètres du calendrier, activer le partage public (lecture seule).
3) Copier le lien "Intégrer le calendrier".
4) Dans `disponibilites.html`, remplacer l'URL de l'iframe par votre lien.

Astuce : pour synchroniser avec votre ordinateur, utilisez le lien iCal privé de Google Calendar.

## Publier sur GitHub Pages (optionnel)
- Mettre les fichiers du site à la racine d'un dépôt.
- Activer GitHub Pages dans Settings > Pages.
- Choisir la branche `main` et le dossier `/`.
