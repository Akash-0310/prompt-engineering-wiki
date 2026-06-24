import React from 'react';
import LegalPage from '../components/LegalPage';

const Terms = () => (
  <LegalPage
    label="Legal"
    title="Terms of"
    highlight="Service"
    updated="June 1, 2026"
    intro="These terms govern your use of PromptWiki. By accessing our knowledge base, you agree to the terms outlined below."
    sections={[
      {
        heading: 'Acceptance of Terms',
        body: [
          'By accessing or using PromptWiki, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the site.',
        ],
      },
      {
        heading: 'Use of Content',
        body: [
          'All articles, guides, and resources on PromptWiki are provided for educational purposes. You may read, share, and reference our content for personal and professional learning.',
        ],
        list: [
          'You may not republish our content as your own or for commercial resale without written permission.',
          'Attribution to PromptWiki is appreciated when referencing our material.',
          'We make no guarantee that techniques described will produce specific results with any AI model.',
        ],
      },
      {
        heading: 'User Contributions',
        body: [
          'If you submit content, suggestions, or feedback, you grant us a non-exclusive right to use and display that material. You are responsible for ensuring your contributions do not infringe on the rights of others.',
        ],
      },
      {
        heading: 'Disclaimer',
        body: [
          'PromptWiki is provided "as is" without warranties of any kind. Prompt engineering techniques evolve rapidly, and we cannot guarantee that all content remains current or accurate at all times.',
        ],
      },
      {
        heading: 'Changes to These Terms',
        body: [
          'We may update these terms from time to time. Continued use of PromptWiki after changes are posted constitutes acceptance of the revised terms.',
        ],
      },
    ]}
  />
);

export default Terms;
