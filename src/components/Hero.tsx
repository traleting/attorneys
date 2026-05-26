import { ArrowRight, Phone, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, inView } = useInView();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="South African law firm office"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
      </div>

      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Shield size={14} className="text-gold-400" />
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Admitted Attorney of the High Court of South Africa
            </span>
          </div>

          <h1
            className={`font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Justice You Can
            <span className="block text-gold-400">Afford to Trust</span>
          </h1>

          <p
            className={`text-slate-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A new-generation South African law firm committed to delivering expert, accessible, and client-centred legal services — for every South African who deserves the best representation.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-7 py-4 rounded transition-all duration-200 shadow-xl hover:shadow-gold-500/40 group"
            >
              Book a Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+27110000000"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-semibold px-7 py-4 rounded transition-all duration-200"
            >
              <Phone size={18} />
              +27 11 000 0000
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '200+', label: 'Cases Won' },
              { value: '100%', label: 'Client Focus' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold text-gold-400">{s.value}</div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div
          className={`hidden lg:block transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h2 className="font-serif text-white text-2xl font-semibold mb-6">
              Practice Areas
            </h2>
            <ul className="space-y-4">
              {[
                'Family Law & Divorce',
                'Property Law & Conveyancing',
                'Labour & Employment Law',
                'Criminal Defence',
                'Business & Contract Law',
                'Personal Injury & Damages',
              ].map((area) => (
                <li key={area} className="flex items-center gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="mt-8 block text-center border border-gold-500/40 hover:border-gold-400 text-gold-400 font-semibold py-3 rounded transition-all duration-200 hover:bg-gold-500/10"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold-500/60 animate-pulse" />
      </div>
    </section>
  );
}
