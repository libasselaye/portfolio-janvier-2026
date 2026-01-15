# Portfolio Mame Libasse Mboup (FR/EN)

Portfolio one-page bilingue (FR/EN) construit avec **React + Vite + TypeScript + Tailwind CSS**.

## Démarrage rapide

```bash
npm install
npm run dev
```

## Formulaire “Écrivez-moi”

Le webhook est configuré via une variable d’environnement Vite.
Créez un fichier `.env` (non commité) à partir de `.env.example` et renseignez :

```
VITE_WEBHOOK_URL=https://n8n.srv1268950.hstgr.cloud/webhook/36ae0deb-36f0-4b0a-b7ec-6f95331c22dc
```

Important : la variable est **injectée au build**. Sur VPS, exportez `VITE_WEBHOOK_URL`
avant `npm run build`.

Build production :

```bash
npm run build
```

## Modifier le contenu (FR / EN)

Tout le contenu est centralisé dans :

- `src/content/fr.ts`
- `src/content/en.ts`

Vous pouvez ajouter des projets, modifier les textes, ou mettre à jour les liens (repo/demo/paper) sans toucher au layout.

## Remplacer le CV

Le CV est servi depuis `public/cv_libasse.pdf`.
Si vous remplacez ce fichier, mettez à jour `hero.cvUrl` dans `src/content/fr.ts` et `src/content/en.ts`.

## Déploiement VPS (Nginx)

1. Build local :

```bash
npm run build
```

2. Copiez le dossier `dist` sur votre serveur (ex: `/var/www/portfolio`).
3. Exemple de configuration Nginx :

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

4. Rechargez Nginx :

```bash
sudo nginx -s reload
```

## Personnalisation rapide

- **Couleurs / Typographies** : `src/index.css`
- **Composants réutilisables** : `src/components/`
- **Sections** : `src/App.tsx`
