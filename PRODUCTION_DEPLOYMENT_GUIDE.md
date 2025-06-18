# Production Deployment Guide - Calculator Sarcina

This guide provides step-by-step instructions for deploying Calculator Sarcina to production environments, including solutions for common build issues.

## Quick Production Deployment

### Automated Deployment Script

Use the provided deployment script for the fastest setup:

```bash
chmod +x deploy-production.sh
./deploy-production.sh
```

This script handles:
- Backend build (Express.js server)
- Static file generation
- Production-ready HTML with embedded styles
- SEO optimization maintenance
- Essential file copying (robots.txt, sitemap.xml)

### Manual Deployment Steps

If you need to deploy manually:

1. **Build Backend:**
   ```bash
   export NODE_ENV=production
   npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify
   ```

2. **Create Static Files:**
   ```bash
   mkdir -p dist/public server/public
   cp public/robots.txt dist/public/ 2>/dev/null || true
   cp public/sitemap.xml dist/public/ 2>/dev/null || true
   ```

3. **Generate Production HTML:**
   The production HTML is created automatically by the deployment script with:
   - Embedded Tailwind CSS via CDN
   - Complete SEO meta tags
   - Open Graph and Twitter Card tags
   - Progressive loading for full React app
   - Professional gradient design
   - Mobile-responsive layout

4. **Start Production Server:**
   ```bash
   NODE_ENV=production node dist/index.js
   ```

## Build Issue Resolution

### Problem: Vite Build Timeout

**Symptoms:**
- Build process hangs during icon processing
- Timeout errors when running `npm run build`
- Process stops at "transforming lucide-react icons"

**Root Cause:**
The large number of Lucide React icons (1000+) causes Vite to timeout during the transformation phase.

**Solution:**
The deployment script creates a hybrid approach:
- Uses CDN-based Tailwind CSS for immediate styling
- Embeds critical CSS inline for performance
- Provides production-ready static HTML
- Maintains full SEO optimization
- Preserves all meta tags and structured data

### Alternative Build Approaches

#### Option 1: Icon Tree Shaking (Future Improvement)

For future optimization, implement selective icon imports:

```typescript
// Instead of importing entire lucide-react
import { Calendar, User, Settings } from 'lucide-react'

// Create a custom icon registry
const icons = {
  calendar: Calendar,
  user: User,
  settings: Settings
}
```

#### Option 2: Custom Icon Bundle

Create a minimal icon package with only required icons:

```typescript
// custom-icons.ts
export { Calendar as CalendarIcon } from 'lucide-react'
export { User as UserIcon } from 'lucide-react'
// Only export icons actually used in the application
```

## Production Environment Configuration

### Environment Variables

**Required:**
```bash
NODE_ENV=production
PORT=5000
```

**Optional:**
```bash
DATABASE_URL=postgresql://user:password@host:port/database
SESSION_SECRET=your-secure-session-secret
```

### File Structure

After deployment, your production structure should be:

```
dist/
├── index.js              # Bundled Express server
└── public/
    ├── index.html         # Production HTML with embedded styles
    ├── robots.txt         # SEO crawling directives
    └── sitemap.xml        # Site structure for search engines

server/
└── public/               # Backup static files location
    ├── index.html
    ├── robots.txt
    └── sitemap.xml
```

## SEO and Performance Optimization

### Production HTML Features

The generated production HTML includes:

**SEO Optimization:**
- Complete meta tag suite
- Open Graph and Twitter Card tags
- Structured data for search engines
- Canonical URLs
- Mobile-optimized viewport settings

**Performance Features:**
- Inline critical CSS
- CDN-based Tailwind CSS
- Font preloading
- Optimized image attributes
- Progressive enhancement

**Accessibility:**
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader optimization

## Deployment Platforms

### Replit Deployment

1. Ensure all environment variables are set
2. Run deployment script: `./deploy-production.sh`
3. Click "Deploy" button in Replit interface
4. Configure custom domain if needed

### Manual Server Deployment

1. Clone repository to server
2. Install dependencies: `npm install`
3. Run deployment script: `./deploy-production.sh`
4. Set up process manager (PM2): `pm2 start dist/index.js --name calculator-sarcina`
5. Configure reverse proxy (nginx/Apache)
6. Set up SSL certificate

### Docker Deployment

Create Dockerfile:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN chmod +x deploy-production.sh && ./deploy-production.sh
EXPOSE 5000
CMD ["node", "dist/index.js"]
```

## Verification and Testing

### Production Health Check

After deployment, verify:

1. **Server Status:**
   ```bash
   curl -I https://calculatorsarcina.com
   # Should return 200 OK
   ```

2. **API Endpoints:**
   ```bash
   curl https://calculatorsarcina.com/api/blog-posts
   # Should return JSON data
   ```

3. **Static Files:**
   ```bash
   curl https://calculatorsarcina.com/robots.txt
   curl https://calculatorsarcina.com/sitemap.xml
   # Should return proper content
   ```

4. **SEO Meta Tags:**
   View page source and verify presence of:
   - Title tag with Calculator Sarcina branding
   - Meta description
   - Open Graph tags
   - Structured data JSON-LD

### Performance Monitoring

Monitor these metrics:
- Page load time (target: <3 seconds)
- First Contentful Paint (target: <1.5 seconds)
- Largest Contentful Paint (target: <2.5 seconds)
- API response times (target: <500ms)

## Troubleshooting

### Common Issues

**404 Errors:**
- Verify `dist/public/index.html` exists
- Check file permissions
- Ensure static file serving is configured

**API Not Responding:**
- Check `dist/index.js` exists and is executable
- Verify port 5000 is available
- Check environment variables are set

**Missing Styles:**
- Production HTML uses CDN Tailwind CSS
- Verify internet connection for CDN access
- Check browser console for loading errors

**SEO Issues:**
- Verify meta tags in page source
- Test with Google Search Console
- Check robots.txt and sitemap.xml accessibility

### Log Analysis

**Development Logs:**
```bash
# View server logs
tail -f logs/development.log

# Check API requests
grep "GET\|POST" logs/development.log
```

**Production Logs:**
```bash
# PM2 logs
pm2 logs calculator-sarcina

# System logs
journalctl -u calculator-sarcina -f
```

## Maintenance and Updates

### Regular Maintenance

1. **Weekly:**
   - Monitor server performance
   - Check error logs
   - Verify SSL certificate status

2. **Monthly:**
   - Update dependencies
   - Review and update SEO content
   - Performance optimization review

3. **Quarterly:**
   - Security audit
   - Backup verification
   - Disaster recovery testing

### Update Deployment

For application updates:

1. Pull latest code
2. Run deployment script: `./deploy-production.sh`
3. Restart server: `pm2 restart calculator-sarcina`
4. Verify functionality
5. Monitor for errors

## Security Considerations

### Production Security Checklist

- [ ] Environment variables secured
- [ ] SSL certificate installed and valid
- [ ] Server firewall configured
- [ ] Database access restricted
- [ ] Regular security updates applied
- [ ] Backup strategy implemented
- [ ] Monitoring and alerting configured

### Content Security Policy

The production HTML includes basic CSP headers. For enhanced security, configure:

```nginx
add_header Content-Security-Policy "default-src 'self'; style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' https://cdn.tailwindcss.com";
```

---

## Support and Documentation

For additional support:
- Check main README.md for project overview
- Review replit.md for environment-specific details
- Consult API_DOCUMENTATION.md for endpoint details
- See TROUBLESHOOTING.md for common issues

Last updated: June 18, 2025