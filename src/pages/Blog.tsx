import { useEffect, useRef, useState } from 'react';
import {
  Newspaper,
  TrendingUp,
  PieChart,
  Lightbulb,
  Wallet,
  Building2,
  ClipboardList,
  Receipt,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Clock,
} from 'lucide-react';

const categories = [
  { icon: Newspaper, title: 'Daily Market Updates', count: 48 },
  { icon: TrendingUp, title: 'Stock Market Analysis', count: 32 },
  { icon: PieChart, title: 'Mutual Fund Insights', count: 24 },
  { icon: Lightbulb, title: 'Investment Strategies', count: 18 },
  { icon: Wallet, title: 'Personal Finance Tips', count: 21 },
  { icon: Building2, title: 'Economic & Business News', count: 15 },
  { icon: ClipboardList, title: 'Portfolio Reviews', count: 12 },
  { icon: Receipt, title: 'Tax Saving Strategies', count: 9 },
];

const featuredPosts = [
  {
    category: 'Stock Market Analysis',
    title: 'Understanding Market Cycles: A Guide for Long-Term Investors',
    excerpt:
      'Learn how market cycles work and why patience is the key to wealth creation in equity markets.',
    date: 'Jun 15, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Mutual Fund Insights',
    title: 'SIP vs Lump Sum: Which Strategy Works Better?',
    excerpt:
      'A detailed comparison of systematic investment plans versus lump sum investments based on historical data.',
    date: 'Jun 10, 2026',
    readTime: '4 min read',
  },
  {
    category: 'Investment Strategies',
    title: 'Building a Diversified Portfolio for Indian Investors',
    excerpt:
      'How to allocate assets across equity, debt, gold, and real estate for optimal risk-adjusted returns.',
    date: 'Jun 5, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Tax Saving Strategies',
    title: 'Maximize Your Tax Savings with ELSS Mutual Funds',
    excerpt:
      'Everything you need to know about Equity Linked Savings Schemes and how they can reduce your tax burden.',
    date: 'May 28, 2026',
    readTime: '4 min read',
  },
  {
    category: 'Personal Finance Tips',
    title: 'Emergency Fund: How Much Should You Really Save?',
    excerpt:
      'Financial experts recommend 6-12 months of expenses. Here is how to calculate your ideal emergency corpus.',
    date: 'May 20, 2026',
    readTime: '3 min read',
  },
  {
    category: 'Economic & Business News',
    title: 'RBI Policy Update: What It Means for Your Investments',
    excerpt:
      'An analysis of the latest monetary policy decisions and their impact on fixed income and equity markets.',
    date: 'May 15, 2026',
    readTime: '5 min read',
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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? featuredPosts.filter((p) => p.category === activeCategory)
    : featuredPosts;

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
                Market Insights & Financial Knowledge
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Stay informed with expert analysis, market updates, and practical financial wisdom to make smarter investment decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Browse by Category</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 60}>
                <button
                  onClick={() =>
                    setActiveCategory(activeCategory === cat.title ? null : cat.title)
                  }
                  className={`w-full p-5 rounded-2xl border text-left transition-all hover:shadow-md ${
                    activeCategory === cat.title
                      ? 'bg-slate-800 border-slate-800 text-white'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <cat.icon
                    className={`w-6 h-6 mb-3 ${
                      activeCategory === cat.title ? 'text-white' : 'text-slate-600'
                    }`}
                  />
                  <h3
                    className={`font-semibold text-sm mb-1 ${
                      activeCategory === cat.title ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className={`text-xs ${
                      activeCategory === cat.title ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    {cat.count} articles
                  </p>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                {activeCategory ? activeCategory : 'Latest Articles'}
              </h2>
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Clear filter
                </button>
              )}
            </div>
          </AnimatedSection>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 80}>
                  <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                      <Newspaper className="w-12 h-12 text-slate-300" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="inline-block text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 w-fit">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16">
                <p className="text-slate-500">
                  No articles found in this category yet. Check back soon!
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Disclaimer</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Past performance is not indicative of future results. Investments are subject to market risks. Please read all scheme-related documents carefully before investing. The content on this blog is for educational and informational purposes only and should not be construed as financial advice.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
