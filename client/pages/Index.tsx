import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import BottomCTA from "@/components/BottomCTA";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <PortfolioGrid />
      <BottomCTA />
    </Layout>
  );
}
