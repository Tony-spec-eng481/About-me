
Website Deployment Guide: Domain & Hosting Setup
📋 Overview
This guide explains how to take your personal journey website from local development to live on the internet. You'll learn how to register a domain name and choose web hosting to make your site accessible worldwide.

🌐 Part 1: Domain Name Registration
What is a Domain Name?
A domain name is your website's address on the internet (e.g., johnwarui.com, myjourney.tech). It's how visitors will find your site.

Step-by-Step Domain Registration:
1. Choose Your Domain Name
Keep it personal: johnwarui.com, waruijohn.com

Make it descriptive: johnwaruijourney.com, waruidev.com

Consider extensions:

.com (most popular, recommended)

.me (good for personal sites)

.tech (for tech-focused sites)

.co.ke (Kenya-specific)

2. Check Domain Availability
Visit domain registrars to check if your desired name is available:

Namecheap

GoDaddy

Google Domains

HostGator

Example search: Enter "johnwarui.com" to see if it's available.

3. Register Your Domain
Process:

text
1. Search for your desired domain
2. Add it to your cart
3. Choose registration period (1-5 years recommended)
4. Create an account with the registrar
5. Complete payment (typically $10-15/year for .com)
6. Verify your email to activate the domain
4. Domain Management Tips
Enable WHOIS Privacy (usually an add-on) to hide your personal information

Set up auto-renewal to avoid losing your domain

Keep login credentials secure

🖥️ Part 2: Web Hosting Setup
What is Web Hosting?
Web hosting is a service that stores your website files on a server and makes them accessible to visitors 24/7.

Types of Hosting for Your Personal Site:
Type	Best For	Cost Range	Recommended For You
Shared Hosting	Beginners, personal sites	$3-10/month	✅ Best Choice
VPS Hosting	Growing sites, more control	$20-60/month	Good for future
Cloud Hosting	Scalable, reliable	$10-50/month	Flexible option
Free Hosting	Testing, learning	Free	Limited features
Recommended Hosting Providers:
For Beginners (Easiest Setup):
Bluehost ($2.95-4.95/month)

1-click WordPress install

Free domain for 1st year

24/7 support

Good for: Complete beginners

HostGator ($2.75-5.25/month)

Unlimited bandwidth

Free website builder

45-day money-back guarantee

Good for: Easy setup

SiteGround ($3.99-10.49/month)

Excellent speed

Great customer support

Free SSL certificate

Good for: Performance-focused sites

For Students/Budget-Conscious:
GitHub Pages (FREE)

Host static websites free

Yourname.github.io

Requires Git knowledge

Good for: Students, developers

Netlify (FREE tier)

Free hosting with SSL

Continuous deployment

Form handling

Good for: Modern web projects

Vercel (FREE tier)

Excellent for static sites

Automatic SSL

Global CDN

Good for: Fast performance

Step-by-Step Hosting Setup:
Option A: Traditional Hosting (Bluehost/HostGator)
text
1. Visit hosting provider website
2. Select a hosting plan (Shared/Basic plan recommended)
3. Choose domain:
   - Use existing domain (if you registered separately)
   - Register new domain (if bundled)
4. Select account period (12-36 months)
5. Add any extras (SSL certificate recommended)
6. Create account and complete payment
7. Access your hosting control panel (cPanel)
8. Upload your website files via File Manager or FTP
9. Connect your domain to hosting nameservers
10. Your site goes live in 24-48 hours
Option B: Free Hosting (GitHub Pages)
text
1. Create GitHub account at github.com
2. Create new repository named: username.github.io
   (Replace "username" with your GitHub username)
3. Upload all your website files to this repository
4. Go to repository Settings → Pages
5. Select "main" branch as source
6. Your site is live at https://username.github.io
7. To use custom domain:
   - Add CNAME file with your domain
   - Update DNS settings at your domain registrar
Option C: Modern Hosting (Netlify)
text
1. Create Netlify account at netlify.com
2. Drag and drop your website folder
3. Netlify automatically deploys your site
4. Get free subdomain: yoursite.netlify.app
5. To add custom domain:
   - Go to Domain settings
   - Add your purchased domain
   - Update DNS records as instructed
🔗 Part 3: Connecting Domain to Hosting
DNS Configuration (Most Important Step):
When Domain & Hosting are Separate:
Get Nameservers from Hosting Provider

Look in welcome email or hosting dashboard

Usually looks like: ns1.hostingcompany.com, ns2.hostingcompany.com

Update Domain DNS Settings

text
1. Login to your domain registrar
2. Find "DNS Management" or "Nameservers"
3. Replace default nameservers with hosting provider's
4. Save changes
Wait for Propagation

DNS changes take 24-48 hours globally

Use whatsmydns.net to check propagation

When Using Free Hosting with Custom Domain:
For GitHub Pages:

