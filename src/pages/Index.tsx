
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <StatsSection />
      <Services />
      <HowItWorks />
      <Testimonials />
    </Layout>
  );
};

export default Index;
