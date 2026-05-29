import React from 'react';
import { Link } from 'react-router-dom';
import { BsLightningCharge, BsTwitterX, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
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

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PromptWiki. All rights reserved. Built with passion for the AI community.</p>
      </div>
    </footer>
  );
};

export default Footer;
