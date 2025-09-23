# CLAUDE AI ASSISTANT GUIDELINES

## Project Overview
This is the Relocation Quest project - a content platform focused on international relocation, visas, tax optimization, and global lifestyle information.

## Document Management Rules

### 📚 IMPORTANT: Document Organization
When working with project documentation, follow these rules:

1. **UPDATE, DON'T CREATE**: Always check for existing documents before creating new ones
2. **CONSOLIDATE**: Merge related information into unified documents
3. **USE PROPER NAMING**: All project-specific docs should be prefixed with `RELOCATION-`
4. **AVOID DUPLICATION**: Don't create multiple files for the same purpose

### 📁 Key Project Documents
- `RELOCATION-CONTENT-GUIDE.md` - Comprehensive content creation guide
- `README.md` - Project overview and setup
- `package.json` - Project dependencies
- `.env.example` - Environment variables template

### ✅ Before Creating Any Document
1. Check if a similar document already exists
2. Consider if the content belongs in an existing document
3. Use descriptive, project-prefixed names for new documents
4. Remove or archive outdated documents

## Technical Stack
- **Frontend**: Astro + React
- **CMS**: Sanity Studio
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Sanity Cloud

## Project Structure
```
/relocation-quest
├── src/
│   ├── pages/        # Astro pages
│   ├── components/   # React/Astro components
│   ├── layouts/      # Layout templates
│   └── styles/       # Global styles
├── public/           # Static assets
├── sanity/           # Sanity schema
└── dist/             # Build output
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `git push origin main` - Deploy via Vercel

## Environment Variables
Required environment variables:
- `PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `PUBLIC_SANITY_DATASET` - Sanity dataset (production)
- `PUBLIC_SANITY_API_VERSION` - API version date
- `SANITY_API_TOKEN` - Sanity API token (optional)

## Deployment
- **Production**: https://relocation.quest
- **Sanity Studio**: https://relocation.quest/studio
- **Auto-deploy**: Pushes to main branch trigger Vercel deployment

## Content Guidelines
Refer to `RELOCATION-CONTENT-GUIDE.md` for:
- Article creation workflow
- SEO requirements
- Image guidelines
- Tavily research requirements
- Publishing checklist

## Code Style
- Use existing patterns and conventions
- Check neighboring files for style guidance
- Never add comments unless requested
- Follow TypeScript/JavaScript best practices
- Use Tailwind classes for styling

## Security
- Never commit secrets or API keys
- Use environment variables for sensitive data
- Follow security best practices
- Don't expose internal APIs

## Testing
- Build locally before pushing: `npm run build`
- Check for TypeScript errors
- Verify Sanity schema changes in Studio
- Test responsive design on mobile

## Common Issues
- **npm permission errors**: Use sudo or fix npm permissions
- **Build failures**: Check for missing components or imports
- **Sanity errors**: Verify API keys and project ID
- **Vercel deployment**: Check build logs for errors

## Support
For issues or questions:
- Check existing documentation first
- Review error logs carefully
- Test locally before deploying

## Design Phase (AstroWind Template Integration)

When starting the design phase after clearing:
1. Refer to `docs/DESIGN-PHASE.md` for complete instructions
2. Use AstroWind template components and styling
3. Keep Sanity CMS integration intact
4. Apply design system from the successful AstroWind template we used before

### Design Phase Priorities
- Modern, clean design from AstroWind template
- Responsive layouts with Tailwind CSS
- Hero sections with gradients (blue to orange theme)
- Card-based article layouts
- Smooth animations and transitions
- Mobile-first approach

---
Last Updated: 2025-09-23