import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wallet,
  LineChart,
  PiggyBank,
  Briefcase,
  BarChart3,
  Calculator,
  Receipt,
  Landmark,
  CreditCard,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Wallet,
    title: 'Demat Account Opening',
    description:
      'Open your trading and investment account seamlessly with our expert assistance. We help clients complete documentation, activation, and setup quickly for a hassle-free experience.',
    features: [
      'Paperless account opening',
      'Expert documentation assistance',
      'Quick activation & setup',
      'Multiple broker options',
    ],
  },
  {
    icon: LineChart,
    title: 'Equity & Trading Guidance',
    description:
      'Receive market insights, stock research, technical analysis, and strategic guidance to make informed investment decisions while managing risk effectively.',
    features: [
      'Daily market insights',
      'Technical analysis reports',
      'Risk management strategies',
      'Entry & exit guidance',
    ],
  },
  {
    icon: PiggyBank,
    title: 'Mutual Fund Advisory (SIP, SWP, Lump Sum)',
    description:
      'We help you select suitable mutual funds based on your goals, risk profile, and investment horizon. Services include SIP planning, SWP strategies, and lump sum investments.',
    features: [
      'Goal-based fund selection',
      'SIP planning & optimization',
      'SWP income strategies',
      'Portfolio rebalancing',
    ],
  },
  {
    icon: Briefcase,
    title: 'Portfolio Management Support',
    description:
      'Get assistance in tracking, reviewing, and optimizing your investment portfolio for better asset allocation and long-term growth.',
    features: [
      'Regular portfolio reviews',
      'Asset allocation optimization',
      'Performance tracking',
      'Rebalancing recommendations',
    ],
  },
  {
    icon: BarChart3,
    title: 'Market Research & Analysis',
    description:
      'Access detailed market studies, sector analysis, stock screening, technical analysis, and investment opportunities identified through extensive research.',
    features: [
      'Sector-wise analysis',
      'Stock screening tools',
      'Technical research reports',
      'Investment opportunity alerts',
    ],
  },
  {
    icon: Calculator,
    title: 'Financial Planning',
    description:
      'Goal-based financial planning for retirement, education, wealth creation, and major life milestones to help secure your future.',
    features: [
      'Retirement planning',
      'Education fund planning',
      'Wealth creation roadmaps',
      'Emergency fund strategies',
    ],
  },
  {
    icon: Receipt,
    title: 'Tax Planning',
    description:
      'Optimize your tax savings through proper investment planning using ELSS, insurance, retirement products, and other tax-efficient strategies.',
    features: [
      'ELSS mutual fund planning',
      'Insurance-based tax savings',
      'Retirement product guidance',
      'Annual tax optimization',
    ],
  },
  {
    icon: Landmark,
    title: 'Fixed Deposits',
    description:
      'Safe and stable investment solutions through fixed deposits offering competitive returns and capital protection.',
    features: [
      'Compare FD rates across banks',
      'Corporate FD guidance',
      'Tenure optimization',
      'Capital protection focus',
    ],
  },
  {
    icon: CreditCard,
    title: 'All Types of Loans',
    description:
      'Assistance with Personal Loans, Home Loans, Business Loans, Loan Against Property, Education Loans, Vehicle Loans, and other financing solutions.',
    features: [
      'Personal & home loans',
      'Business loan advisory',
      'Loan against property',
      'Education & vehicle loans',
    ],
  },
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

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Our Services
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Comprehensive financial solutions designed to help you build, protect, and grow your wealth. From account opening to advanced portfolio management, we cover every aspect of your financial journey.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all group h-full flex flex-col">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors shrink-0">
                      <service.icon className="w-7 h-7 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 hover:gap-3 transition-all"
                  >
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Not Sure Which Service You Need?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and let our experts guide you to the right financial solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
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
