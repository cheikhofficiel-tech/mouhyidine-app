# Mouhyidine app

Application spirituelle pour écouter des discours, lire des textes, suivre des prières et utiliser un compteur de tasbih.

## Démarrage

```bash
npm install
npm run dev
```

## Build Android avec Capacitor

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

## Production

```bash
npm run build
npx cap sync android
```
