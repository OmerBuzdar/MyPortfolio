# Muhammad Umer - iOS Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

![Portfolio Preview](./public/images/preview.png)

## Features

- **Modern Design**: Apple-inspired minimalistic UI with glassmorphism effects
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Fast Performance**: Server components and optimized images

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OmerBuzdar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run export` | Build and export static site |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with all sections
│   ├── loading.tsx         # Loading state
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── [slug]/         # Dynamic project pages
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Skills, Projects, etc.
│   ├── ThemeProvider.tsx   # Theme context
│   └── ThemeToggle.tsx     # Dark/Light mode toggle
├── data/
│   └── portfolio.json      # Editable content config
├── lib/
│   └── types.ts            # TypeScript interfaces
└── public/
    ├── resume.pdf          # Downloadable resume
    └── images/             # Project screenshots
```

## Customization

### Editing Content

All portfolio content is stored in `data/portfolio.json`. You can easily update:

- Personal information (name, bio, email, location)
- Skills and categories
- Projects (add/remove/edit)
- Work experience
- Education
- Social links

### Adding Your Resume

1. Add your resume PDF to `public/resume.pdf`
2. The download button will automatically link to it

### Adding Project Images

1. Add images to `public/images/`
2. Reference them in `portfolio.json` using the `image` field

### Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Each component file

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project and deploy the output:

```bash
npm run build
```

The output will be in the `.next` folder.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: omerbaloch6464@gmail.com
- **GitHub**: [@OmerBuzdar](https://github.com/OmerBuzdar)
- **LinkedIn**: [Muhammad Umer Buzdar](https://www.linkedin.com/in/muhammad-umer-buzdar)

---

Made with ❤️ by Muhammad Umer


