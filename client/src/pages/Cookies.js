import React from 'react';
import LegalPage from '../components/LegalPage';

const Cookies = () => (
  <LegalPage
    label="Legal"
    title="Cookie"
    highlight="Policy"
    updated="June 1, 2026"
    intro="This policy explains how PromptWiki uses cookies and similar technologies when you visit our site."
    sections={[
      {
        heading: 'What Are Cookies?',
        body: [
          'Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.',
        ],
      },
      {
        heading: 'How We Use Cookies',
        body: ['PromptWiki uses a minimal set of cookies for the following purposes:'],
        list: [
          'Essential cookies that remember your theme preference (light or dark mode).',
          'Analytics cookies that help us measure which articles are most helpful.',
          'We do not use cookies for advertising or cross-site tracking.',
        ],
      },
      {
        heading: 'Managing Cookies',
        body: [
          'You can control and delete cookies through your browser settings. Disabling cookies may affect some features, such as remembering your preferred theme, but the core knowledge base will continue to work.',
        ],
      },
      {
        heading: 'Questions',
        body: ['For any questions about our use of cookies, contact us at hello@promptwiki.com.'],
      },
    ]}
  />
);

export default Cookies;
