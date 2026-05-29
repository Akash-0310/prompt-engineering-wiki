import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiBookOpen, FiCode, FiShield, FiZap } from 'react-icons/fi';
import { faqs } from '../data/articles';
import { AnimatedSection } from '../components/ScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const quickLinks = [
    { icon: <FiBookOpen />, title: 'Getting Started Guide', desc: 'New here? Start with our beginner-friendly introduction.', link: '/article/what-is-prompt-engineering' },
    { icon: <FiCode />, title: 'Code Generation Tips', desc: 'Learn to write prompts that generate production-ready code.', link: '/article/prompts-for-code-generation' },
    { icon: <FiShield />, title: 'Security Best Practices', desc: 'Protect your AI apps from prompt injection attacks.', link: '/article/prompt-injection-security' },
    { icon: <FiZap />, title: 'Advanced Techniques', desc: 'Chain-of-thought, RAG, agents, and more.', link: '/knowledge-base?category=Advanced' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg">
          <div className="orb" style={{ width: 400, height: 400, background: 'var(--primary)', top: -150, right: -100 }}></div>
          <div className="orb" style={{ width: 300, height: 300, background: 'var(--accent)', bottom: -100, left: -50 }}></div>
        </div>
        <div className="container page-header-content">
          <AnimatedSection animation="fade-up">
            <div className="section-label">FAQ</div>
            <h1 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to know about prompt engineering, our knowledge base,
              and how to get started on your AI communication journey.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        {/* Quick Links */}
        <AnimatedSection animation="fade-up">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 48 }}>
            {quickLinks.map((item, i) => (
              <Link key={i} to={item.link} style={{
                display: 'flex', gap: 14, padding: 20,
                background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease',
                alignItems: 'flex-start',
              }}>
                <div className="feature-icon" style={{ width: 40, height: 40, fontSize: '1rem', marginBottom: 0, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ List */}
        <AnimatedSection animation="fade-up">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>
            {faqs.length} Questions Answered
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 32, fontSize: '0.95rem' }}>
            Click any question to expand the answer
          </p>
        </AnimatedSection>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 40}>
              <div className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <FiPlus className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" style={{ textAlign: 'center', marginTop: 60 }}>
          <div style={{
            padding: 48, background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', maxWidth: 600, margin: '0 auto',
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>Still have questions?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: '0.95rem', lineHeight: 1.7 }}>
              Can't find the answer you're looking for? Reach out to our team and we'll get back to you within 24 hours. You can also join our Discord community for real-time help.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <FiArrowRight />
              </Link>
              <Link to="/knowledge-base" className="btn btn-secondary">
                Browse Articles
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default FAQ;
