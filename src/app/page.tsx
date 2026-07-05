import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1219] text-white flex flex-col relative overflow-x-hidden selection:bg-blue-600 selection:text-white"
         style={{
           backgroundImage: `
             radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
             radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px)
           `,
           backgroundSize: '550px 550px, 350px 350px'
         }}>
      
      <nav className="flex justify-between items-center px-8 py-6 sticky top-0 z-50 backdrop-blur-md bg-[#0f1219]/80 border-b border-white/5">
        <div className="flex bg-white/10 border border-white/10 rounded-full p-1 gap-1">
          <a href="#about" className="px-4 py-1.5 text-xs text-white no-underline rounded-full hover:bg-white/10 transition">About</a>
          <a href="#contact" className="px-4 py-1.5 text-xs text-white no-underline rounded-full hover:bg-white/10 transition">Contact</a>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-wider italic select-none">
          resume banwa lo
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-transparent border-none text-[#9CA3AF] cursor-pointer p-2 rounded-full hover:bg-white/10 transition text-sm">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link href="/workspace" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2 rounded-full text-xs font-semibold no-underline shadow-md hover:-translate-y-0.5 transition duration-200">
            Log in
          </Link>
        </div>
      </nav>

      <section className="flex-grow max-w-7xl mx-auto px-16 flex items-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-6xl font-normal leading-[1.1] text-white tracking-tight">
              Get your<br />
              professional resume<br />
              made in mins
            </h1>
            <p className="text-[#D1D5DB] text-lg font-light leading-relaxed max-w-lg">
              Create a perfect, modern CV instantly with our intelligent Billa Bot.
            </p>
            <div className="pt-2">
              <Link href="/workspace" className="inline-block bg-white text-black hover:scale-105 font-bold px-8 py-3.5 rounded-full text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
                Create My CV Now
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-[10px] tracking-wider uppercase text-[#D1D5DB] border border-white/5">
                <span>🌿</span> Trusted by 500k+ Job Seekers
              </div>
              <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-[10px] tracking-wider uppercase text-[#D1D5DB] border border-white/5">
                <span>🌿</span> Featured by Forbes
                <span className="text-[#FBBF24] tracking-tight ml-1">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]">
              <div className="w-full aspect-square bg-gradient-to-tr from-gray-800/50 to-gray-700/20 rounded-2xl border border-white/5 flex flex-col items-center justify-center p-8 gap-3 relative overflow-hidden">
                <span className="text-8xl">🐱</span>
                <span className="font-serif italic text-gray-400 text-sm">Billa Bot is ready</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 animate-[pulse_2s_infinite]">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="white" className="opacity-40">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      <footer id="footer" className="border-t border-white/10 bg-[#0F1219]/95 backdrop-blur-md px-16 py-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg italic">resume banwa lo</h3>
            <p className="text-[#9CA3AF] text-xs leading-relaxed">
              Create professional resumes in minutes with AI-powered assistance from Billa Bot.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-300">Legal</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#" className="text-[#9CA3AF] hover:text-white no-underline transition">Terms and Conditions</a>
              <a href="#" className="text-[#9CA3AF] hover:text-white no-underline transition">Privacy Policy</a>
              <a href="#" className="text-[#9CA3AF] hover:text-white no-underline transition">Shipping and Returns Policy</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-300">Company</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#" id="about" className="text-[#9CA3AF] hover:text-white no-underline transition">About Us</a>
              <a href="#" id="contact" className="text-[#9CA3AF] hover:text-white no-underline transition">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-8 pt-6 text-center text-xs text-[#6B7280]">
          <p>© 2025 Resume Banwa Lo. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

