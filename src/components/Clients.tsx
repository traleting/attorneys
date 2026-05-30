import { Building2, Car, PackageCheck, Ship, Truck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const clients = [
  { icon: Truck, name: 'Bakers Transport', sector: 'Road freight and logistics' },
  { icon: PackageCheck, name: 'DHL Supply Chain', sector: 'Supply chain and logistics' },
  { icon: Car, name: 'Combined Motor Holdings Group', sector: 'Motor industry' },
  { icon: Ship, name: 'Bidvest SACD', sector: 'Freight, warehousing and logistics' },
];

export default function Clients() {
  const { ref, inView } = useInView();

  return (
    <section
      id="clients"
      className="py-24 bg-slate-50"
      aria-labelledby="clients-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Clients & Companies
          </p>
          <h2
            id="clients-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5"
          >
            Companies the Firm Works With
          </h2>
          <p className="text-slate-500 text-lg">
            Mbanjwa & Associates supports clients operating in sectors that require responsive, commercially sensible legal guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {clients.map(({ icon: Icon, name, sector }, i) => (
            <article
              key={name}
              className={`bg-white border border-slate-100 rounded-2xl p-7 shadow-lg shadow-slate-200/40 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-5">
                <Icon size={22} className="text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy-900">{name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-3">
                {sector}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-600 shadow-lg shadow-slate-200/40">
            <Building2 size={18} className="text-gold-600" />
            Serving individuals, businesses and organisations across South Africa.
          </div>
        </div>
      </div>
    </section>
  );
}
