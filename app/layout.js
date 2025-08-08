import "./globals.css";

export const metadata = {
  title: "Fillin - Dental Recruitment & Staffing Services",
  description: "Established in 2016, Fillin provides comprehensive dental staffing solutions including recruitment, temping services, staff training, and equipment maintenance across the greater Auckland region.",
  keywords: "dental recruitment, dental staffing, dental temping, dental training, dental equipment, Auckland dental services",
  authors: [{ name: "Abood Shamala" }],
  creator: "Abood Shamala",
  publisher: "Abood Shamala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL('https://dentalaid.co.nz'),
  openGraph: {
    title: "Fillin - Dental Recruitment & Staffing Services",
    description: "Professional dental staffing solutions across the greater Auckland region",
    // url: 'https://dentalaid.co.nz',
    siteName: 'Fillin',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Aid - Dental Recruitment & Staffing Services",
    description: "Professional dental staffing solutions across the greater Auckland region",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
