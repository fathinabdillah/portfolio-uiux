import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] bg-hero-bg flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="space-y-7 mb-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-clash leading-[90%] text-text-primary">
              My <span className="text-blue-primary">Resume</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-2xl font-medium font-clash text-text-secondary max-w-[850px] mx-auto leading-normal">
              Download my resume or view my professional experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => {
                // In a real app, this would download the actual resume PDF
                alert("Resume download would be implemented here");
              }}
              className="bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg md:text-xl font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open("https://linkedin.com/in/muhfathin", "_blank")}
              className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white px-6 py-4 h-auto rounded-full text-lg md:text-xl font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3"
            >
              View LinkedIn
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold font-clash text-text-primary text-center mb-12">
            Professional <span className="text-blue-primary">Experience</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-card-bg rounded-xl p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold font-clash text-text-primary">
                    Product Designer
                  </h3>
                  <p className="text-xl font-medium font-clash text-blue-primary">
                    SnapGroup
                  </p>
                </div>
                <span className="text-lg font-medium font-clash text-text-muted mt-2 lg:mt-0">
                  2023 - Present
                </span>
              </div>
              <p className="text-lg font-clash text-text-secondary leading-relaxed">
                Leading mobile app design projects, creating user-centered interfaces 
                and improving user experience across multiple product lines. 
                Collaborated with cross-functional teams to deliver innovative design solutions.
              </p>
            </div>

            <div className="bg-card-bg rounded-xl p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold font-clash text-text-primary">
                    Design Student
                  </h3>
                  <p className="text-xl font-medium font-clash text-blue-primary">
                    Apple Developer Academy
                  </p>
                </div>
                <span className="text-lg font-medium font-clash text-text-muted mt-2 lg:mt-0">
                  2022 - 2023
                </span>
              </div>
              <p className="text-lg font-clash text-text-secondary leading-relaxed">
                Intensive training in design thinking, human interface guidelines, 
                and mobile app development. Developed multiple iOS app prototypes 
                and gained expertise in user experience design principles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
