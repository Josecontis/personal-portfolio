# Personal Portfolio - Giuseppe Conticchio

Modern, interactive personal portfolio website showcasing professional experience, projects, skills, and contact information. Built with React and Vite, with multilingual support (Italian, English, French, Spanish).

## Overview

This is a single-page application (SPA) portfolio website designed to present a comprehensive digital presence for Giuseppe Conticchio, Full Stack Developer from Gravina in Puglia, Italy. The website combines elegant design with interactive animations and multilingual capabilities.

## Technology Stack

### Core Technologies

- **React 18** - UI library
- **Vite 6** - Dev server and production build
- **React Router DOM 7** - Client-side routing
- **React Bootstrap 2** - Responsive UI components

### Key Features & Libraries

- **Internationalization**: i18next for Italian, English, French and Spanish
- **Email Integration**: EmailJS for contact form functionality
- **Animations**: Typewriter effects, starry background, solar system visualization
- **Icons**: React Icons library

## Project Structure

The application is organized into clear, maintainable sections:

- **Pages**: Home, About, Projects, Resume, Contacts
- **Components**: Reusable UI elements (NavBar, Footer, Preloader, etc.)
- **Translations**: Locale files for IT, EN, FR and ES
- **Assets**: Images, SVGs, and project screenshots

## Main Features

### Multilingual Support

Pick Italian, English, French or Spanish from the language menu in the top bar. The browser language is detected on the first visit.

### Interactive Elements

- Background music player (toggle ON/OFF)
- Animated starry background with twinkling stars
- Solar system animation on contact page
- Typewriter effect displaying professional roles
- Smooth page transitions and loading animations

### Contact Form

Functional contact form with email validation, powered by EmailJS for direct message delivery.

### Projects Showcase

Featured projects including:

- Face Mask Detection & Emotion Recognition (FMD-ER)
- NLP Research (Bachelor's Thesis)
- B&B Website Development
- Machine Learning House Price Prediction

### Resume/CV

- Downloadable CV in both English and Italian
- Professional experience timeline
- Educational background
- Certifications and achievements

### Technology Display

Visual representation of technical skills including:

- Programming languages (Dart, TypeScript, JavaScript, Python, Java, C++)
- Frameworks (Flutter, React, Node.js, Spring, Three.js)
- Tools (Docker, Git, AWS, VS Code)
- ML/AI technologies (PyTorch, TensorFlow)

## Installation and Setup

### Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Josecontis/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure EmailJS**

   Copy `.env.example` to `.env` and fill in your EmailJS keys (see below).

4. **Run development server**

   ```bash
   npm run dev
   ```

   Opens at [http://localhost:5173](http://localhost:5173)

5. **Build for production**

   ```bash
   npm run build
   ```

   The output goes to `dist/`. Use `npm run preview` to check it locally.

## Deployment

The application is configured for deployment on **Netlify** with:

- SPA routing configuration (`_redirects` file)
- Progressive Web App (PWA) manifest
- Optimized production build

## External Services

### EmailJS Configuration

Contact form submissions are handled through EmailJS. The keys are read from environment variables (locally from `.env`, on Netlify from the site environment settings):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### CV Hosting

Resume PDFs are hosted on Google Drive with separate links for English and Italian versions.

## Browser Support

- **Production**: Modern browsers (>0.2% market share, excluding Opera Mini)
- **Development**: Latest versions of Chrome, Firefox, and Safari

## Customization

To personalize this portfolio:

1. Update translation files in `/src/Translations/locales/`
2. Replace images in `/src/Assets/`
3. Modify component content in `/src/Pages/`
4. Update EmailJS credentials for contact form
5. Add/remove projects in `src/Pages/Projects/projectsData.js` (texts go in the translation files)
6. Update CV download links

## Contact & Social

- **Email**: peppeco98@gmail.com
- **GitHub**: [@Josecontis](https://github.com/Josecontis)
- **LinkedIn**: [giuseppe-conticchio](https://www.linkedin.com/in/giuseppe-conticchio/)
- **Instagram**: [@giuseppe.conticchio](https://www.instagram.com/giuseppe.conticchio/)

## Credits

This portfolio was originally inspired by a template from [Soumyajit Behera](https://github.com/soumyajit4419), extensively customized and enhanced with additional features.

## License

Open source under the MIT License.
