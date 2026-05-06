import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const homeDescription =
  'We help pharmaceutical and controlled-environment facilities maintain the highest standards of cleanroom performance - from supplies and garments to servicing, construction, and emergency decontamination.';

export const metadata = {
  title: 'Cleanroom Supplies, Garments & Services | Fillin',
  description: homeDescription,
  alternates: { canonical: 'https://fillin.au/' },
  openGraph: {
    title: 'Fillin – Cleanroom Performance for Pharmaceutical & Controlled Environments',
    description: homeDescription,
    url: 'https://fillin.au/',
    type: 'website'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
    <meta name="google-site-verification" content="l3vBSSDIr4zu6-XquqUYKjRw9vuDhaCSfO9wgcw4gtw" />
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
