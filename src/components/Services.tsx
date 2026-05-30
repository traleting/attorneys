import { ArrowRight, Briefcase, Building2, FileText, Heart, Home, Scale } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Briefcase,
    title: 'Employment Law & Labour Relations',
    desc: 'Representation at the CCMA, bargaining councils and the Labour Court, supported by strategic employment-law risk advice.',
    tags: ['CCMA', 'Bargaining Councils', 'Labour Court', 'Risk Advice'],
  },
  {
    icon: Scale,
    title: 'Civil Litigation',
    desc: 'Litigation support in Magistrates\' Court and High Court matters, from early dispute assessment to pleadings, hearings and settlement negotiations.',
    tags: ['Magistrates\' Court', 'High Court', 'Pleadings', 'Settlements'],
  },
  {
    icon: Heart,
    title: 'Family Law',
    desc: 'Responsive legal support for family-related matters, with practical guidance and clear communication throughout the process.',
    tags: ['Family Matters', 'Advice', 'Negotiation', 'Support'],
  },
  {
    icon: Home,
    title: 'Property & Conveyancing Support',
    desc: 'Conveyancing services and support on property-related transfer matters as part of a coordinated legal-service offering.',
    tags: ['Transfers', 'Property Matters', 'Conveyancing', 'Coordination'],
  },
  {
    icon: FileText,
    title: 'Disciplinary Hearings',
    desc: 'Chairing and managing individual, collective and reportable employment-related hearings with procedural care.',
    tags: ['Hearings', 'Discipline', 'Reports', 'Procedure'],
  },
  {
    icon: Building2,
    title: 'Industry-Focused Legal Support',
    desc: 'Practical legal assistance for clients in mining, metals, motor, road freight, financial services and security sectors.',
    tags: ['Mining', 'Road Freight', 'Financial Services', 'Security'],
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Services & Practice Areas
          </p>
          <h2
            id="services-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5"
          >
            Tailored Legal Support Across Key Practice Areas
          </h2>
          <p className="text-slate-500 text-lg">
            We combine technical legal experience with practical understanding of the sectors in which our clients operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <article
              key={title}
              className={`group bg-slate-50 hover:bg-navy-950 border border-slate-100 hover:border-navy-800 rounded-2xl p-7 transition-all duration-300 cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={title}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-100 group-hover:bg-gold-500/20 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={22} className="text-gold-600 group-hover:text-gold-400 transition-colors" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-navy-900 group-hover:text-white mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed mb-5 transition-colors">
                {desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white group-hover:bg-white/10 border border-slate-200 group-hover:border-white/10 text-slate-500 group-hover:text-slate-300 px-2.5 py-1 rounded-full transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-gold-600 group-hover:text-gold-400 text-sm font-semibold transition-colors"
                tabIndex={0}
              >
                Get Advice
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
