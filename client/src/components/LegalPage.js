import React from 'react';
import { AnimatedSection } from './ScrollAnimation';

const LegalPage = ({ label, title, highlight, intro, updated, sections }) => {
  return (
    <>
      <div className="page-header">
        <div className="page-header-bg">
          <div className="orb" style={{ width: 400, height: 400, background: 'var(--primary)', top: -150, right: -100 }}></div>
          <div className="orb" style={{ width: 300, height: 300, background: 'var(--accent)', bottom: -100, left: -50 }}></div>
        </div>
        <div className="container page-header-content">
          <AnimatedSection animation="fade-up">
            <div className="section-label">{label}</div>
            <h1 className="section-title">{title} <span className="gradient-text">{highlight}</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{intro}</p>
            {updated && (
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginTop: 16 }}>
                Last updated: {updated}
              </p>
            )}
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80, maxWidth: 820 }}>
        {sections.map((section, i) => (
          <AnimatedSection key={i} animation="fade-up" delay={i * 30}>
            <div className="legal-section">
              <h2>{section.heading}</h2>
              {section.body.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
              {section.list && (
                <ul className="legal-list">
                  {section.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
};

export default LegalPage;
