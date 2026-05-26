import Nav from '@/components/nav';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Cases from '@/components/cases';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import CursorGlow from '@/components/cursor-glow';

export default function HomePage() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <CursorGlow />

      <div className="shell">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Cases />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
