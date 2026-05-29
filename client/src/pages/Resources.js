import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiCode, FiUsers, FiSearch as FiResearch, FiTool, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { resources } from '../data/articles';
import { AnimatedSection, StaggerContainer } from '../components/ScrollAnimation';

const iconMap = {
  book: <FiBook />,
  code: <FiCode />,
  graduation: <HiOutlineAcademicCap />,
  users: <FiUsers />,
  research: <FiResearch />,
  tool: <FiTool />,
};

const resourceCategories = ['All', 'Documentation', 'Frameworks', 'Courses', 'Community', 'Research', 'Tools'];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? resources : resources.filter(r => r.category === activeFilter);

  const learningPaths = [
    {
      title: 'Beginner Path',
      duration: '2-3 weeks',
      desc: 'Start here if you are new to prompt engineering. Build a solid foundation with core concepts.',
      steps: [
        'What is Prompt Engineering?',
        'Zero-Shot vs Few-Shot Prompting',
        'Role Prompting Basics',
        'Chain-of-Thought Reasoning',
        'Practice with real examples',
      ],
      color: '#22c55e',
    },
    {
      title: 'Intermediate Path',
      duration: '3-4 weeks',
      desc: 'Ready to level up? Dive into production-ready techniques and real-world applications.',
      steps: [
        'System Prompts for Apps',
        'Temperature & Top-P Tuning',
        'RAG Prompting Techniques',
        'Code Generation Patterns',
        'Prompt Evaluation & Testing',
      ],
      color: '#f59e0b',
    },
    {
      title: 'Advanced Path',
      duration: '4-6 weeks',
      desc: 'For experienced practitioners building production AI systems and autonomous agents.',
      steps: [
        'Building AI Agents',
        'Multi-modal Prompting',
        'Security & Prompt Injection',
        'Self-Consistency & Ensembles',
        'Enterprise Deployment',
      ],
      color: '#ef4444',
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg">
          <div className="orb" style={{ width: 400, height: 400, background: 'var(--primary)', top: -150, left: -100 }}></div>
          <div className="orb" style={{ width: 300, height: 300, background: 'var(--accent)', bottom: -100, right: -50 }}></div>
        </div>
        <div className="container page-header-content">
          <AnimatedSection animation="fade-up">
            <div className="section-label">Resources</div>
            <h1 className="section-title">Curated <span className="gradient-text">Learning Resources</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              The best guides, courses, tools, and communities for mastering prompt engineering.
              Handpicked and reviewed by our team of AI practitioners.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {/* Learning Paths */}
        <AnimatedSection animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label">Learning Paths</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Choose Your <span className="gradient-text">Path</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Structured learning paths based on your experience level. Follow the steps in order for the best results.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 60 }}>
          {learningPaths.map((path, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <div style={{
                padding: 32, background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', height: '100%', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  display: 'inline-flex', padding: '4px 12px', background: `${path.color}15`,
                  borderRadius: 'var(--radius-full)', fontSize: '0.7rem', fontWeight: 600,
                  color: path.color, marginBottom: 16, alignSelf: 'flex-start',
                }}>{path.duration}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{path.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 20 }}>{path.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {path.steps.map((step, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem' }}>
                      <FiCheckCircle style={{ color: path.color, flexShrink: 0, fontSize: '0.9rem' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Resource Filters */}
        <AnimatedSection animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="section-label">External Resources</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Recommended <span className="gradient-text">Tools & Links</span></h2>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32, justifyContent: 'center' }}>
            {resourceCategories.map(cat => (
              <button
                key={cat}
                className={`sidebar-category ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                style={{ borderRadius: 'var(--radius-full)', padding: '8px 18px', fontSize: '0.85rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <StaggerContainer className="resources-grid">
          {filtered.map((resource, i) => (
            <div key={i} className="resource-card">
              <div className="resource-card-header">
                <div className="resource-card-icon">
                  {iconMap[resource.icon] || <FiBook />}
                </div>
                <span className="resource-card-badge">{resource.category}</span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-tertiary)' }}>
            <p>No resources found in this category.</p>
          </div>
        )}

        {/* Prompt Engineering Cheat Sheet */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 60 }}>
          <div style={{
            padding: 40, background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.05))',
            border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 16 }}>Quick Reference Cheat Sheet</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { technique: 'Zero-Shot', when: 'Simple, well-defined tasks' },
                    { technique: 'Few-Shot', when: 'Custom formats, domain-specific tasks' },
                    { technique: 'Chain-of-Thought', when: 'Math, logic, multi-step reasoning' },
                    { technique: 'Role Prompting', when: 'Expert-level, audience-specific output' },
                    { technique: 'System Prompts', when: 'Production apps, consistent behavior' },
                    { technique: 'RAG', when: 'Factual Q&A from your own data' },
                    { technique: 'Self-Consistency', when: 'High-stakes, critical decisions' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: '0.85rem', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{item.technique}</span>
                      <span style={{ color: 'var(--text-secondary)', textAlign: 'right' }}>{item.when}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 16 }}>Parameter Quick Guide</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { setting: 'Temperature 0', use: 'Factual, deterministic output' },
                    { setting: 'Temperature 0.3-0.5', use: 'Balanced, reliable responses' },
                    { setting: 'Temperature 0.7-1.0', use: 'Creative, varied output' },
                    { setting: 'Top-P 0.1-0.3', use: 'Code, data extraction' },
                    { setting: 'Top-P 0.5-0.8', use: 'Conversations, general tasks' },
                    { setting: 'Top-P 0.9-1.0', use: 'Brainstorming, creative writing' },
                    { setting: 'Max Tokens', use: 'Set based on expected output length' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: '0.85rem', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.setting}</span>
                      <span style={{ color: 'var(--text-secondary)', textAlign: 'right' }}>{item.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Suggest Resource CTA */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 48 }}>
          <div style={{
            background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', padding: '48px', textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>
              Know a Great Resource?
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Help us grow this collection! If you know of an excellent prompt engineering resource
              that should be listed here, we'd love to hear about it.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Suggest a Resource <FiArrowRight />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Resources;
