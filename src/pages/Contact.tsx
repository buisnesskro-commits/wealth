import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Send,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';

const servicesList = [
  'Demat Account Opening',
  'Equity & Trading Guidance',
  'Mutual Fund Advisory',
  'Portfolio Management',
  'Financial Planning',
  'Tax Planning',
  'Fixed Deposits',
  'Loans',
  'General Inquiry',
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', mobile: '', email: '', city: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Contact Wealth Genius
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Get in touch with our experts for personalized financial guidance. We are here to help you achieve your financial goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        Inquiry Submitted!
                      </h3>
                      <p className="text-slate-500">
                        Thank you for reaching out. We will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                          <AlertCircle className="w-4 h-4" />
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all text-sm"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all text-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all text-sm"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all text-sm"
                            placeholder="Your city"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Select a service</option>
                          {servicesList.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all text-sm resize-none"
                          placeholder="Tell us about your financial goals..."
                        />
                      </div>

                      <div className="flex flex-wrap gap-4 pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-slate-800 text-white px-7 py-3 rounded-xl font-medium hover:bg-slate-700 transition-all hover:shadow-lg"
                        >
                          <Send className="w-4 h-4" />
                          Submit Inquiry
                        </button>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-all hover:shadow-lg"
                        >
                          <Clock className="w-4 h-4" />
                          Schedule Consultation
                        </Link>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={100}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-5">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Phone className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                        <a
                          href="tel:+919999999999"
                          className="text-sm font-medium text-slate-700 hover:text-slate-900"
                        >
                          +91 99999 99999
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Mail className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Email</p>
                        <a
                          href="mailto:info@wealthgenius.in"
                          className="text-sm font-medium text-slate-700 hover:text-slate-900"
                        >
                          info@wealthgenius.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                        <MapPin className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Address</p>
                        <p className="text-sm font-medium text-slate-700">
                          Ahmedabad, Gujarat, India
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Clock className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Business Hours</p>
                        <p className="text-sm font-medium text-slate-700">
                          Monday to Saturday<br />9:00 AM to 7:00 PM
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">Connect With Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 border border-sky-100 text-sm font-medium text-sky-700 hover:bg-sky-100 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Telegram
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-slate-100 h-80 bg-slate-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">Google Maps Integration</p>
                <p className="text-slate-300 text-xs mt-1">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Prefer to Talk Directly?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-slate-500 mb-6">
              Our team is available during business hours to answer your questions and guide you through our services.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
