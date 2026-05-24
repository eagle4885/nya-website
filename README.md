# Nandi Youth Assembly (NYA) Website

A professional, modern, and fully-featured website for the Nandi Youth Assembly — empowering youth across Nandi County through leadership development, community service, and collective action.

## 🌐 Live Website

**Domain:** https://nandiyouthassembly.co.ke  
**Hosted on:** GitHub Pages

## ✨ Features

### 🏠 Public Website
- **Dynamic Homepage** with hero section and call-to-action
- **About NYA** — Vision, mission, and organizational structure
- **Leadership Profiles** — Meet the NYA team with detailed profiles
- **Activities & Programs** — Showcase community initiatives and events
- **News & Blog** — Latest updates and articles
- **Member Directory** — Browse and connect with members
- **Contact & Events** — Join forms, event calendar, contact methods
- **Responsive Design** — Perfect on desktop, tablet, and mobile

### 👨‍💼 Admin Dashboard
- **Content Management** — Easy CRUD operations for all content
- **Hero Image Management** — Upload and manage carousel images
- **Team Management** — Add/edit/remove leadership profiles
- **News Management** — Create and publish blog posts
- **Event Management** — Create events and manage RSVPs
- **Member Management** — View and manage registered members
- **Site Settings** — Configure branding, contact info, and social links
- **Analytics** — Track website usage and engagement
- **User Permissions** — Role-based access control (Admin, Editor, Viewer)

## 🚀 Tech Stack

### Frontend
- **React 19** — Latest React with hooks and concurrent features
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool and dev server
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Smooth animations and transitions
- **React Hook Form** — Efficient form handling
- **Zod** — TypeScript-first schema validation
- **Wouter** — Lightweight client-side routing

### Backend
- **Node.js + Express** — Fast, minimalist web framework
- **TypeScript** — Type safety for backend code
- **MySQL/TiDB** — Relational database via Drizzle ORM
- **JWT** — Secure authentication tokens

### Hosting & Deployment
- **GitHub Pages** — Fast, reliable, free hosting
- **GitHub Actions** — Automated CI/CD pipeline
- **Custom Domain** — nandiyouthassembly.co.ke
- **SSL/TLS** — Automatic HTTPS via GitHub Pages

### Tools & Libraries
- **Drizzle ORM** — Type-safe database queries
- **Radix UI** — Unstyled, accessible components
- **Lucide React** — Beautiful icon library
- **Sonner** — Toast notifications
- **clsx** — Utility for constructing className strings

## 📁 Project Structure

```
nya-website/
├── .github/
│   ├── workflows/                   # GitHub Actions workflows
│   │   ├── deploy.yml              # Deploy to GitHub Pages
│   │   └── tests.yml               # Run tests on push
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.tsx            # Homepage
│   │   │   ├── AdminDashboard.tsx  # Admin panel
│   │   │   ├── About.tsx           # About NYA
│   │   │   ├── Leadership.tsx      # Leadership team
│   │   │   ├── News.tsx            # News and blog
│   │   │   ├── Events.tsx          # Events listing
│   │   │   ├── Members.tsx         # Member directory
│   │   │   ├── Contact.tsx         # Contact page
│   │   │   ├── Login.tsx           # Authentication
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── components/             # Reusable components
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   ├── Footer.tsx          # Footer
│   │   │   ├── HeroCarousel.tsx    # Hero image carousel
│   │   │   ├── Card.tsx            # Card component
│   │   │   ├── Button.tsx          # Button component
│   │   │   ├── Modal.tsx           # Modal dialog
│   │   │   ├── Form.tsx            # Form components
│   │   │   └── ...                 # UI components
│   │   ├── contexts/               # React contexts
│   │   │   ├── AuthContext.tsx     # Authentication state
│   │   │   ├── ThemeContext.tsx    # Theme management
│   │   │   └── AdminContext.tsx    # Admin state
│   │   ├── hooks/                  # Custom React hooks
│   │   │   ├── useAuth.ts          # Auth hook
│   │   │   ├── useForm.ts          # Form handling
│   │   │   └── ...
│   │   ├── lib/                    # Utility functions
│   │   │   ├── api.ts             # API client
│   │   │   ├── auth.ts            # Auth utilities
│   │   │   └── utils.ts           # Helper functions
│   │   ├── styles/                # Global styles
│   │   │   ├── index.css          # Global CSS
│   │   │   └── tailwind.css       # Tailwind config
│   │   ├── App.tsx                # Main app component
│   │   ├── main.tsx               # React entry point
│   │   └── const.ts               # Constants
│   ├── index.html                 # HTML template
│   └── public/                    # Static assets
├── server/                        # Backend (Express)
│   ├── index.ts                   # Server entry point
│   ├── routes/                    # API routes
│   │   ├── auth.ts               # Auth endpoints
│   │   ├── content.ts            # Content management
│   │   ├── users.ts              # User management
│   │   ├── events.ts             # Event management
│   │   └── ...
│   ├── middleware/                # Express middleware
│   │   ├── auth.ts               # Authentication middleware
│   │   └── error.ts              # Error handling
│   └── db.ts                     # Database connection
├── shared/                        # Shared types and utilities
│   ├── types.ts                  # TypeScript types
│   ├── const.ts                  # Shared constants
│   └── schemas.ts                # Zod schemas
├── drizzle/                       # Database migrations
│   ├── schema.ts                 # Database schema
│   └── migrations/               # Migration files
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
├── pnpm-lock.yaml               # Lock file
├── .env.example                 # Environment variables template
├── README.md                    # This file
├── ADMIN_GUIDE.md               # Admin documentation
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
├── API_DOCUMENTATION.md         # API reference
├── CONTRIBUTING.md              # Contributing guidelines
└── .gitignore                   # Git ignore rules
```

