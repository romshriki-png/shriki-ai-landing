import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import LeadForm from "@/components/lead-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
