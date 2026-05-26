import { Quote, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote:
      'Dlamini Attorneys handled my matter with patience and clarity. I always knew what was happening and what the next step would be.',
    name: 'Nomsa M.',
    matter: 'Family Law Client',
  },
  {
    quote:
      'The advice was practical, direct, and easy to understand. They helped us resolve a difficult employment issue with confidence.',
    name: 'Michael K.',
    matter: 'Labour Law Client',
  },
  {
    quote:
      'Professional from the first consultation. The team explained the legal process clearly and treated our case with real care.',
    name: 'Aisha P.',
    matter: 'Property Law Client',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Client Feedback
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5"
          >
            Trusted Legal Guidance When It Matters
          </h2>
          <p className="text-slate-500 text-lg">
            Clients choose us for clear advice, responsive communication, and careful representation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map(({ quote, name, matter }, i) => (
            <article
              key={name}
              className={`bg-white border border-slate-100 rounded-2xl p-7 shadow-lg shadow-slate-200/40 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1 text-gold-500" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote size={28} className="text-gold-200" />
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">{quote}</p>

              <div className="border-t border-slate-100 pt-5">
                <h3 className="font-serif text-lg font-semibold text-navy-900">{name}</h3>
                <p className="text-sm text-slate-500 mt-1">{matter}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