## 🎨 Design System

### Color Palette
- **Primary Teal:** `#1B6B7A` — Main brand color
- **Secondary Amber:** `#D4A574` — Accent color
- **Dark Gray:** `#2C3E50` — Text color
- **Light Gray:** `#ECF0F1` — Background color
- **Success Green:** `#27AE60`
- **Error Red:** `#E74C3C`
- **Warning Orange:** `#F39C12`

### Typography
- **Headings:** Space Grotesk (600/700 weight)
- **Body:** Nunito (400/500 weight)
- **Code:** Fira Code (monospace)

### Spacing & Grid
- Base spacing unit: 4px
- Grid: 12-column responsive layout
- Breakpoints: 320px, 768px, 1024px, 1440px

## 📋 Database Schema

### Tables
- **users** — User accounts and authentication
- **members** — NYA member profiles
- **leadership** — Leadership team members
- **news** — Blog posts and articles
- **events** — Events and activities
- **hero_images** — Carousel images
- **settings** — Site configuration
- **audit_logs** — Activity tracking

## 🔐 Authentication & Security

- **JWT-based** authentication
- **OAuth 2.0** integration (optional)
- **Role-based Access Control** (RBAC)
- **Password hashing** with bcrypt
- **HTTPS/SSL** enforced (GitHub Pages provides automatic HTTPS)
- **CORS** properly configured
- **Rate limiting** on API endpoints
- **Input validation** with Zod

## 🚀 Getting Started

### Installation
```bash
# Clone repository
git clone https://github.com/eagle4885/nya-website.git
cd nya-website

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local
```

### Development
```bash
# Start dev server (runs on localhost:3000)
pnpm run dev

# Open in browser
# Frontend: http://localhost:3000
# Admin: http://localhost:3000/admin
```

### Building
```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Check TypeScript
pnpm run check
```

## 📚 Documentation

- **[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)** — Complete admin dashboard guide
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** — Deployment to production
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** — API endpoints reference
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — Contribution guidelines

## 🌍 Environment Variables

```env
# Frontend
VITE_APP_ID=your_app_id
VITE_APP_TITLE=Nandi Youth Assembly
VITE_APP_LOGO=https://...
VITE_OAUTH_PORTAL_URL=https://your-oauth-provider.com
VITE_FRONTEND_API_URL=https://api.nandiyouthassembly.co.ke
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_id

# Backend
DATABASE_URL=mysql://user:pass@host:port/db
JWT_SECRET=your_secret_key
NODE_ENV=production
PORT=3000

# GitHub Pages
GITHUB_PAGES_URL=https://nandiyouthassembly.co.ke
```

## 📞 API Endpoints

### Public
- `GET /api/news` — Get all news articles
- `GET /api/news/:id` — Get single article
- `GET /api/events` — Get upcoming events
- `GET /api/events/:id` — Get event details
- `GET /api/leadership` — Get leadership team
- `GET /api/members` — Get member directory
- `POST /api/contact` — Submit contact form
- `POST /api/members/register` — Register as member

### Authenticated
- `POST /api/auth/login` — User login
- `POST /api/auth/logout` — User logout
- `GET /api/auth/me` — Get current user
- `POST /api/auth/refresh` — Refresh token

### Admin Only
- `POST /api/admin/news` — Create article
- `PUT /api/admin/news/:id` — Update article
- `DELETE /api/admin/news/:id` — Delete article
- `POST /api/admin/events` — Create event
- `PUT /api/admin/events/:id` — Update event
- `DELETE /api/admin/events/:id` — Delete event
- `POST /api/admin/leadership` — Add team member
- `PUT /api/admin/leadership/:id` — Update member
- `DELETE /api/admin/leadership/:id` — Remove member
- `POST /api/admin/settings` — Update site settings
- `GET /api/admin/analytics` — View analytics

## 🚀 Deployment on GitHub Pages

### Setup GitHub Pages with Custom Domain

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder

2. **Configure Custom Domain:**
   - In Pages settings, enter: `nandiyouthassembly.co.ke`
   - GitHub creates CNAME file automatically

3. **Update DNS Records at Registrar:**
   ```
   Type: A
   Name: @
   Points to: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   
   Or use CNAME (alternative):
   Type: CNAME
   Name: www
   Points to: eagle4885.github.io
   ```

4. **Wait for DNS Propagation:**
   - DNS changes can take 24-48 hours
   - Verify with: `nslookup nandiyouthassembly.co.ke`

5. **Enable HTTPS:**
   - GitHub Pages automatically enables HTTPS
   - Check "Enforce HTTPS" in Pages settings

### Automated Deployment

GitHub Actions automatically deploys on every push to `main`:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: pnpm install && pnpm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🎯 Roadmap

### Phase 1 (Current) ✅
- [x] Homepage with hero section
- [x] About page
- [x] Leadership profiles
- [x] Contact form
- [x] Responsive design
- [x] Basic admin dashboard
- [x] GitHub Pages hosting setup
- [x] Custom domain configuration

### Phase 2 (Next)
- [ ] News/Blog system
- [ ] Event management
- [ ] Member registration
- [ ] Email notifications
- [ ] Image optimization

### Phase 3 (Future)
- [ ] Advanced analytics
- [ ] Social media integration
- [ ] Mobile app
- [ ] Donation system
- [ ] Volunteer platform

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

© 2025 Nandi Youth Assembly. All rights reserved.

---

**Project Status:** 🚀 Active Development  
**Hosting:** GitHub Pages + Custom Domain (.co.ke)  
**Last Updated:** May 24, 2026  
**Version:** 1.0.0-alpha  
**Maintainer:** [@eagle4885](https://github.com/eagle4885)
