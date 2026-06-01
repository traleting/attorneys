import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const practiceAreas = [
  'Employment Law & Labour Relations',
  'Civil Litigation',
  'Family Law',
  'Property & Conveyancing Support',
  'Disciplinary Hearings',
  'Industry-Focused Legal Support',
  'Other',
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = e.currentTarget as HTMLFormElement;
    if (!currentForm.reportValidity()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" aria-labelledby="contact-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5"
          >
            Book Your Consultation
          </h2>
          <p className="text-slate-500 text-lg">
            Tell us about your matter and we will respond with practical next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Column */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-navy-950 rounded-2xl p-8 h-full text-white">
              <h3 className="font-serif text-2xl font-semibold mb-8">Contact Information</h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Office Address</div>
                    <div className="text-slate-400 text-sm">Anchor Office: Johannesburg, South Africa<br />Satellite Presence: Durban, through associate partnerships</div>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Phone</div>
                    <a href="tel:+27733922678" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                      +27 73 392 2678
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Email</div>
                    <a href="mailto:admin@mbanjwassociates.co.za" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                      admin@mbanjwassociates.co.za
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm mb-1">Office Hours</div>
                    <div className="text-slate-400 text-sm">Monday – Friday: 08:00 – 17:00<br />Saturday: 09:00 – 13:00 (by appointment)<br />Sunday: Closed</div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-xs leading-relaxed">
                  Mbanjwa & Associates provides direct senior-level engagement and tailored legal support. All consultations are treated as confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                  Message Received
                </h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you for contacting Mbanjwa & Associates. We will review your matter and respond with practical next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+27 XX XXX XXXX"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="matter" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Area of Law <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="matter"
                    name="matter"
                    required
                    value={form.matter}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all bg-white"
                  >
                    <option value="" disabled>Select your legal matter</option>
                    {practiceAreas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Brief Description of Your Matter <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please briefly describe your situation so we can prepare for your consultation..."
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <p className="text-xs text-slate-400">
                  By submitting this form, you acknowledge that no attorney-client relationship is formed until formally agreed upon. All information is strictly confidential.
                </p>

                {error && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-300 text-navy-950 font-bold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-gold-500/30"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
