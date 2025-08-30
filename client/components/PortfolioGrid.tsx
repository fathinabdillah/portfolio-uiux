import { Link } from "react-router-dom";

interface ProjectCard {
  id: number;
  title: string;
  company: string;
  image?: string;
  link: string;
}

export default function PortfolioGrid() {
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: "Mobile App Design",
      company: "SnapGroup",
      link: "/work/snapgroup-1"
    },
    {
      id: 2,
      title: "Mobile App Design",
      company: "SnapGroup",
      link: "/work/snapgroup-2"
    },
    {
      id: 3,
      title: "Mobile App Design",
      company: "SnapGroup",
      link: "/work/snapgroup-3"
    },
    {
      id: 4,
      title: "Mobile App Design",
      company: "SnapGroup",
      link: "/work/snapgroup-4"
    },
    {
      id: 5,
      title: "Mobile App Design",
      company: "SnapGroup",
      link: "/work/snapgroup-5"
    },
    {
      id: 6,
      title: "Mobile App Design",
      company: "SnapGroup",
      link: "/work/snapgroup-6"
    }
  ];

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="space-y-6">
                {/* Project Image */}
                <div className="aspect-[4/3] bg-card-bg rounded-xl overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.company}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-card-bg flex items-center justify-center">
                      <div className="text-text-muted text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-text-muted/10 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Project Preview</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-normal font-clash text-text-primary group-hover:text-blue-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-2xl font-semibold font-clash text-blue-primary">
                    {project.company}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
