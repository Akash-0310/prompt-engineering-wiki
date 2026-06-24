import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsLightningCharge, BsTwitterX, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>
            <BsLightningCharge style={{ color: 'var(--primary)' }} />
            PromptWiki
          </h3>
          <p>
            The ultimate knowledge base for prompt engineering. Learn techniques,
            best practices, and advanced strategies to master AI communication.
          </p>

          <ul className="footer-contact">
            <li><FiMail /> <a href="mailto:hello@promptwiki.com">hello@promptwiki.com</a></li>
            <li><FiMapPin /> San Francisco, CA · Remote-first</li>
          </ul>

          <div className="footer-social">
            <a href="#twitter" aria-label="Twitter"><BsTwitterX /></a>
            <a href="#github" aria-label="GitHub"><BsGithub /></a>
            <a href="#linkedin" aria-label="LinkedIn"><BsLinkedin /></a>
            <a href="#youtube" aria-label="YouTube"><BsYoutube /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/knowledge-base">Knowledge Base</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/knowledge-base?category=Getting Started">Getting Started</Link></li>
            <li><Link to="/knowledge-base?category=Techniques">Techniques</Link></li>
            <li><Link to="/knowledge-base?category=Advanced">Advanced</Link></li>
            <li><Link to="/knowledge-base?category=Security">Security</Link></li>
            <li><Link to="/knowledge-base?category=Use Cases">Use Cases</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">Help Center</Link></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="footer-newsletter-text">
          <h4>Stay in the loop</h4>
          <p>Get new prompt engineering guides, techniques, and updates delivered to your inbox. No spam.</p>
        </div>
        {subscribed ? (
          <p className="footer-subscribe-success">Thanks for subscribing! Check your inbox to confirm.</p>
        ) : (
          <form className="footer-subscribe" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe <FiSend /></button>
          </form>
        )}
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PromptWiki. All rights reserved. Built with passion for the AI community.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#cookies">Cookies</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
