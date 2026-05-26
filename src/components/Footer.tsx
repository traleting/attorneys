import { Scale, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-gold-500 flex items-center justify-center">
              <Scale size={18} className="text-navy-950" />
            </div>
            <div>
              <div className="font-serif text-white font-semibold">Dlamini Attorneys</div>
              <div className="text-gold-400 text-xs tracking-widest uppercase">Incorporated</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            A proudly South African law firm committed to justice, integrity, and accessible legal services for all.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Twitter, label: 'Twitter/X' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-gold-500/40 hover:bg-white/5 flex items-center justify-center transition-all duration-200"
              >
                <Icon size={16} className="text-slate-400 hover:text-gold-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="font-serif text-white font-semibold mb-5">Practice Areas</h4>
          <ul className="space-y-3 text-sm">
            {[
              'Family Law & Divorce',
              'Property Law',
              'Labour Law',
              'Criminal Defence',
              'Business Law',
              'Wills & Estates',
            ].map((item) => (
              <li key={item}>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'About the Firm', href: '#about' },
              { label: 'Our Services', href: '#services' },
              { label: 'Why Choose Us', href: '#why-us' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Book a Consultation', href: '#contact' },
              { label: 'Privacy Policy', href: '#' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-gold-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-white font-semibold mb-5">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
              <span>123 Commissioner Street, Johannesburg CBD, 2001, Gauteng</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-gold-400 flex-shrink-0" />
              <a href="tel:+27110000000" className="hover:text-gold-400 transition-colors">
                +27 11 000 0000
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-gold-400 flex-shrink-0" />
              <a href="mailto:info@dlaminiattorneys.co.za" className="hover:text-gold-400 transition-colors">
                info@dlaminiattorneys.co.za
              </a>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 text-xs">
            <strong className="text-white block mb-1">Free First Consultation</strong>
            Book a confidential consultation at no charge.
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {year} Dlamini Attorneys Inc. All rights reserved.</p>
          <p>
            Registered with the{' '}
            <span className="text-slate-300">Law Society of South Africa</span>
            {' '}· Admitted Attorney of the High Court
          </p>
        </div>
      </div>
    </footer>
  );
}