text
1. In your repository, create file named "CNAME"
2. Add your domain: johnwarui.com
3. At domain registrar, add these DNS records:
   - A Record: 185.199.108.153
   - A Record: 185.199.109.153
   - A Record: 185.199.110.153
   - A Record: 185.199.111.153
For Netlify:

text
1. In Netlify dashboard: Site Settings → Domain Management
2. Add custom domain
3. Netlify provides DNS records to add at registrar
4. Add A Records or CNAME as shown
📁 Part 4: Uploading Your Website Files
Method 1: Using cPanel File Manager (Traditional Hosting)
text
1. Login to hosting control panel
2. Find "File Manager"
3. Navigate to public_html folder
4. Upload all your files:
   - index.html
   - style.css
   - script.js
   - Any images/assets
5. Ensure index.html is in root directory
Method 2: Using FTP (FileZilla)
text
1. Install FileZilla (free FTP client)
2. Get FTP credentials from hosting provider
3. Connect to your server
4. Upload files to public_html directory
5. Verify permissions (folders: 755, files: 644)
Method 3: Using Git (GitHub/Netlify)
text
1. Initialize Git in your project folder:
   git init
   git add .
   git commit -m "Initial commit"

2. For GitHub:
   git remote add origin https://github.com/username/repo.git
   git push -u origin main

3. For Netlify:
   - Connect GitHub repository
   - Automatic deployment on push
🔒 Part 5: Essential Security & Setup
Must-Have Features:
SSL Certificate (HTTPS)

Most hosts offer free Let's Encrypt SSL

Essential for security and SEO

Makes your site https:// instead of http://

Regular Backups

Enable automatic backups

Store backups off-server

Test restoration process

Contact Form Security

Use reCAPTCHA on contact forms

Validate all form inputs

Sanitize user data

Recommended Tools:
Uptime Monitoring: UptimeRobot (free)

Performance Check: GTmetrix, PageSpeed Insights

SEO Setup: Google Search Console, sitemap.xml

Analytics: Google Analytics (free)

💰 Part 6: Cost Breakdown
Typical First-Year Costs:
Item	Provider Example	Cost (First Year)	Renewal Cost
Domain (.com)	Namecheap	$10.98/year	$13.98/year
Shared Hosting	Bluehost	$35.40/year	$107.88/year
SSL Certificate	Let's Encrypt	FREE	FREE
Email Hosting	Zoho Mail	FREE (5 users)	FREE
Total First Year		$46.38	
Total Subsequent Years			$121.86/year
Student/Budget Options:
Domain: .me TLD ($10-15/year)

Hosting: GitHub Pages (FREE)

Total: $10-15/year only for domain

🚀 Part 7: Launch Checklist
Before Going Live:
Test website on different browsers

Check mobile responsiveness

Optimize image sizes

Test all links and forms

Add 404 error page

Set up Google Analytics

Create sitemap.xml and robots.txt

Test website speed

Backup all files locally

After Launch:
Submit to Google Search Console

Set up Google Analytics

Test on real mobile devices

Ask friends to test the site

Monitor for 404 errors

Regular content updates

Backup weekly/monthly

🆓 Part 8: Free Alternatives for Students
Complete Free Setup:
text
1. Domain: Use .tk, .ml, .ga, .cf, .gq (Freenom)
2. Hosting: GitHub Pages or Netlify
3. Email: Zoho Mail (free for 5 users)
4. SSL: Automatic with hosting
5. Total Cost: $0
Recommended Free Stack:
Domain: Get a free subdomain from hosting

Hosting: Netlify (yourname.netlify.app)

Email: Use Gmail with custom alias

Cost: $0, perfect for learning

🆘 Troubleshooting Common Issues
Problem: Site Not Loading After Upload
Solution:

Check file location (should be in public_html)

Ensure main file is named index.html

Clear browser cache (Ctrl+F5)

Check DNS propagation status

Problem: Images Not Showing
Solution:

Check image paths in HTML

Verify file extensions (.jpg vs .jpeg)

Check file permissions (644)

Ensure images are actually uploaded

Problem: CSS/JS Not Working
Solution:

Check file paths in link/script tags

Open browser Developer Tools (F12)

Look for 404 errors in Console

Clear browser cache

📞 Getting Help
Support Channels:
Hosting Provider Support - Live chat, phone, tickets

Online Communities - Stack Overflow, Reddit (r/webhosting)

Documentation - Provider knowledge base

Local Tech Communities - Meetups, university IT help

When to Ask for Help:
DNS configuration issues

Server errors (500, 503)

Email setup problems

Security concerns

Performance issues after launch

📅 Maintenance Schedule
Daily/Weekly:
Check website is accessible

Monitor for spam comments (if applicable)

Backup if content changes frequently

Monthly:
Update website content

Check for broken links

Review analytics

Update backups

Yearly:
Renew domain (set reminders!)

Review hosting plan

Update SSL certificate

Major content refresh

