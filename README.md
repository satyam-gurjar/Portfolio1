# Satyam Gurjar - AI Engineer Portfolio

A modern, neo-brutalist portfolio website built with Next.js showcasing AI/ML projects and expertise.

## Features

- Responsive design with bold neo-brutalist styling
- Smooth scrolling and animated elements
- Project showcase with descriptions and tags
- Skills section with technical arsenal
- Experience timeline
- Contact section with social links
- Optimized for all devices

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS-in-JS (Inline styles)
- **Fonts**: Google Fonts (Archivo Black, JetBrains Mono, Space Grotesk)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. **Push to GitHub**: Commit and push your code to a GitHub repository
   ```bash
   git add .
   git commit -m "Deployment ready"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Deploy**:
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in seconds!

Vercel will automatically:
- Detect Next.js configuration
- Optimize your build
- Deploy and provide a live URL
- Set up automatic deployments on every push

## Project Structure

```
/app
  ├── page.tsx       # Main portfolio page
  ├── layout.tsx     # Root layout with metadata
  └── globals.css    # Global styles

/public
  ├── SATYAM.jpg     # Profile photo
  ├── favicon.svg    # Site icon
  └── resume.pdf     # Resume file
```

## Customization

Edit `app/page.tsx` to:
- Update personal information
- Add/remove projects
- Modify skills and experience
- Change colors in CSS variables (--lime, --black, --white, etc.)

## License

© 2025 Satyam Gurjar. All rights reserved.
