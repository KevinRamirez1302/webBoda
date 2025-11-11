# 💍 Sitio Web de Boda - Gonzalo & Xiomara

Sitio web elegante para celebrar la boda de Gonzalo y Xiomara el 10 de Enero de 2026.

## ✨ Características

- 🎨 Diseño elegante con colores burgundy (#722f37) y beige
- 📱 Totalmente responsive (móvil, tablet, desktop)
- ✉️ Animación de apertura de invitación interactiva
- ⏱️ Cuenta regresiva hasta el día de la boda
- 📅 Cronograma detallado del evento
- 📍 Ubicaciones con mapas integrados
- 💌 Sistema RSVP con formulario de confirmación
- 🎁 Información de registro de regalos
- 💬 Carrusel de buenos deseos de invitados
- 🎵 Música de fondo con control de reproducción
- ❤️ Corazones flotantes decorativos
- 🌙 Prevención de modo oscuro para mantener el diseño

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/KevinRamirez1302/webBoda.git

# Navegar al directorio
cd boda

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Google Fonts (Geist, Monsieur La Doulaise, Satisfy)
- **Imágenes:** Next/Image con optimización automática

## 📁 Estructura del Proyecto

```
boda/
├── app/
│   ├── components/         # Componentes reutilizables
│   │   ├── aperturaCarta.tsx
│   │   ├── backgroundMusic.tsx
│   │   └── floatingHeart.tsx
│   ├── views/             # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── countDown.tsx
│   │   ├── historyLove.tsx
│   │   ├── detalles.tsx
│   │   ├── bendicion.tsx
│   │   ├── buenosDeseos.tsx
│   │   ├── confirmacion.tsx
│   │   └── gift.tsx
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── public/
│   ├── images/            # Imágenes del sitio
│   └── music/             # Música de fondo
└── next.config.ts         # Configuración de Next.js
```

## 🎨 Personalización

### Colores

Los colores principales se encuentran en las clases de Tailwind:
- Burgundy principal: `#722f37`
- Burgundy oscuro: `#800020`
- Beige claro: `#E5DDC9`
- Beige medio: `#C9B799`
- Beige oscuro: `#8B7355`

### Contenido

1. **Información de la pareja:** Editar `app/views/Hero.tsx`
2. **Programa del día:** Editar `app/views/historyLove.tsx`
3. **Ubicaciones:** Editar `app/views/detalles.tsx`
4. **Padres:** Editar `app/views/bendicion.tsx`

### Imágenes

Coloca tus imágenes en `/public/images/`:
- `hero3.jpg` - Foto principal
- `background.jpg` - Fondo del cronograma
- `iglesia.webp` - Icono de iglesia
- `bodaRecepcion.webp` - Icono de recepción

### Música

Coloca tu canción en `/public/music/wedding-song.mp3`

## 🚀 Despliegue en Producción

### Vercel (Recomendado)

1. Conecta tu repositorio con [Vercel](https://vercel.com)
2. Configura las variables de entorno
3. Despliega automáticamente

### Otras plataformas

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Variables de Entorno

Crea un archivo `.env.local` basado en `.env.example`:

```env
NEXT_PUBLIC_API_URL=https://backend-boda-seven.vercel.app
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## ✅ Lista de Verificación Pre-Producción

- [x] Todas las imágenes optimizadas (WebP/AVIF)
- [x] Metadatos SEO configurados
- [x] Favicon y manifest configurados
- [x] Música de fondo incluida
- [x] API backend funcionando
- [x] Responsive design verificado
- [x] Sin errores de lint
- [x] Modo oscuro deshabilitado

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Chrome Android

## 🤝 Contribuciones

Este es un proyecto personal para la boda de Gonzalo & Xiomara.

## 📄 Licencia

Todos los derechos reservados © 2025 Gonzalo & Xiomara

---

Hecho con ❤️ para Gonzalo & Xiomara
