import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] bg-hero-bg flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="space-y-7 mb-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-clash leading-[90%] text-text-primary">
              About <span className="text-blue-primary">Fathin</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-2xl font-medium font-clash text-text-secondary max-w-[850px] mx-auto leading-normal">
              Passionate Product Designer with Strong Visual Craftmanship
            </p>
            
            <div className="text-lg md:text-xl font-medium font-clash text-text-muted max-w-[850px] mx-auto space-y-4">
              <p>
                With a strong background in UI/UX design and mobile app development, 
                I create user-centered digital experiences that balance aesthetics with functionality.
              </p>
              <p>
                Previously trained at Apple Developer Academy, where I honed my skills in 
                design thinking, human interface guidelines, and innovative problem-solving.
              </p>
              <p>
                I specialize in mobile app design, creating intuitive interfaces that 
                delight users and drive business goals.
              </p>
            </div>
          </div>

          <Button
            onClick={() => window.location.href = "mailto:muhfathin.0607@gmail.com"}
            className="bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg md:text-xl font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3 mx-auto"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold font-clash text-text-primary text-center mb-12">
            Skills & <span className="text-blue-primary">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "UI/UX Design",
              "Mobile App Design", 
              "Prototyping",
              "User Research",
              "Design Systems",
              "Visual Design",
              "Interaction Design",
              "Figma",
              "Sketch"
            ].map((skill) => (
              <div key={skill} className="bg-card-bg rounded-lg p-4 text-center">
                <span className="text-lg font-medium font-clash text-text-primary">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
