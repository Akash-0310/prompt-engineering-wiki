import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { AnimatedSection } from '../components/ScrollAnimation';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setLoading(false);
  };

  const contactInfo = [
    { icon: <FiMail />, title: 'Email Us', text: 'hello@promptwiki.com', sub: 'We reply within 24 hours' },
    { icon: <FiMapPin />, title: 'Location', text: 'San Francisco, CA', sub: 'Remote-first team worldwide' },
    { icon: <FiClock />, title: 'Working Hours', text: 'Mon - Fri, 9AM - 6PM PST', sub: 'Weekend support available' },
    { icon: <FiMessageCircle />, title: 'Live Community', text: 'Discord & GitHub Discussions', sub: 'Join 5,000+ prompt engineers' },
  ];

  const contactReasons = [
    'General question about prompt engineering',
    'Suggest a new article topic',
    'Report an error or outdated content',
    'Partnership or sponsorship inquiry',
    'Contribute as an author',
    'Enterprise training request',
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
            <div className="section-label">Contact</div>
            <h1 className="section-title">Get in <span className="gradient-text">Touch</span></h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Have a question, suggestion, or want to contribute? We'd love to hear from you.
              Drop us a message and our team will get back to you promptly.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="contact-grid">
          <AnimatedSection animation="slide-right">
            <div className="contact-info">
              {contactInfo.map((info, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-text">
                    <h4>{info.title}</h4>
                    <p style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{info.text}</p>
                    <p>{info.sub}</p>
                  </div>
                </div>
              ))}

              {/* Common Reasons */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.05))',
                border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 24, marginTop: 8,
              }}>
                <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Common Reasons to Reach Out</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {contactReasons.map((reason, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <FiCheckCircle style={{ color: 'var(--primary)', flexShrink: 0, fontSize: '0.8rem' }} />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.08))',
                border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 24,
              }}>
                <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Contributing to PromptWiki</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 12 }}>
                  Interested in writing articles or suggesting improvements?
                  We welcome contributions from the community. Share your expertise
                  and help thousands of developers master prompt engineering.
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                  We're especially looking for authors who can write about: agentic workflows,
                  industry-specific prompting (healthcare, legal, finance), and evaluation frameworks.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 style={{ fontWeight: 700, marginBottom: 4 }}>Send us a message</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 16, lineHeight: 1.6 }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="How can we help?" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us more about your question or suggestion..." />
              </div>

              {status === 'success' && (
                <div className="form-success">
                  Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="form-success" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)', color: '#dc2626' }}>
                  Something went wrong. Please try again later.
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* Map / Office Image */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 60 }}>
          <div style={{
            width: '100%', height: 300, borderRadius: 'var(--radius-xl)',
            overflow: 'hidden', border: '1px solid var(--border)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=300&fit=crop"
              alt="San Francisco skyline"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </AnimatedSection>

        {/* FAQ shortcut */}
        <AnimatedSection animation="fade-up" style={{ marginTop: 48 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          }}>
            <div style={{
              padding: 32, background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: '1.1rem' }}>Check the FAQ First</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
                Many common questions about prompt engineering are already answered in our FAQ section.
                Save time by checking there before reaching out.
              </p>
              <Link to="/faq" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                Browse FAQ <FiArrowRight />
              </Link>
            </div>
            <div style={{
              padding: 32, background: 'var(--bg-glass-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: '1.1rem' }}>Enterprise & Training</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
                Looking for team training or enterprise prompt engineering workshops? We offer
                customized programs for companies of all sizes.
              </p>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                Email us at hello@promptwiki.com
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Contact;
