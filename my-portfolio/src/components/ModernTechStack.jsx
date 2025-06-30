
import {
  Database,
  Globe,
  Layers,
  Cpu,
  FileCode,
  Palette,
  Code,
  GitBranch,
  Container,
  Cloud,
  Flame,
  Zap,
  Monitor,
  Server,
  Terminal,
  Wrench,
} from "lucide-react"
import IconWrapper from "./IconWrapper"

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: Layers, level: 95, color: "text-blue-400" },
      { name: "TypeScript", icon: FileCode, level: 45, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: Palette, level: 92, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: Cpu, level: 88, color: "text-green-400" },
      { name: "Express.js", icon: Globe, level: 85, color: "text-gray-300" },
      { name: "MongoDB", icon: Database, level: 80, color: "text-green-500" },
    ],
  },
  {
    title: "Languages",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "JavaScript", icon: FileCode, level: 95, color: "text-yellow-400" },
      { name: "C++", icon: FileCode, level: 85, color: "text-blue-600" },
      { name: "Python", icon: Terminal, level: 78, color: "text-yellow-500" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: GitBranch, level: 90, color: "text-orange-500" },
      { name: "AWS", icon: Cloud, level: 65, color: "text-orange-400" },
      { name: "Firebase", icon: Flame, level: 90, color: "text-orange-500" },
    ],
  },
]



const ModernTechStack = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 animate-pulse">
            <span className="text-3xl">⚡</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of modern technologies and frameworks I use to build
            <span className="text-blue-400 font-semibold"> exceptional digital experiences</span>
          </p>
        </div>

        

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconWrapper size="lg" className="text-white">
                    <category.icon />
                  </IconWrapper>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <IconWrapper
                            size="md"
                            variant="button"
                            className={`${skill.color} group-hover/skill:scale-125 transition-transform duration-300`}
                          >
                            <IconComponent />
                          </IconWrapper>
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-full px-8 py-4 hover:scale-105 transition-transform duration-300">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-gray-300 font-medium text-lg">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernTechStack
