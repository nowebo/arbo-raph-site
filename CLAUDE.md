# CLAUDE.md — Site Web 3D Dynamique

## Objectif du projet

Créer des sites internet modernes avec des expériences visuelles 3D dynamiques, des animations immersives et des interactions fluides.

## Stack technologique privilégiée

### Rendu 3D
- **Three.js** — librairie 3D WebGL principale
- **React Three Fiber (R3F)** — intégration Three.js dans React
- **@react-three/drei** — helpers et composants R3F prêts à l'emploi
- **@react-three/postprocessing** — effets post-traitement (bloom, glitch, etc.)

### Framework web
- **React 18+** avec **Vite** comme bundler
- **TypeScript** recommandé
- **TailwindCSS** pour le style hors-canvas

### Animations & interactions
- **GSAP** — animations timeline complexes, ScrollTrigger
- **Framer Motion** — transitions UI React
- **Lenis** — smooth scroll

## Conventions de code

- Les scènes 3D vivent dans `src/scenes/` ou `src/components/3d/`
- Les shaders GLSL dans `src/shaders/` (`.vert` / `.frag` ou `.glsl`)
- Les assets 3D (`.glb`, `.gltf`) dans `public/models/`
- Les textures dans `public/textures/`
- Préférer les composants fonctionnels React avec hooks
- Nommer les composants Three.js avec le préfixe majuscule (ex: `<Scene />`, `<ParticleField />`)

## Bonnes pratiques 3D

- Toujours disposer d'une `<Suspense>` avec fallback pour le chargement des modèles
- Utiliser `useGLTF.preload()` pour les modèles critiques
- Optimiser les géométries : `BufferGeometry`, instancing pour les objets répétés
- Éviter les `new Three.Vector3()` dans la boucle de rendu (réutiliser avec `.set()`)
- Nettoyer les ressources dans `useEffect` return (dispose des géométries/matériaux)
- Limiter les draw calls : fusionner les maillages statiques
- Cibler 60 fps sur desktop, 30 fps minimum sur mobile

## Performance

- Utiliser `useFrame` avec delta time pour des animations frame-rate indépendantes
- Activer `antialias: false` sur mobile, `dpr={[1, 2]}` pour limiter le pixel ratio
- Lazy-loader les scènes lourdes avec `React.lazy()`
- Compresser les modèles avec **Draco** ou **Meshopt**

## Initialisation d'un nouveau projet

```bash
npm create vite@latest . -- --template react-ts
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install gsap @types/three
npm install -D tailwindcss
```

## Structure de dossiers recommandée

```
src/
  components/
    3d/          # Composants Three.js / R3F
    ui/          # Composants interface 2D
  scenes/        # Scènes complètes
  shaders/       # Fichiers GLSL
  hooks/         # Custom hooks (useScrollProgress, useViewport…)
  utils/         # Helpers mathématiques, loaders
public/
  models/        # .glb / .gltf
  textures/      # Images, HDR
  fonts/         # Polices 3D (typeface.js)
```
