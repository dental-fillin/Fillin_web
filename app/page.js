import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dental Recruitment, Temp Staff & Training – New South Wales | Fillin',
  description: 'Fillin provides dental recruitment, temporary hygienists, assistants, reception staff, training and equipment servicing across NSW. 24/7 availability – request staff or find a role.',
  alternates: { canonical: 'https://fillin.au/' },
  openGraph: {
    title: 'Fillin Dental Staffing – Recruitment & Temp Services (NSW)',
    description: 'NSW dental recruitment, temp staffing, training & equipment servicing. Established 2016 – available 24/7.',
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
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
