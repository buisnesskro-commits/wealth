import { useEffect, useRef, useState } from 'react';
import {
  Target,
  Eye,
  Shield,
  Heart,
  TrendingUp,
  BookOpen,
  Award,
  Users,
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We uphold the highest ethical standards in every recommendation and interaction.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Clear, honest communication about fees, risks, and expected outcomes.',
  },
  {
    icon: Heart,
    title: 'Client First Approach',
    description:
      'Your financial goals and well-being are at the center of everything we do.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Wealth Creation',
    description:
      'Focused on sustainable growth rather than short-term speculation.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Staying ahead with ongoing education and market research expertise.',
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

export default function About() {
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
                About Wealth Genius
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                A financial services and wealth management company committed to helping investors achieve their financial goals through disciplined investing and strategic financial planning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Eye className="w-7 h-7 text-slate-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-slate-500 leading-relaxed">
                  To become one of India&apos;s most trusted financial advisory and wealth management brands, recognized for integrity, client success, and innovative financial solutions that empower individuals and families to build lasting wealth.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-7 h-7 text-slate-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-500 leading-relaxed">
                  To provide transparent, research-driven, and client-focused financial solutions. We simplify investing and deliver reliable guidance that creates long-term wealth for our clients through personalized strategies and disciplined execution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-slate-200 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-slate-300 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-slate-500" />
                  </div>
                  <p className="text-slate-400 text-sm">Founder Photo</p>
                </div>
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection>
                <span className="inline-block text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md mb-4">
                  Founder
                </span>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Parshva Shah
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Certified Financial Professional and Wealth Consultant with expertise in stock market investing, mutual funds, financial planning, and wealth management. Parshva founded Wealth Genius with a vision to make quality financial guidance accessible to every Indian investor.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-600">
                    <Award className="w-4 h-4 text-emerald-500" />
                    Certified Financial Planner
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-600">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    5+ Years Experience
                  </span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                The principles that guide every decision we make and every relationship we build.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
                    <value.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
