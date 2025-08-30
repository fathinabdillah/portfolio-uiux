import Layout from "@/components/Layout";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Work() {
  return (
    <Layout>
      <section className="min-h-[50vh] bg-hero-bg flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="space-y-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-clash leading-[90%] text-text-primary">
              My <span className="text-blue-primary">Work</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-2xl font-medium font-clash text-text-secondary max-w-[850px] mx-auto leading-normal">
              A selection of projects that showcase my design expertise
            </p>
          </div>
        </div>
      </section>
      
      <PortfolioGrid />
    </Layout>
  );
}
