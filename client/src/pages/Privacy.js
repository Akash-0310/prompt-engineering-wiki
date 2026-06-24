import React from 'react';
import LegalPage from '../components/LegalPage';

const Privacy = () => (
  <LegalPage
    label="Legal"
    title="Privacy"
    highlight="Policy"
    updated="June 1, 2026"
    intro="Your privacy matters to us. This policy explains what information PromptWiki collects, how we use it, and the choices you have."
    sections={[
      {
        heading: 'Information We Collect',
        body: ['We aim to collect as little personal data as possible. The information we may collect includes:'],
        list: [
          'Contact details you provide voluntarily through our contact or newsletter forms (such as your name and email address).',
          'Anonymous usage analytics, such as pages visited and time spent, used to improve our content.',
          'Technical data like browser type and device information, collected automatically by our hosting provider.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        body: ['We use the information we collect to:'],
        list: [
          'Respond to your questions and support requests.',
          'Send newsletters and updates you have opted into (you can unsubscribe at any time).',
          'Understand how our knowledge base is used so we can improve it.',
        ],
      },
      {
        heading: 'Data Sharing',
        body: [
          'We do not sell your personal information. We only share data with trusted service providers (such as email and analytics tools) that help us operate PromptWiki, and only to the extent necessary.',
        ],
      },
      {
        heading: 'Your Rights',
        body: [
          'You can request access to, correction of, or deletion of your personal data at any time. To exercise these rights, email us at hello@promptwiki.com and we will respond within 30 days.',
        ],
      },
      {
        heading: 'Contact Us',
        body: ['If you have any questions about this Privacy Policy, please reach out at hello@promptwiki.com.'],
      },
    ]}
  />
);

export default Privacy;
