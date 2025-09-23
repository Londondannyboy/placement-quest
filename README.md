# Relocation Quest

Modern content platform for international relocation information, built with Astro, React, and Sanity CMS.

## 🎯 Unified Project Infrastructure

**All services now use the same project name `relocation-quest`:**

| Service | Details |
|---------|---------|
| **GitHub Repository** | [github.com/Londondannyboy/relocation-quest](https://github.com/Londondannyboy/relocation-quest) |
| **Vercel Project** | `relocation-quest` (auto-deploys from GitHub) |
| **Sanity Project** | Project ID: `bc08ijz6`, Name: `relocation-quest` |
| **Production URL** | [https://relocation.quest](https://relocation.quest) |
| **Sanity Studio** | [https://relocation.quest/studio](https://relocation.quest/studio) |
| **Local Directory** | `/Users/dankeegan/relocation-quest` |

## 🚀 Tech Stack

- **Frontend Framework**: Astro 5.0
- **UI Library**: React 18
- **CMS**: Sanity Studio v3
- **Styling**: Tailwind CSS with AstroWind design system
- **Deployment**: Vercel (auto-deploy on push to main)
- **Domain**: relocation.quest

## 🎨 Design System

- **Theme**: Blue to orange gradient (#1E40AF → #9A3412)
- **Components**: AstroWind-inspired with Sanity integration
- **Features**: 
  - Modern gradient hero sections
  - Card-based article layouts
  - Responsive mobile-first design
  - Glass morphism effects

## 📁 Project Structure

```
/relocation-quest
├── src/
│   ├── pages/          # Astro pages
│   ├── components/     # React/Astro components
│   │   └── widgets/    # AstroWind-style components
│   ├── layouts/        # Layout templates
│   └── styles/         # Global styles
├── public/             # Static assets
├── docs/               # Project documentation
└── dist/               # Build output
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |
| `git push origin main` | Deploy to production via Vercel |

## 🔑 Environment Variables

Required in `.env`:
- `PUBLIC_SANITY_PROJECT_ID=bc08ijz6`
- `PUBLIC_SANITY_DATASET=production`
- `PUBLIC_SANITY_API_VERSION=2025-01-01`
- `SANITY_API_TOKEN=<optional-for-preview>`

## 🚀 Deployment

### Automatic (Recommended)
```bash
git push origin main
```
Vercel automatically deploys on push to main branch.

### Manual Force Deploy
```bash
VERCEL_TOKEN=<token> npx vercel --prod --force
```
Use this if GitHub webhook fails to trigger.

## 📝 Content Management

Access Sanity Studio at [https://relocation.quest/studio](https://relocation.quest/studio) to:
- Create and edit articles
- Manage categories and tags
- Upload images
- Configure site content

## 🛠️ Development Workflow

1. **Local Development**: `npm run dev`
2. **Make Changes**: Edit components, add features
3. **Test Build**: `npm run build`
4. **Commit**: `git add . && git commit -m "message"`
5. **Deploy**: `git push origin main`

## 📚 Documentation

- [Design Phase Guide](./docs/DESIGN-PHASE.md) - AstroWind implementation
- [Claude AI Guidelines](./CLAUDE.md) - AI assistant instructions
- [Content Guide](./RELOCATION-CONTENT-GUIDE.md) - Content creation standards

## 🤝 Support

For issues or questions:
1. Check existing documentation
2. Review error logs in Vercel dashboard
3. Test locally before deploying

---

**Last Updated**: September 2025
**Version**: 1.0.0
**Status**: Production