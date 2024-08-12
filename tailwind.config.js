/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', 
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: '#1E1B2E',  // Morado oscuro para fondos
        primary: '#6C63FF',     // Morado claro para elementos principales
        accent: '#C062DD',      // Fucsia
        text: {
          primary: '#FFFFFF',   // Blanco para texto principal
        },
        button: {
          primary: '#6C63FF',   // Morado claro para botones primarios
          secondary: '#8A81D8', // Morado más claro para botones secundarios
          disabled: '#A0A0A0',  // Gris para botones deshabilitados
          danger: '#FF0000',    // Rojo para botones de peligro
          warning: '#FFC107',   // Amarillo para botones de advertencia
        },
        alert: {
          info: '#D1ECF1',
          warning: '#FFF3CD',
          danger: '#F8D7DA',
        },
        accordion: {
          header: '#E2E8F0',   // Gris claro para el header
          content: '#F7FAFC',  // Fondo más claro para el contenido
          border: '#CBD5E0',   // Bordes para el contenedor
        },
        carousel: {
          background: '#EDF2F7',  // Fondo para el carousel
          arrow: '#4A5568',       // Color de las flechas
          dotActive: '#3182CE',   // Punto activo
          dotInactive: '#A0AEC0', // Punto inactivo
        },
        dropdown: {
          background: '#FFFFFF',  // Fondo del dropdown
          hover: '#EDF2F7',       // Fondo al hacer hover
          border: '#CBD5E0',      // Bordes del dropdown
        },
        image: {
          border: '#E2E8F0',  // Borde para las imágenes
          shadow: '#A0AEC0',  // Sombra para las imágenes
        },
        list: {
          marker: '#4A5568',   // Color de los marcadores
        },
        pagination: {
          background: '#EDF2F7',   // Fondo de la paginación
          active: '#6C63FF',       // Página activa
          inactive: '#A0AEC0',     // Páginas inactivas
        },
        spinner: {
          primary: '#6C63FF',      // Color principal del spinner
          secondary: '#8A81D8',    // Color secundario del spinner
          accent: '#C062DD',       // Color de acento del spinner
        },
        table: {
          header: '#E2E8F0',       // Fondo del encabezado
          rowOdd: '#F7FAFC',       // Fila impar
          rowEven: '#EDF2F7',      // Fila par
          border: '#CBD5E0',       // Bordes de la tabla
        },
        video: {
          border: '#E2E8F0',  // Borde para el video
          shadow: '#A0AEC0',  // Sombra para el video
        },
        modal: {
          overlay: '#00000099',    // Fondo semitransparente para el overlay
          background: '#FFFFFF',   // Fondo del modal
        },
        card: {
          background: '#FFFFFF',   // Fondo del card
          border: '#CBD5E0',       // Borde del card
          shadow: '#A0AEC0',       // Sombra del card
        },
        content: {
          background: '#FFFFFF',   // Fondo del content
        },
        section: {
          background: '#F7FAFC',   // Fondo del section
          border: '#E2E8F0',       // Borde del section
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
