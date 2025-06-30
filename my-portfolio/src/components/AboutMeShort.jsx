import { Database, Globe, Code, Cpu, Layers, Terminal, Braces, FileCode } from "lucide-react"
import { SiC, SiCplusplus } from "react-icons/si"
import { SiMongodb, SiDjango } from "react-icons/si"
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"
import { DiNodejsSmall } from "react-icons/di"
const technologies = [
  // MERN Stack - using appropriate Lucide icons
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", category: "Database" },
  { name: "Express.js", icon: DiNodejsSmall, color: "text-gray-300", category: "Backend" },
  { name: "React", icon: FaReact, color: "text-blue-400", category: "Frontend" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400", category: "Backend" },
  // Additional Languages & Frameworks
  { name: "Python", icon: FaPython, color: "text-yellow-500", category: "Language" },
  { name: "Django", icon: SiDjango, color: "text-green-600", category: "Framework" },
  { name: "C", icon: SiC, color: "text-blue-500", category: "Language" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600", category: "Language" },
]

const AboutMeShort = () => {
  return (
    <section id="about" className="py-16 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              I'm a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack
              </span>{" "}
              Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specializing in MERN stack development with expertise in Python, Django, C, and C++. Building scalable web
              applications and solving complex problems with clean, efficient code.
            </p>
          </div>

          {/* Technology Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center space-y-3 hover:scale-110 transition-all duration-300"
                >
                  <div className="w-16 h-16 md:w-18 md:h-18 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-slate-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <IconComponent
                      className={`w-8 h-8 md:w-9 md:h-9 ${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium block">
                      {tech.name}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {tech.category}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Technology Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 text-sm text-gray-300">
              <span className="text-blue-400 font-semibold">MERN Stack</span> • Full Stack Web Development
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 text-sm text-gray-300">
              <span className="text-yellow-400 font-semibold">Python</span> • Backend & Data Science
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 text-sm text-gray-300">
              <span className="text-blue-500 font-semibold">C/C++</span> • System Programming
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeShort
