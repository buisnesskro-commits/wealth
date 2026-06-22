import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const serviceLinks = [
  { label: 'Demat Account Opening', path: '/services' },
  { label: 'Mutual Funds', path: '/services' },
  { label: 'Financial Planning', path: '/services' },
  { label: 'Tax Planning', path: '/services' },
  { label: 'Loans', path: '/services' },
];

const partners = ['Angel One', 'NJ Wealth', 'HDFC Life'];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">WG</span>
              </div>
              <span className="font-bold text-lg text-white">Wealth Genius</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your trusted partner in wealth creation. Helping individuals and families achieve their financial goals through smart investing and wealth management.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-slate-400" />
                <span className="text-sm text-slate-400">+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-slate-400" />
                <span className="text-sm text-slate-400">info@wealthgenius.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400" />
                <span className="text-sm text-slate-400">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-white font-medium text-sm mb-2">Associated Partners</h5>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center mb-3">
            Mutual Fund investments are subject to market risks. Wealth Genius provides educational and informational guidance. Investment decisions should be made after considering individual financial circumstances and risk appetite.
          </p>
          <p className="text-xs text-slate-600 text-center">
            Copyright © 2026 Wealth Genius. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
