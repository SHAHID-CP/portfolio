import { Download, Mail, Github, Linkedin, Twitter, Code } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"
import IconWrapper from "./IconWrapper"

const Banner = () => {
  return (
    <section
      id="home"
      className="mt-10 relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        ></div>
      </div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">



          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Available for work
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-shadow-lg">
                SHAHID
                <span className="block gradient-text ml-6 md:ml-12">ISLAM</span>
              </h1>

              {/* Typewriter Effect */}
              <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#00eeff] min-h-[3rem] flex items-center justify-center lg:justify-start">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Stack Expert",
                    "React Specialist",
                    "Node.js Developer",
                    "UI/UX Enthusiast",
                    "Problem Solver",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Passionate about creating innovative web solutions that bridge the gap between design and functionality. I
              specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful
              designs.
            </p>

            {/* Action Buttons */}
            <div className="">
              <button className="btn-primary flex items-center justify-center">
                <IconWrapper size="default" variant="button" className="mr-2">
                  <Download />
                </IconWrapper>
                Download Resume
              </button>
              
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start pt-8">
              {[
                { icon: Github, href: "#", color: "hover:text-gray-300" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-14 h-14 text-gray-500 ${social.color} hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center focus-ring`}
                >
                  <IconWrapper size="md" variant="social">
                    <social.icon />
                  </IconWrapper>
                </button>
              ))}
            </div>
          </div>
          










          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://i.ibb.co/XfKSp0V3/profilee.jpg"
                  alt="Alex Johnson"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Code Icon */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6 shadow-2xl group-hover:rotate-12 transition-transform duration-300">
                <IconWrapper size="xl" className="text-white">
                  <Code />
                </IconWrapper>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-1/4 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
