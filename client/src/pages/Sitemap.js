import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ScrollAnimation';

const Sitemap = () => {
  const groups = [
    {
      title: 'Main Pages',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Knowledge Base', to: '/knowledge-base' },
        { label: 'About Us', to: '/about' },
        { label: 'Resources', to: '/resources' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Contact Us', to: '/contact' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'Getting Started', to: '/knowledge-base?category=Getting Started' },
        { label: 'Techniques', to: '/knowledge-base?category=Techniques' },
        { label: 'Advanced', to: '/knowledge-base?category=Advanced' },
        { label: 'Security', to: '/knowledge-base?category=Security' },
        { label: 'Use Cases', to: '/knowledge-base?category=Use Cases' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Service', to: '/terms' },
        { label: 'Cookie Policy', to: '/cookies' },
      ],
    },
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
            <div className="section-label">Sitemap</div>
            <h1 className="section-title">Explore <span className="gradient-text">PromptWiki</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A complete overview of every page and section on PromptWiki. Find exactly what you're looking for.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="sitemap-grid">
          {groups.map((group, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 50}>
              <div className="legal-section">
                <h2>{group.title}</h2>
                <ul className="sitemap-list">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sitemap;
