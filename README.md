# MacBook Pro Landing Page 🚀

An Apple-inspired, interactive landing page featuring 3D MacBook Pro models with smooth scroll animations, dynamic video textures, and real-time customization options.

![MacBook Landing Page](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?style=flat&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- **Interactive 3D Models**: High-quality MacBook Pro models (14" & 16") rendered with Three.js
- **Dynamic Customization**:
  - Real-time color switching (Space Grey & Black)
  - Model size toggle between 14" and 16" variants
- **Video Textures**: Dynamic video playback on the MacBook screen with proper cleanup
- **Scroll Animations**: Advanced GSAP ScrollTrigger animations including:
  - Smooth scroll-based model rotations
  - Synchronized video texture changes
  - Animated feature reveals
- **Responsive Design**: Optimized for desktop and mobile devices
- **Performance Optimized**:
  - Video texture preloading
  - Proper memory management and cleanup
  - Efficient state management with Zustand

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - Latest React with modern features
- **Vite 7.2.2** - Lightning-fast build tool and dev server

### 3D Graphics

- **Three.js 0.181.1** - 3D rendering engine
- **React Three Fiber 9.4.0** - React renderer for Three.js
- **React Three Drei 10.7.7** - Useful helpers for R3F

### Animation

- **GSAP 3.13.0** - Professional-grade animation library
- **@gsap/react 2.1.2** - React integration for GSAP
- **ScrollTrigger** - Scroll-based animations

### Styling

- **TailwindCSS 4.1.17** - Utility-first CSS framework

### State Management

- **Zustand 5.0.8** - Lightweight state management

### Utilities

- **clsx** - Conditional className utility
- **react-responsive** - Media query hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd macbook-landing-page
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
macbook-landing-page/
├── public/
│   ├── models/          # 3D model files (.glb)
│   ├── videos/          # Feature videos and hero video
│   ├── fonts/           # Custom font files
│   └── ...              # Images and icons
├── src/
│   ├── components/
│   │   ├── models/      # 3D MacBook model components
│   │   ├── three/       # Three.js utilities and helpers
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   ├── Viewer.jsx
│   │   ├── Features.jsx
│   │   ├── Performance.jsx
│   │   ├── Highlights.jsx
│   │   └── Footer.jsx
│   ├── constants/       # App constants and configuration
│   ├── store/           # Zustand state management
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## 🎨 Key Components

### Viewer Component

Interactive 3D model viewer with color and size customization controls.

### Features Component

Scroll-triggered feature showcase with rotating 3D model and dynamic video textures.

### Performance Component

Performance metrics and specifications display with engaging animations.

### MacBook Models

Three separate 3D model components for different MacBook variants, each optimized with:

- Dynamic material color changes
- Video texture mapping
- Proper texture disposal and cleanup

## 🔧 State Management

Using Zustand for global state:

- `color`: Current MacBook color
- `scale`: Current model scale (14" or 16")
- `texture`: Current video texture path

## 🎯 Performance Optimizations

- Video preloading for smooth texture transitions
- Manual video texture management to avoid Suspense re-triggering
- Proper cleanup and disposal of Three.js resources
- Responsive scaling based on device type
- Efficient GSAP timeline configurations

## 📝 License

This project uses a CC-BY-4.0 licensed 3D model by [jackbaeten](https://sketchfab.com/jackbaeten).

## 🙏 Acknowledgments

- Tutorial by [JS Mastery](https://www.youtube.com/@javascriptmastery) - Followed along to learn advanced Three.js and GSAP techniques
- 3D Model: [MacBook Pro M3 16 inch 2024](https://sketchfab.com/3d-models/macbook-pro-m3-16-inch-2024-8e34fc2b303144f78490007d91ff57c4) by jackbaeten
- Inspired by Apple's design language and product pages

## 👨‍💻 Developer

Built with ❤️ using modern web technologies
