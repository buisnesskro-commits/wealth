import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Shield,
  Target,
  Handshake,
  Layers,
  ChevronRight,
  Star,
  ArrowRight,
  FileText,
  PiggyBank,
  Briefcase,
  Calculator,
  Landmark,
  CreditCard,
  Wallet,
  LineChart,
  Receipt,
} from 'lucide-react';

function useInView(threshold = 0.15) {
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

import { useState } from 'react';

const stats = [
  { icon: Users, value: '250+', label: 'Happy Clients' },
  { icon: Landmark, value: '₹15+ Cr', label: 'Assets Under Management' },
  { icon: Award, value: '5+', label: 'Years of Market Experience' },
  { icon: FileText, value: '1000+', label: 'Successful Consultations' },
];

const partners = ['Angel One', 'NJ Wealth', 'HDFC Life'];

const whyChoose = [
  { icon: Target, title: 'Personalized Financial Planning' },
  { icon: BarChart3, title: 'Expert Market Research' },
  { icon: TrendingUp, title: 'Professional Investment Guidance' },
  { icon: PiggyBank, title: 'Long-Term Wealth Creation Focus' },
  { icon: Shield, title: 'Transparent & Client-Centric Approach' },
  { icon: Layers, title: 'One-Stop Financial Solutions' },
];

const featuredServices = [
  { icon: Wallet, title: 'Demat Account Opening' },
  { icon: LineChart, title: 'Equity & Trading Guidance' },
  { icon: PiggyBank, title: 'Mutual Fund Advisory' },
  { icon: Briefcase, title: 'Portfolio Management Support' },
  { icon: Calculator, title: 'Financial Planning' },
  { icon: Receipt, title: 'Tax Planning' },
];

const testimonials = [
  {
    text: 'Excellent guidance and support throughout my investment journey. Highly recommended.',
    name: 'Rajesh Patel',
    role: 'Business Owner',
  },
  {
    text: 'Professional service and clear investment strategies. Wealth Genius helped me organize my finances effectively.',
    name: 'Priya Sharma',
    role: 'IT Professional',
  },
  {
    text: 'Great support in mutual fund and stock market investments. Always available for queries.',
    name: 'Amit Desai',
    role: 'Doctor',
  },
];

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

function CountUp({
  end,
  suffix = '',
  duration = 2000,
}: {
  end: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  const numericMatch = end.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericValue));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, numericValue, duration]);

  const display = end.replace(/\d+/, count.toString());
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-slate-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-600">
                  Trusted by 250+ clients across India
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4">
                Wealth Genius
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-light mb-6">
                Your Trusted Partner in Wealth Creation
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mb-8 leading-relaxed">
                Helping individuals and families achieve their financial goals through smart investing, financial planning, and wealth management solutions.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-slate-800 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-slate-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Open Demat Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-200 px-7 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-all hover:shadow-md"
                >
                  Book Free Consultation
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <stat.icon className="w-8 h-8 text-slate-700 mx-auto mb-4" />
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                    <CountUp end={stat.value} />
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
              Associated Partners
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <AnimatedSection key={partner}>
                <div className="text-lg sm:text-xl font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-default">
                  {partner}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Wealth Genius
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We combine expertise, transparency, and personalized attention to deliver exceptional financial outcomes.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors shrink-0">
                    <item.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your unique needs and goals.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 80}>
                <Link
                  to="/services"
                  className="block p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
                    <service.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-slate-800 font-medium hover:gap-3 transition-all"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Real stories from real clients who have transformed their financial future.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Wealth Creation Journey?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation today and take the first step toward financial freedom.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-slate-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
