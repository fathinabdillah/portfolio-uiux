import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleLetsTalk = () => {
    // Scroll to contact section or open email
    window.location.href = "mailto:muhfathin.0607@gmail.com";
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-hero-bg flex items-center justify-center px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="space-y-7 mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-clash leading-[90%] text-text-primary">
            Hello, <span className="inline-block">👋</span> I'm Fathin
            <br />
            a <span className="text-blue-primary">Product Designer</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-2xl font-medium font-clash text-text-secondary max-w-[850px] mx-auto leading-normal">
            Experienced Designer with Strong Visual Craftmanship
          </p>
          
          <p className="text-lg md:text-xl font-medium font-clash text-text-muted max-w-[850px] mx-auto">
            Previously @Apple Developer Academy
          </p>
        </div>

        <Button
          onClick={handleLetsTalk}
          className="bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg md:text-xl font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3 mx-auto"
        >
          Let's Talk
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
