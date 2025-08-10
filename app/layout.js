import "./globals.css";

// Global SEO metadata (domain: fillin.au)
export const metadata = {
  metadataBase: new URL('https://fillin.au'),
  title: {
    default: 'Fillin – Dental Recruitment, Temp Staffing & Training (NSW Australia)',
    template: '%s | Fillin Dental Staffing'
  },
  description: 'Fillin (est. 2016) provides dental recruitment, temporary staffing, hygienists, assistants, reception, training & equipment servicing across New South Wales. Available 24/7.',
  keywords: [
    'dental recruitment NSW','dental staffing agency','temporary dental staff','locum dentist NSW','dental assistant recruitment','dental hygienist temping','dental reception staffing','dental training NSW','dental jobs New South Wales','Fillin dental'
  ],
  authors: [{ name: 'Fillin' }],
  creator: 'Fillin',
  publisher: 'Fillin',
  alternates: {
    canonical: 'https://fillin.au/'
  },
  openGraph: {
    title: 'Fillin – Dental Recruitment & Temp Staffing (NSW)',
    description: 'Dental recruitment, temp staff, training & equipment support across New South Wales. 24/7 availability.',
    url: 'https://fillin.au/',
    siteName: 'Fillin',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/logofin.svg',
        width: 512,
        height: 512,
        alt: 'Fillin Dental Staffing Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fillin – Dental Recruitment & Temp Staffing (NSW)',
    description: 'Dental recruitment, temp staff, training & equipment support across New South Wales.',
    images: ['/logofin.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Business',
  applicationName: 'Fillin',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Canonical (redundant with metadata.alternates but reinforces for non-supporting UAs) */}
        <link rel="canonical" href="https://fillin.au/" />
        {/* Structured Data: Organization & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fillin',
              url: 'https://fillin.au',
              logo: 'https://fillin.au/logofin.svg',
              description: 'Dental recruitment, temporary staffing, training & equipment servicing across New South Wales (Australia).',
              areaServed: ['AU-NSW'],
              sameAs: []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Fillin',
              url: 'https://fillin.au',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://fillin.au/job-openings?query={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
