import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1219] text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0F1219] to-[#0F1219] pointer-events-none" />

      {/* Navigation */}
      <header className="relative w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex gap-1.5 bg-white/5 border border-white/10 rounded-full p-1 text-xs">
          <a href="#about" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">About</a>
          <a href="#contact" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">Contact</a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-tight italic">
          resume banwa lo
        </div>
        <div>
          <Link href="/workspace" className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition">
            Workspace
          </Link>
        </div>
      </header>

      {/* Hero Content Grid */}
      <section className="relative flex-grow max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-8 pb-16">
        
        <div className="flex flex-col gap-6">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-gray-100">
            Get your<br />
            professional resume<br />
            made in mins
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-md font-light leading-relaxed">
            Create a pristine, ATS-compliant workspace CV instantly in collaboration with our intelligent generative Billa Bot helper.
          </p>
          <div className="pt-2">
            <Link href="/workspace" className="inline-block bg-white text-black hover:bg-gray-100 font-bold px-8 py-3.5 rounded-full text-sm shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition duration-300">
              Create My CV Now
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-[10px] tracking-wide uppercase text-gray-300">
              <span>🌿</span> Trusted by 500k+ Job Seekers
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-[10px] tracking-wide uppercase text-gray-300">
              <span>🌿</span> Rating: <span className="text-amber-400 font-semibold">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Billa Bot Graphics Side */}
        <div className="flex justify-center items-center relative">
          <div className="relative w-full max-w-[400px] h-96 bg-gradient-to-tr from-gray-800/40 to-gray-700/10 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none" />
            <span className="text-6xl select-none filter drop-shadow-lg">🐱</span>
            
            <div className="absolute bottom-8 right-8 animate-pulse">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" className="opacity-40">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative w-full border-t border-white/5 bg-black/30 py-12 z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg italic mb-2">resume banwa lo</h3>
            <p className="text-gray-500 text-xs">Create clean, structured portfolios in minutes.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">Legal</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300">Privacy Standards</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">Contact</h4>
            <p className="text-xs text-gray-500">hello@resumebanwalo.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
