import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BottomCTA() {
  const handleLetsTalk = () => {
    // Scroll to contact section or open email
    window.location.href = "mailto:muhfathin.0607@gmail.com";
  };

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-clash leading-[90%] text-text-primary">
            Let's rock <span className="text-blue-primary">together!</span>
          </h2>

          <Button
            onClick={handleLetsTalk}
            className="bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg md:text-xl font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3 mx-auto"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
