import { CheckCircle2, Clock, DollarSign, MessageSquare, Globe, Handshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    icon: DollarSign,
    title: 'Transparent, Fair Pricing',
    desc: 'No hidden fees. We provide clear fee arrangements upfront so you know exactly what to expect from the start.',
  },
  {
    icon: Clock,
    title: 'Responsive Communication',
    desc: 'We return calls and emails promptly. You will never be left wondering about your matter\'s status.',
  },
  {
    icon: Globe,
    title: 'Multilingual Service',
    desc: 'We serve clients in English, Zulu, Sotho, and Afrikaans — making legal services truly accessible to all South Africans.',
  },
  {
    icon: MessageSquare,
    title: 'Plain-Language Advice',
    desc: 'We explain the law in clear, simple terms. No legal jargon — just honest, straightforward guidance you can act on.',
  },
  {
    icon: Handshake,
    title: 'Personal Attention',
    desc: 'Your matter is handled by an admitted attorney, not delegated to clerks. You always deal directly with your lawyer.',
  },
  {
    icon: CheckCircle2,
    title: 'Proven Track Record',
    desc: 'A growing portfolio of successful outcomes in courts and tribunals across South Africa speaks for itself.',
  },
];

export default function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section id="why-us" className="py-24 bg-navy-950 relative overflow-hidden" aria-labelledby="whyus-heading">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2
            id="whyus-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            The Right Attorney Makes All the Difference
          </h2>
          <p className="text-slate-400 text-lg">
            We are a new kind of South African law firm — one that puts your needs first, every single time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`border border-white/10 hover:border-gold-500/40 rounded-2xl p-7 group hover:bg-white/5 transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 group-hover:bg-gold-500/20 flex items-center justify-center mb-5 transition-colors">
                <Icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className={`mt-16 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-navy-950 mb-2">
              Ready to Discuss Your Matter?
            </h3>
            <p className="text-navy-800">
              Schedule a confidential consultation — no obligation, no pressure.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-navy-950 hover:bg-navy-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
