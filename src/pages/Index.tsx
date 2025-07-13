import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesHighlights from "@/components/home/ServicesHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FloatingChatBot from "@/components/home/FloatingChatBot";

const Index = () => {
  useEffect(() => {
    document.title = "Cyvex Lab - Trusted Cybersecurity Solutions";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesHighlights />
      <WhyChooseUs />
      <FloatingChatBot />
    </Layout>
  );
};

export default Index;
