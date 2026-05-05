import './landing.css';
import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Showcase from '@/components/landing/Showcase';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="linear-root h-dvh w-full overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Showcase />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
