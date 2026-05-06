import "./globals.css";

const siteDescription =
  'We help pharmaceutical and controlled-environment facilities maintain the highest standards of cleanroom performance - from supplies and garments to servicing, construction, and emergency decontamination.';

// Global SEO metadata (domain: fillin.au)
export const metadata = {
  metadataBase: new URL('https://fillin.au'),
  title: {
    default: 'Fillin – Cleanroom Supplies, Garments & Controlled-Environment Services',
    template: '%s | Fillin'
  },
  description: siteDescription,
  keywords: [
    'cleanroom supplies Australia',
    'pharmaceutical cleanroom',
    'controlled environment facility',
    'cleanroom garments',
    'cleanroom servicing',
    'cleanroom construction support',
    'emergency decontamination',
    'GMP cleanroom',
    'Fillin cleanroom'
  ],
  authors: [{ name: 'Fillin' }],
  creator: 'Fillin',
  publisher: 'Fillin',
  alternates: {
    canonical: 'https://fillin.au/'
  },
  openGraph: {
    title: 'Fillin – Cleanroom Performance for Pharmaceutical & Controlled Environments',
    description: siteDescription,
    url: 'https://fillin.au/',
    siteName: 'Fillin',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/logofin.svg',
        width: 512,
        height: 512,
        alt: 'Fillin logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fillin – Cleanroom Supplies & Services',
    description: siteDescription,
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
              description: siteDescription,
              areaServed: ['AU'],
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
              description: siteDescription
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
