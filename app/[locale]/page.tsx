import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Hobbies from "@/components/Hobbies";
import Social from "@/components/Social";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Hobbies />
      <Social />
      <ContactCTA />
      <Footer />
    </main>
  );
}
