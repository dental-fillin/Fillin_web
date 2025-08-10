# Fillin - Dental Service

A modern, responsive website clone of [Dental Aid](https://dentalaid.co.nz/) built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with the specified color theme
- **Component-Based Architecture**: Modular components for easy maintenance
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance Optimized**: Fast loading with Next.js optimizations

## Color Theme

- **Primary Blue**: `#2C2E9F`
- **Background White**: `#FFFFFF`
- **Light Gray**: `#F5F5F5`

## Components

- **Header**: Responsive navigation with mobile menu
- **Hero**: Eye-catching hero section with call-to-action buttons
- **Services**: Four main service offerings with icons
- **About**: Company information and mission statement
- **Contact**: Contact form and information
- **Footer**: Links and social media icons

## Technologies Used

- **Next.js 15**: App Router architecture
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **React 19**: Latest React features
- **Zod**: Runtime schema validation (forms & API)
- **Supabase**: Postgres + auth/storage integration (contacts & jobs tables)
- **iron-session**: Lightweight server session management
- **Inter Font**: Google Fonts for typography

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure (High Level)

```
app/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Services.js
│   ├── About.js
│   ├── Contact.js
│   └── Footer.js
├── globals.css
├── layout.js
└── page.js
```

## Features / Modules

### Marketing Site

Landing + services pages with responsive sections (Header, Hero, Services, About, Contact, Footer).

### Contact Form

Client + server Zod validation, persisted to `contacts` table.

### Admin Area

Session-based login (ENV credentials) to view & delete contact submissions, create and manage job openings.

Recent enhancements:

- Modernized login screen (branding, show/hide password, improved feedback)
- Quick Add Job modal for fast entry of essential fields
- Contact detail & job detail modals (click table rows to expand)
- Unified color palette & focus styles; improved skeleton loading states

### Job Openings

Admin can create listings (validated server-side). Public `/job-openings` page lists live jobs with key metadata and mailto apply link. Job creation form grouped into semantic sections; quick modal form available from dashboard & manage jobs.

### API Endpoints (Summary)

| Route               | Methods                                    | Auth                            | Description                |
| ------------------- | ------------------------------------------ | ------------------------------- | -------------------------- |
| `/api/contacts`     | GET (admin), POST (public), DELETE (admin) | Cookie session                  | Manage contact submissions |
| `/api/jobopenings`  | GET (public), POST (admin), DELETE (admin) | Cookie session for mutating ops | Manage job listings        |
| `/api/admin-login`  | POST                                       | Public                          | Create admin session       |
| `/api/admin-logout` | POST                                       | Session                         | Destroy session            |

> See `lib/schema.js` for validation rules and `db/schema.sql` for table definitions.

## Services Offered

1. **Temping Services**: Temporary dental staff for the greater Auckland region
2. **Recruitment Services**: Permanent staff hiring solutions
3. **Staff Training**: Training programs for dental support staff
4. **Equipment Servicing**: Dental equipment maintenance and repairs

## Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## Performance Features

- Optimized images and assets
- Lazy loading components
- Efficient CSS with Tailwind
- SEO-friendly structure
- Fast page loads with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Ensure environment variables are set (see `.env.example`).
- Do not commit real secrets; `SESSION_PASSWORD` must be 32+ chars.
- The `.gitignore` has been cleaned; JSON configs are tracked intentionally.

## Changelog

See `CHANGELOG.md` for chronological development notes.

## License

Educational / reference implementation. Original design inspiration from Dental Aid; all trademarks belong to their owners.
