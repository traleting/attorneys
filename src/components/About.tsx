import { Award, BookOpen, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  {
    icon: Award,
    title: 'Direct Partner Involvement',
    desc: 'Clients receive direct access to the firm\'s partner and senior legal professionals throughout their matters.',
  },
  {
    icon: BookOpen,
    title: 'Practical Legal Strategy',
    desc: 'Advice is tailored to each client\'s facts, risks and desired outcomes rather than a one-size-fits-all model.',
  },
  {
    icon: Users,
    title: 'National Service Footprint',
    desc: 'The firm serves clients from its Johannesburg anchor office with Durban satellite support through associate partnerships.',
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-slate-50" aria-labelledby="about-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop"
                alt="Ishmael Mbanjwa - South African law firm founder"
                className="w-full h-[540px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-2xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                  <Award size={18} className="text-gold-600" />
                </div>
                <div>
                  <div className="font-serif font-semibold text-navy-800 text-sm">Ishmael Mbanjwa</div>
                  <div className="text-slate-500 text-xs">Partner & Director</div>
                </div>
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <p className="text-xs text-slate-500">
                Employment law, CCMA, bargaining council and Labour Court matters
              </p>
            </div>

            <div className="absolute -left-4 top-12 bottom-12 w-1 bg-gold-500 rounded-full" />
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
              About the Firm
            </p>
            <h2
              id="about-heading"
              className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6"
            >
              Bespoke Legal Services Built Around Your Matter
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Mbanjwa & Associates was founded in 2026 by Ishmael Mbanjwa, the firm's Partner and Director, to provide accessible, practical and tailored legal services to individuals, businesses and organisations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              With an anchor office in Johannesburg and satellite support in Durban through associate partnerships, the firm serves clients across South Africa with responsive support, clear communication and direct senior-level engagement.
            </p>

            <div className="space-y-5">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 rounded transition-all duration-200"
            >
              Meet With Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
