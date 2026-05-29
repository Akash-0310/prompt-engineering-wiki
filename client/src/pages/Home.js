import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSearch, FiBookOpen, FiCode, FiShield, FiCpu, FiZap, FiTarget, FiTrendingUp, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { BsLightningCharge, BsStars } from 'react-icons/bs';
import articles from '../data/articles';
import { AnimatedSection, StaggerContainer } from '../components/ScrollAnimation';

const Home = () => {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 6);
  const latestArticles = articles.slice(-4).reverse();

  const features = [
    { icon: <FiBookOpen />, title: 'Comprehensive Guides', desc: 'In-depth articles covering everything from basic prompting to advanced agent architectures, written by practitioners.' },
    { icon: <FiCode />, title: 'Code Examples', desc: 'Real-world code snippets and templates you can copy, adapt, and use in your own AI-powered applications immediately.' },
    { icon: <FiSearch />, title: 'Searchable Wiki', desc: 'Find exactly what you need with our powerful search and category-based navigation across hundreds of techniques.' },
    { icon: <FiShield />, title: 'Security Best Practices', desc: 'Learn to protect your AI applications from prompt injection, data leakage, and other emerging security threats.' },
    { icon: <FiCpu />, title: 'Model-Agnostic', desc: 'Techniques that work across all major LLMs — Claude, GPT-4, Gemini, Llama, and more. No vendor lock-in.' },
    { icon: <FiZap />, title: 'Always Updated', desc: 'Continuously refreshed content reflecting the latest research papers, model releases, and community discoveries.' },
  ];

  const howItWorks = [
    { step: '01', title: 'Browse Topics', desc: 'Explore our organized categories from Getting Started to Advanced techniques, Security, and real-world Use Cases.' },
    { step: '02', title: 'Learn Techniques', desc: 'Dive deep into each technique with detailed explanations, practical examples, code snippets, and comparison tables.' },
    { step: '03', title: 'Apply & Practice', desc: 'Take what you learn and apply it immediately. Use our templates, follow our best practices, and see results right away.' },
    { step: '04', title: 'Master & Share', desc: 'Become an expert, contribute back to the community, and help others on their prompt engineering journey.' },
  ];

  const testimonials = [
    { name: 'Emily Zhang', role: 'ML Engineer at Stripe', text: 'PromptWiki helped me reduce our AI pipeline errors by 40%. The chain-of-thought article alone was worth hours of research time.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face' },
    { name: 'David Okafor', role: 'Founder, AIStartup.io', text: 'We use PromptWiki as our team onboarding resource for prompt engineering. The quality and depth of content is unmatched anywhere on the web.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
    { name: 'Sarah Mitchell', role: 'Content Lead at HubSpot', text: 'The content marketing prompting guide transformed how our team uses AI. We went from generic AI outputs to brand-perfect copy in days.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' },
  ];

  const useCases = [
    { icon: <FiCode />, title: 'Software Development', desc: 'Generate, debug, and refactor code. Build AI-powered dev tools and coding assistants.', link: '/article/prompts-for-code-generation' },
    { icon: <FiTarget />, title: 'Marketing & Content', desc: 'Create SEO-optimized blogs, social media posts, email campaigns, and ad copy at scale.', link: '/article/prompts-content-marketing' },
    { icon: <FiTrendingUp />, title: 'Business Operations', desc: 'Automate document processing, reporting, customer service, and data analysis workflows.', link: '/article/prompt-engineering-business' },
    { icon: <FiLayers />, title: 'AI Agent Building', desc: 'Design autonomous agents that plan, use tools, and complete complex multi-step tasks.', link: '/article/building-ai-agents' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <AnimatedSection animation="fade-up">
              <div className="hero-badge">
                <span className="pulse"></span>
                Open Knowledge Base — 16+ Articles
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="hero-title">
                Master the Art of <span className="gradient-text">Prompt Engineering</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="hero-description">
                Your definitive guide to communicating with AI. Explore techniques, frameworks,
                and best practices used by the world's top AI engineers and researchers.
                From zero-shot prompting to building autonomous agents — everything you need
                to unlock the full potential of language models.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="hero-actions">
                <Link to="/knowledge-base" className="btn btn-primary">
                  Browse Articles <FiArrowRight />
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">16+</div>
                  <div className="hero-stat-label">Articles</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">7</div>
                  <div className="hero-stat-label">Categories</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">50K+</div>
                  <div className="hero-stat-label">Readers</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">100%</div>
                  <div className="hero-stat-label">Free</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-left" delay={200} className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=450&fit=crop"
                alt="AI and Prompt Engineering"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <div className="hero-floating-card card-1">
              <div className="card-icon"><BsLightningCharge /></div>
              <div className="card-text">Chain-of-Thought</div>
              <div className="card-sub">Advanced Technique</div>
            </div>
            <div className="hero-floating-card card-2">
              <div className="card-icon"><BsStars /></div>
              <div className="card-text">98% Accuracy</div>
              <div className="card-sub">With proper prompts</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trusted By / Social Proof Banner */}
      <section style={{ background: 'var(--bg-secondary)', padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>
              Trusted by engineers at leading companies worldwide
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap', opacity: 0.4 }}>
              {['Google', 'Meta', 'Amazon', 'Microsoft', 'Stripe', 'Shopify'].map(name => (
                <span key={name} style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: 1 }}>{name}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="features section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">Why PromptWiki</div>
              <h2 className="section-title">Everything You Need to <span className="gradient-text">Master AI</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                A comprehensive, well-organized knowledge base designed for developers, researchers,
                and anyone working with AI language models.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="features-grid">
            {features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">How It Works</div>
              <h2 className="section-title">Your Learning <span className="gradient-text">Pathway</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                From complete beginner to advanced practitioner — follow our structured learning path
                to build real prompt engineering skills in weeks, not months.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginTop: 48 }}>
            {howItWorks.map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div style={{
                  padding: 32,
                  background: 'var(--bg-glass-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                  transition: 'var(--transition)',
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    opacity: 0.15,
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    lineHeight: 1,
                  }}>{item.step}</div>
                  <div style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.85rem', marginBottom: 16,
                  }}>{item.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Showcase */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">Use Cases</div>
              <h2 className="section-title">What Can You <span className="gradient-text">Build?</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Prompt engineering powers everything from simple chatbots to sophisticated
                autonomous AI systems. Here's where it creates the most impact.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {useCases.map((uc, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <Link to={uc.link} style={{
                  display: 'block', padding: 32,
                  background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', transition: 'all 0.3s ease',
                }}>
                  <div className="feature-icon">{uc.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{uc.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>{uc.desc}</p>
                  <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Read Article <FiArrowRight />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">Featured Articles</div>
              <h2 className="section-title">Start Your <span className="gradient-text">Learning Journey</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Handpicked articles to help you build a strong foundation in prompt engineering,
                from beginner concepts to production-ready techniques.
              </p>
            </div>
          </AnimatedSection>

          <div className="articles-grid">
            {featuredArticles.map((article, i) => (
              <AnimatedSection key={article._id} animation="fade-up" delay={i * 80}>
                <Link to={`/article/${article.slug}`} className="article-card">
                  <div className="article-card-image-wrapper">
                    <img src={article.image} alt={article.title} className="article-card-image" />
                    <span className="article-card-category">{article.category}</span>
                  </div>
                  <div className="article-card-body">
                    <h3 className="article-card-title">{article.title}</h3>
                    <p className="article-card-summary">{article.summary}</p>
                    <div className="article-card-meta">
                      <div className="article-card-tags">
                        {article.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="article-tag">{tag}</span>
                        ))}
                      </div>
                      <span className="article-read-time">{article.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/knowledge-base" className="btn btn-primary">
              View All Articles <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">Testimonials</div>
              <h2 className="section-title">What Our <span className="gradient-text">Readers Say</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Thousands of engineers, researchers, and creators use PromptWiki to level up
                their AI skills. Here's what some of them have to say.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 48 }}>
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div style={{
                  padding: 32, background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', gap: 20,
                }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, fontStyle: 'italic', flex: 1 }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src={t.avatar} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                      <div style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <div className="section-label">Recently Added</div>
              <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Fresh content covering the newest techniques, tools, and research in prompt engineering.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 40 }}>
            {latestArticles.map((article, i) => (
              <AnimatedSection key={article._id} animation="fade-up" delay={i * 80}>
                <Link to={`/article/${article.slug}`} style={{
                  display: 'flex', gap: 16, padding: 20,
                  background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease',
                  alignItems: 'center',
                }}>
                  <img src={article.image} alt={article.title} style={{ width: 72, height: 72, borderRadius: 'var(--radius-sm)', objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, lineHeight: 1.4 }}>{article.title}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      <span>{article.category}</span>
                      <span>{article.readTime} min</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Checklist */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <AnimatedSection animation="slide-right">
              <div className="section-label">Quick Start</div>
              <h2 className="section-title">New to Prompt Engineering?</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                Follow this checklist to go from zero to confident prompt engineer. Each step
                links to relevant articles in our knowledge base.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { text: 'Understand what prompt engineering is', link: '/article/what-is-prompt-engineering' },
                  { text: 'Learn zero-shot and few-shot techniques', link: '/article/zero-shot-vs-few-shot-prompting' },
                  { text: 'Master chain-of-thought reasoning', link: '/article/chain-of-thought-prompting' },
                  { text: 'Try role prompting for better outputs', link: '/article/role-prompting-personas' },
                  { text: 'Explore system prompts for production', link: '/article/system-prompts-guide' },
                  { text: 'Learn about temperature and parameters', link: '/article/temperature-and-top-p' },
                ].map((item, i) => (
                  <Link key={i} to={item.link} style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                    background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontWeight: 500,
                    transition: 'all 0.2s ease', color: 'var(--text-primary)',
                  }}>
                    <FiCheckCircle style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    {item.text}
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=500&fit=crop"
                  alt="Learning prompt engineering"
                  style={{ width: '100%', height: 500, objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
        <div className="container">
          <AnimatedSection animation="scale-in" className="cta-content">
            <h2>Ready to Master Prompt Engineering?</h2>
            <p>
              Join thousands of developers and researchers who use PromptWiki to stay ahead
              in the rapidly evolving world of AI. Start exploring our free knowledge base today.
            </p>
            <Link to="/knowledge-base" className="btn cta-btn">
              Get Started Free <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
