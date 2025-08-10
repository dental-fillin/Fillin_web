# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

- Add pagination for contacts & job openings
- Add job detail pages
- Strengthen middleware session validation & rate limiting
- Introduce tests and TypeScript

## [2025-08-10] Admin UI/UX, Content & SEO Enhancements

## [2025-08-10] Admin Panel Refinements (Modals, Theming Consistency)

### Added

- Modal components for: Quick Add Job, Contact Detail, Job Detail (manage jobs page).
- Job detail modal with structured section breakdown for readability.

### Changed

- Unified admin color palette (primary blue focus, reduced mixed blues/greys).
- Enhanced admin login page (branding icon, gradient background, show/hide password, improved error & loading states).
- Improved table row hover states (subtle primary tint) for contacts & jobs.
- Converted row click to open detail modals (contact + job) while preserving inline delete actions.
- Quick Add Job form refined: explicit white inputs, accessible focus rings, consistent spacing.

### Fixed

- Removed stray literal "\\n" characters rendering at top of modals (escape artifact in `Modal.js`).
- Corrected dark input backgrounds inside Quick Add Job modal (now `bg-white text-gray-900`).
- Eliminated duplicated JSX fragment in `app/admin/page.js` introduced during refactor.

### Pending / Follow-up

- Introduce shared `AdminLayout` component to DRY repeated shell markup.
- Add toast notifications for create/delete instead of inline text blocks.
- Implement role-based auth & rate limiting (still planned).

### Notes

- Consider version bump to `0.2.0` to capture cumulative admin UX & accessibility improvements.

### Added

- Admin contacts dashboard: search, incremental pagination append, skeleton loaders, improved buttons, delete confirmation.
- Admin job management page: search, skeleton loaders, load-more UX, per-row delete state.
- Grouped & redesigned job opening form with clear section cards and improved accessibility.
- Per-page SEO metadata (home, job openings, dental careers, staff training, equipment servicing, contact).
- Global structured data (Organization & WebSite JSON-LD) and enriched OpenGraph/Twitter tags.
- Field label capitalization & clearer copy in job opening form.

### Changed

- Refined dental careers page: replaced placeholder “Coming Soon” block with direct CTA to live job listings.
- Updated contact page content (opening hours, phone/email, corrected “New South Wales” spelling).
- Updated global branding/region references from Auckland/NZ to New South Wales (AU) where applicable.
- Improved table styling consistency & loading states across admin pages.
- Enhanced root layout metadata (domain migration to `fillin.au`).

### Fixed

- Removed conflicting or outdated job openings messaging on careers page.
- Corrected contact info typos and inconsistent region naming.
- Eliminated unsupported CSS utility (line-clamp) usage in admin table.

### Security / Tech Debt

- Prepared groundwork for future rate limiting & role-based authorization (not yet implemented).
- Established metadata structure enabling future automated sitemap & JobPosting schema additions.

### Notes

- Version in `package.json` remains `0.1.0`; consider bump to `0.2.0` on next deploy due to breadth of UI & SEO changes.

## [2025-08-10] Added Job Openings Dynamic Listing & Server Validation

### Added

- Server-side Zod validation for job openings POST `/api/jobopenings`.
- Dynamic public job listings page (`/job-openings`) fetching live data.
- `CHANGELOG.md` initialized.

### Changed

- Cleaned and replaced corrupted `.gitignore` (removed unsafe `*.json` ignore & binary chars).
- Updated `README.md` (correct Tailwind version, added features & API table, changelog reference).

### Fixed

- Prevent insertion of invalid job opening payloads by validating on server.

### Security

- Foundation laid for improving admin session verification (future hardening planned).
