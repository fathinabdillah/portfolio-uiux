import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();
  
  // Mock project data - in a real app, this would come from an API or CMS
  const project = {
    title: "Mobile App Design",
    company: "SnapGroup",
    year: "2024",
    category: "UI/UX Design",
    description: "A comprehensive mobile app design project focused on creating an intuitive user experience for social group management. The project involved user research, wireframing, prototyping, and final UI design.",
    challenge: "Design a mobile application that allows users to easily create, manage, and interact within social groups while maintaining privacy and encouraging meaningful connections.",
    solution: "Created a clean, intuitive interface with a focus on visual hierarchy and user-friendly navigation. Implemented a card-based design system that scales across different device sizes.",
    results: [
      "40% increase in user engagement",
      "25% reduction in user onboarding time", 
      "95% user satisfaction rating"
    ],
    tools: ["Figma", "Sketch", "Principle", "InVision"],
    images: [
      "/api/placeholder/600/800",
      "/api/placeholder/600/800", 
      "/api/placeholder/600/800"
    ]
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-bg px-6 lg:px-20 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-text-muted hover:text-blue-primary transition-colors mb-8 font-clash"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Work
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-clash leading-[90%] text-text-primary">
                  {project.title}
                </h1>
                <p className="text-2xl md:text-3xl font-semibold font-clash text-blue-primary">
                  {project.company}
                </p>
                <div className="flex gap-4 text-lg font-medium font-clash text-text-muted">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
              </div>
              
              <p className="text-xl font-clash text-text-secondary leading-relaxed">
                {project.description}
              </p>
              
              <Button
                variant="outline"
                className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white px-6 py-3 rounded-full font-clash"
              >
                View Live Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="aspect-[3/4] bg-card-bg rounded-xl overflow-hidden">
              <img
                src={project.images[0]}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge & Solution */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold font-clash text-text-primary mb-6">
                  The <span className="text-blue-primary">Challenge</span>
                </h2>
                <p className="text-lg font-clash text-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold font-clash text-text-primary mb-6">
                  The <span className="text-blue-primary">Solution</span>
                </h2>
                <p className="text-lg font-clash text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results & Tools */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold font-clash text-text-primary mb-6">
                  <span className="text-blue-primary">Results</span>
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-primary rounded-full mt-3 flex-shrink-0" />
                      <span className="text-lg font-clash text-text-secondary">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-semibold font-clash text-text-primary mb-6">
                  <span className="text-blue-primary">Tools</span> Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-4 py-2 bg-card-bg rounded-full text-lg font-medium font-clash text-text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 px-6 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold font-clash text-text-primary text-center mb-12">
            Project <span className="text-blue-primary">Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-[3/4] bg-card-bg rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-6 lg:px-20 bg-hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-clash text-text-primary mb-8">
            Ready for the next <span className="text-blue-primary">project?</span>
          </h2>
          <Link to="/work">
            <Button className="bg-blue-primary hover:bg-blue-primary/90 text-white px-6 py-4 h-auto rounded-full text-lg font-medium font-clash transition-all duration-200 hover:shadow-lg hover:scale-105">
              View More Work
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
