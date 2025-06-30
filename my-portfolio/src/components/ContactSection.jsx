import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from "lucide-react"
import IconWrapper from "./IconWrapper"
import { toast } from 'react-toastify';

const ContactSection = () => { 
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${import.meta.env.VITE_service}`, `${import.meta.env.VITE_template}`, form.current, {
        publicKey: `${import.meta.env.VITE_public}`,
      })
      .then(
        () => {
          toast("SUCCESS Mail Send!")
      
        },
        (error) => {
          toast("Send Faild mail")
        },
        e.target.reset()
      );
  };







  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's work together!</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
              collaborate, or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconWrapper size="default" className="text-white">
                    <Mail />
                  </IconWrapper>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">shaahid.045@email.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconWrapper size="default" className="text-white">
                    <Phone />
                  </IconWrapper>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+880 1730-898662</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconWrapper size="default" className="text-white">
                    <MapPin />
                  </IconWrapper>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Rajshahi, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white text-2xl font-semibold mb-6">Send a Message</h3>
            
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg font-semibold transition-all duration-300 text-white rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
