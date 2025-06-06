# Itram Agency Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Smooth animations with Framer Motion
- TypeScript for type safety
- Tailwind CSS for styling
- SEO optimized
- Fast performance

## Prerequisites

Before you begin, ensure you have installed:
- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd itram-agency
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## Deployment

### Build for Production

1. Create a production build:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm run start
# or
yarn start
```

### Deployment Options

You can deploy this application on various platforms:

1. **Traditional Hosting**:
   - Build the application
   - Upload the `.next`, `public` folders and `package.json`, `package-lock.json` files
   - Install dependencies with `npm install --production`
   - Start the server with `npm start`

2. **Docker Deployment**:
   - Build the Docker image
   - Deploy to any container hosting service

3. **Static Hosting** (GitHub Pages, Netlify, etc.):
   - Use the built files in the `.next` directory
   - Configure your hosting provider to serve the static files

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## Performance Optimization

The application is optimized for production with:
- Code splitting
- Image optimization
- CSS minification
- JavaScript minification
- Caching strategies

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
