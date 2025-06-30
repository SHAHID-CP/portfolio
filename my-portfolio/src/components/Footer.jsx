import { Github, Linkedin, Twitter } from "lucide-react"
import IconWrapper from "./IconWrapper"

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} SHAHID ISLAM. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-white hover:bg-slate-800 transition-all p-3 rounded-full">
              <IconWrapper size="default" variant="social">
                <Github />
              </IconWrapper>
            </button>
            <button className="text-gray-400 hover:text-white hover:bg-slate-800 transition-all p-3 rounded-full">
              <IconWrapper size="default" variant="social">
                <Linkedin />
              </IconWrapper>
            </button>
            <button className="text-gray-400 hover:text-white hover:bg-slate-800 transition-all p-3 rounded-full">
              <IconWrapper size="default" variant="social">
                <Twitter />
              </IconWrapper>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
