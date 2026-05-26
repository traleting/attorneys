import { Heart, Home, Briefcase, Shield, Building2, FileText, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Heart,
    title: 'Family Law & Divorce',
    desc: 'Compassionate guidance through divorce, child custody, maintenance, and domestic partnerships under South African family law.',
    tags: ['Divorce', 'Child Custody', 'Maintenance', 'Adoption'],
  },
  {
    icon: Home,
    title: 'Property Law & Conveyancing',
    desc: 'Expert conveyancing services for buying, selling, and transferring property across South Africa. Protecting your investment.',
    tags: ['Transfers', 'Bonds', 'Sectional Title', 'Evictions'],
  },
  {
    icon: Briefcase,
    title: 'Labour & Employment Law',
    desc: 'Protecting workers and employers at the CCMA and Labour Court. Unfair dismissals, retrenchments, and employment contracts.',
    tags: ['CCMA', 'Unfair Dismissal', 'Retrenchment', 'Contracts'],
  },
  {
    icon: Shield,
    title: 'Criminal Defence',
    desc: 'Vigorous defence in the Magistrate\'s Court and High Court. We protect your rights at every stage of criminal proceedings.',
    tags: ['Bail Applications', 'Trial Defence', 'Appeals', 'Expungement'],
  },
  {
    icon: Building2,
    title: 'Business & Company Law',
    desc: 'From business registration to shareholder disputes. We help South African entrepreneurs build solid legal foundations.',
    tags: ['Company Formation', 'Contracts', 'Disputes', 'CIPC'],
  },
  {
    icon: FileText,
    title: 'Wills & Deceased Estates',
    desc: 'Drafting valid wills and administering deceased estates to ensure your assets are protected and your wishes honoured.',
    tags: ['Will Drafting', 'Estate Administration', 'Intestate', 'Trusts'],
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Practice Areas
          </p>
          <h2
            id="services-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5"
          >
            Comprehensive Legal Services for South Africans
          </h2>
          <p className="text-slate-500 text-lg">
            From personal matters to complex business disputes, we provide expert legal guidance across the full spectrum of South African law.
          </p>
        </div>

        {/* Grid */}
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
