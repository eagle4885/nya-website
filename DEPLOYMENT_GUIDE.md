# NYA Website Deployment Guide

## Current Hosting

Your Nandi Youth Assembly website is currently hosted on **Manus** at:

**Domain:** `nyassembly-wdk2vuhb.manus.space`

This is a professional, fully managed hosting solution with automatic SSL, CDN, and scalability included.

---

## Option 1: Export & Self-Host

### Step 1: Export Your Website

1. Go to the **Management UI** (click the menu icon in the top-right)
2. Click the **⋯ (More)** button in the header
3. Select **Download as ZIP**
4. Extract the ZIP file to your local machine

### Step 2: Deploy to External Hosting

The exported code is a **static website** that can be deployed to any hosting provider:

#### **Popular Options:**

**Vercel (Recommended for React)**
- Upload to GitHub
- Connect to Vercel: https://vercel.com
- Auto-deploys on every push
- Free tier available

**Netlify**
- Drag & drop the `dist` folder
- Or connect GitHub for auto-deploys
- https://netlify.com

**GitHub Pages**
- Push to GitHub
- Enable Pages in repository settings
- Free hosting for static sites

**Traditional Hosting (Bluehost, GoDaddy, etc.)**
- Upload the `dist` folder via FTP
- Set up a domain in your hosting control panel

---

## Option 2: Custom Domain on Manus

To use your own domain (e.g., `nandiyouthassembly.org`):

1. Go to **Management UI** → **Settings** → **Domains**
2. Click **Add Custom Domain**
3. Enter your domain name
4. Follow the DNS setup instructions
5. Your site will be available at your custom domain

---

## Option 3: API Integration & Advanced Deployment

If you need to:
- Connect to a backend API
- Add database functionality
- Integrate payment processing
- Deploy to a specific platform

Contact support or reach out to the Manus team for custom deployment solutions.

---

## Admin Dashboard Access

The admin dashboard is available at `/admin` on your website:

**URL:** `https://nyassembly-wdk2vuhb.manus.space/admin`

### Current Features:
- **Hero Images:** Manage carousel images
- **Leadership Team:** Update team member profiles
- **Site Settings:** Configure contact info and social media links

### Future Enhancements:
- Direct image uploads from the admin panel
- Real-time team member management
- Settings persistence to database

---

## Support & Questions

For deployment assistance or questions:
- Visit: https://help.manus.im
- Email: support@manus.im

---

## Quick Reference

| Feature | Status | Location |
|---------|--------|----------|
| Website | ✅ Live | nyassembly-wdk2vuhb.manus.space |
| Admin Dashboard | ✅ Available | /admin path |
| Custom Domain | ✅ Supported | Management UI → Settings → Domains |
| Export/Download | ✅ Available | Management UI → More → Download as ZIP |
| Database Backup | ✅ Automatic | Manus handles all backups |

---

**Last Updated:** May 21, 2026
**Website Version:** 0baa050c
