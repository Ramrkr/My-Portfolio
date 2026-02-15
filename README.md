# Personal Portfolio Website

A stunning, modern personal portfolio website built with Angular 16. This portfolio showcases your professional work, skills, experience, and projects with a beautiful, responsive design.

## Features

- 🎨 **Modern UI/UX** - Beautiful gradient designs and smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized for speed and efficiency
- 🎯 **Professional Sections**:
  - Hero section with introduction
  - About me section
  - Skills & Technologies
  - Work Experience timeline
  - Featured Projects showcase
  - Contact form

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Personal Information

1. **Hero Section** (`src/app/components/hero/hero.component.html`):
   - Update your name, title, and description

2. **About Section** (`src/app/components/about/about.component.ts`):
   - Modify the `aboutText` and `highlights` array

3. **Skills** (`src/app/components/skills/skills.component.ts`):
   - Update the `skillCategories` array with your skills

4. **Experience** (`src/app/components/experience/experience.component.ts`):
   - Update the `experiences` array with your work history

5. **Projects** (`src/app/components/projects/projects.component.ts`):
   - Update the `projects` array with your portfolio projects

6. **Contact** (`src/app/components/contact/contact.component.ts`):
   - Update `contactInfo` with your email, phone, and location
   - Update social media links in footer and contact sections

7. **Social Links**:
   - Update social media URLs in:
     - `src/app/components/footer/footer.component.ts`
     - `src/app/components/hero/hero.component.html`
     - `src/app/components/contact/contact.component.html`

### Styling

- Main styles: `src/styles.scss`
- Component-specific styles: Each component has its own `.scss` file
- Color scheme: Modify CSS variables in `src/styles.scss`:
  ```scss
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  ```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── styles.scss
└── index.html
```

## Technologies Used

- Angular 16
- TypeScript
- SCSS
- Font Awesome Icons
- Google Fonts (Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

Feel free to customize this portfolio to match your personal brand and style!
