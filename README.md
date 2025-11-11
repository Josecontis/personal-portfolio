# Personal Portfolio - Giuseppe Conticchio

Modern, interactive personal portfolio website showcasing professional experience, projects, skills, and contact information. Built with React and featuring bilingual support (English/Italian).

## Overview

This is a single-page application (SPA) portfolio website designed to present a comprehensive digital presence for Giuseppe Conticchio, Full Stack Developer from Gravina in Puglia, Italy. The website combines elegant design with interactive animations and multilingual capabilities.

## Technology Stack

### Core Technologies
- **React 18.2.0** - Modern React with Create React App
- **React Router DOM 6.6.1** - Client-side routing
- **React Bootstrap 2.7.0** - Responsive UI components
- **Styled Components 5.3.6** - CSS-in-JS styling

### Key Features & Libraries
- **Internationalization**: i18next for English/Italian language support
- **Email Integration**: EmailJS for contact form functionality
- **Animations**: Typewriter effects, starry background, solar system visualization
- **Icons**: React Icons library
- **Performance**: Web Vitals monitoring

## Project Structure

The application is organized into clear, maintainable sections:

- **Pages**: Home, About, Projects, Resume, Contacts
- **Components**: Reusable UI elements (NavBar, Footer, Preloader, etc.)
- **Translations**: Locale files for bilingual support (EN/IT)
- **Assets**: Images, SVGs, and project screenshots

## Main Features

### Multilingual Support
Toggle between English and Italian languages with complete translation coverage across all pages.

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
- Programming languages (TypeScript, JavaScript, Python, Java, C++)
- Frameworks (React, Node.js, Spring, Three.js)
- Tools (Docker, Git, AWS, VS Code)
- ML/AI technologies (PyTorch, TensorFlow)

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
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

3. **Run development server**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## Deployment

The application is configured for deployment on **Netlify** with:
- SPA routing configuration (`_redirects` file)
- Progressive Web App (PWA) manifest
- Optimized production build

## External Services

### EmailJS Configuration
Contact form submissions are handled through EmailJS. To configure:
- Service ID: `service_dx9tuej`
- Template ID: `template_yx44vvu`
- Public Key: `VuXoRd7oWTeHQg9Ns`

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
5. Add/remove projects in projects showcase
6. Update CV download links

## Contact & Social

- **Email**: peppeco98@gmail.com
- **GitHub**: [@Josecontis](https://github.com/Josecontis)
- **LinkedIn**: [giuseppe-conticchio](https://www.linkedin.com/in/giuseppe-conticchio-01a414159/)
- **Instagram**: [@giuseppe.conticchio](https://www.instagram.com/giuseppe.conticchio/)

## Credits

This portfolio was originally inspired by a template from [Soumyajit Behera](https://github.com/soumyajit4419), extensively customized and enhanced with additional features.

## License

Open source under the MIT License.
