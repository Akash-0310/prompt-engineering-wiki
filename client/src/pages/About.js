import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer } from '../components/ScrollAnimation';

const About = () => {
  const values = [
    { icon: '🎯', title: 'Accuracy First', desc: 'Every article is researched, tested, and reviewed. We prioritize correctness over quantity, ensuring you can trust our content.' },
    { icon: '🌍', title: 'Open Access', desc: 'Knowledge should be free. All our content is openly available with no paywalls, no gatekeeping, and no premium tiers.' },
    { icon: '🔬', title: 'Research-Backed', desc: 'Our articles reference peer-reviewed papers, official documentation, and real-world case studies from production systems.' },
    { icon: '🤝', title: 'Community Driven', desc: 'Built by the community, for the community. We welcome contributions, corrections, and suggestions from practitioners worldwide.' },
    { icon: '🚀', title: 'Always Current', desc: 'AI evolves fast. We continuously update content to reflect new model releases, techniques, and research breakthroughs.' },
    { icon: '💡', title: 'Practical Focus', desc: 'No theoretical fluff. Every technique includes real examples, code snippets, and actionable advice you can apply today.' },
  ];

  const team = [
    { name: 'Sarah Chen', role: 'Founder & Lead Author', bio: 'Former ML engineer at Google. 10+ years in NLP and AI research.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { name: 'Marcus Rivera', role: 'AI Research Lead', bio: 'PhD in Computational Linguistics. Published 20+ papers on language models.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Aisha Patel', role: 'Content Strategist', bio: 'Led content at 3 AI startups. Expert in making complex topics accessible.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
    { name: 'James Kim', role: 'Developer Advocate', bio: 'Full-stack developer and open-source contributor. Builds AI-powered tools.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Priya Sharma', role: 'Security Researcher', bio: 'Specializes in AI safety, prompt injection defense, and adversarial testing.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
    { name: 'Alex Thompson', role: 'Community Manager', bio: 'Manages our Discord and GitHub. Connects contributors with readers.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  ];

  const milestones = [
    { date: 'Jan 2024', title: 'PromptWiki Founded', desc: 'Started as a personal blog with 5 articles on basic prompting techniques.' },
    { date: 'Apr 2024', title: '10K Monthly Readers', desc: 'Crossed our first major milestone. Added Advanced and Security categories.' },
    { date: 'Jul 2024', title: 'Community Launch', desc: 'Launched Discord server and GitHub Discussions. First external contributors joined.' },
    { date: 'Oct 2024', title: 'AI Agent Coverage', desc: 'Published our comprehensive guide to building AI agents — our most shared article.' },
    { date: 'Jan 2025', title: '50K Monthly Readers', desc: 'Became a go-to resource for prompt engineering. Featured in AI newsletters.' },
    { date: 'Apr 2025', title: 'Major Expansion', desc: 'Added 16+ articles, evaluation guides, and content creation resources.' },
  ];

  return (
    <div className="about-hero">
      <div className="about-hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="container about-content">
        <AnimatedSection animation="fade-up">
          <div className="section-label">About Us</div>
          <h1 className="section-title">Empowering the World to <span className="gradient-text">Communicate with AI</span></h1>
          <p className="section-subtitle">
            PromptWiki was born from a simple belief: the ability to communicate effectively
            with AI should not be a privilege reserved for a few — it should be a skill accessible to everyone.
          </p>
        </AnimatedSection>

        {/* Our Story */}
        <div className="about-grid">
          <AnimatedSection animation="slide-right">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team collaboration" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div className="about-text">
              <h3>Our Story</h3>
              <p>
                In early 2024, a group of AI researchers and engineers noticed a critical gap: while AI models were
                becoming incredibly powerful, the knowledge of how to use them effectively was scattered across
                research papers, Twitter threads, and gated courses.
              </p>
              <p>
                We set out to create a single, comprehensive, freely accessible resource that would serve as the
                definitive guide to prompt engineering. What started as a simple collection of tips has grown into
                a full-fledged knowledge base used by thousands of developers, researchers, and businesses worldwide.
              </p>
              <p>
                Today, PromptWiki covers everything from basic prompting techniques to advanced agent architectures,
                with new content published weekly based on the latest research and community feedback. Our team of
                six works across three continents, united by a shared passion for making AI accessible.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label">Our Mission</div>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Democratizing AI <span className="gradient-text">Knowledge</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                We believe that the ability to effectively communicate with AI will be as fundamental as
                computer literacy. Our mission is to ensure that knowledge is not locked behind expensive courses
                or proprietary tools.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                Every article we publish is carefully crafted to be practical, accurate, and immediately applicable.
                We don't just explain concepts — we give you the tools, templates, and frameworks to implement them.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Whether you're a student exploring AI for the first time, a developer building production systems,
                or a business leader evaluating AI strategy — PromptWiki has content designed for your level and goals.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Mission" style={{ width: '100%', height: 350, objectFit: 'cover' }} />
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 80 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              These core values guide every article we write, every resource we curate,
              and every decision we make as a team.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="about-values">
          {values.map((v, i) => (
            <div key={i} className="about-value-card">
              <div className="about-value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 80, textAlign: 'center' }}>
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">Milestones & <span className="gradient-text">Growth</span></h2>
        </AnimatedSection>

        <div style={{ maxWidth: 700, margin: '40px auto 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'var(--border)' }}></div>
          {milestones.map((m, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
              <div style={{ display: 'flex', gap: 24, marginBottom: 32, position: 'relative' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.7rem', zIndex: 1,
                  border: '3px solid var(--bg-primary)',
                }}>{m.date.slice(0, 3)}</div>
                <div style={{
                  flex: 1, padding: 20, background: 'var(--bg-glass-card)',
                  border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{m.date}</div>
                  <h4 style={{ fontWeight: 700, marginBottom: 4 }}>{m.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Team */}
        <div className="team-section">
          <AnimatedSection animation="fade-up" style={{ textAlign: 'center' }}>
            <div className="section-label">Our Team</div>
            <h2 className="section-title">Meet the People Behind <span className="gradient-text">PromptWiki</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A passionate team of AI practitioners, educators, and developers committed to making
              prompt engineering knowledge accessible to all.
            </p>
          </AnimatedSection>

          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginTop: 40 }}>
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <img src={member.img} alt={member.name} className="team-card-avatar" />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', marginTop: 8, lineHeight: 1.5 }}>{member.bio}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>

        {/* Stats */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 80 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center',
            padding: 40, background: 'var(--bg-glass-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)',
          }}>
            {[
              { value: '16+', label: 'In-Depth Articles' },
              { value: '7', label: 'Topic Categories' },
              { value: '50K+', label: 'Monthly Readers' },
              { value: '20+', label: 'Contributors' },
              { value: '6', label: 'Team Members' },
              { value: '3', label: 'Continents' },
            ].map((stat, i) => (
              <div key={i} style={{ padding: 16 }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 500, marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <section className="cta-section" style={{ borderRadius: 'var(--radius-xl)', marginTop: 60 }}>
          <div className="cta-bg">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
          </div>
          <AnimatedSection animation="scale-in" className="cta-content">
            <h2>Want to Contribute?</h2>
            <p>
              We're always looking for expert contributors to help expand our knowledge base.
              Share your expertise and help thousands of developers level up their prompt engineering skills.
            </p>
            <Link to="/contact" className="btn cta-btn">
              Get in Touch <FiArrowRight />
            </Link>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default About;
