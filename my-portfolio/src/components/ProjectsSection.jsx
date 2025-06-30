import { ExternalLink } from "lucide-react"
import IconWrapper from "./IconWrapper"

const projects = [
  {
    id: "food-recipe",
    title: "Food Recipe",
    description: "A full-stack recipe add managed with modern UI and secure auth integration",
    image: "https://i.ibb.co/KpXs1K6f/Recipe-Book.png",
    technologies: ["Ract.js", "Firebase", "MongoDB"],
    featured: true,
  },
  {
    id: "event-management-app",
    title: "Event Management",
    description: "Collaborative event management modern UI and secure auth integration",
    image: "https://i.ibb.co/3mLs67Zt/Eventbrite.png",
    technologies: ["React.js", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: "chinies-resturent",
    title: "Chinies Resrurent",
    description: "Interactive resturent menu item with modern UI and secure auth integration",
    image: "https://i.ibb.co/KpXs1K6f/Recipe-Book.png",
    technologies: ["React.js", "Node.js", "MongoDB"],
    featured: true,
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center">
                  View Details
                  <IconWrapper size="sm" variant="button" className="ml-2">
                    <ExternalLink />
                  </IconWrapper>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
