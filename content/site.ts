export const CONTENT_UPDATED = '2026-10-27';

export const site = {
  name: 'ai-ux.io',
  url: 'https://ai-ux.io',
  locale: 'en-GB',
  person: {
    name: 'Vijay Kandhalu',
    jobTitle: 'Agentic AI UX Lead',
    url: 'https://ai-ux.io/',
  },
  links: {
    linkedIn: 'https://www.linkedin.com/in/vijaykandhalu/',
    cursor: 'https://cursor.com/@ucdops',
    vijay: 'https://vijay.ai/',
    uxengineer: 'https://www.uxengineer.ai/',
    interaction: 'https://interaction.dev/',
    ucdBots: 'https://ucdbots.com',
    ucdAgent: 'https://ucdagent.com',
  },
  footer: {
    copyright: '© 2026 Vijay Kandhalu',
  },
  metadata: {
    title: 'Vijay Kandhalu: Agentic AI UX Lead | ai-ux.io',
    description:
      'UX lead who orchestrates AI teammates, and designs and builds agentic AI products people can trust. User-centred, accessible, built in code.',
    ogTitle: 'UCD with AI Teammates.',
  },
  knowsAbout: [
    'Agentic AI UX',
    'AI teammates',
    'Human-in-the-loop design',
    'Approval gates',
    'User-centred design',
    'Interaction design',
    'Service design',
    'User research',
    'Prototyping',
    'GOV.UK Prototype Kit',
    'WCAG 2.2 AA',
    'Next.js',
    'AI gateway',
    'Cursor',
    'Claude',
  ],
} as const;

export const contact = {
  heading: 'Hiring for agentic AI UX?',
  body: 'My experience, roles and recommendations are on LinkedIn.',
  primaryCta: 'Connect on LinkedIn',
} as const;

export const shift = {
  heading: 'Agentic AI changes UX twice.',
  cards: [
    {
      title: 'Designing for agents',
      body: 'Users now hand tasks to software that acts on their behalf. They need to see what it\'s doing, check its work and stay in control.',
    },
    {
      title: 'Designing with agents',
      body: 'AI teammates can draft research themes, flows and working code in minutes. Someone has to direct them, check the output and own the result.',
    },
  ],
  closing:
    'The role needs both: a designer who builds agentic experiences, and a lead who works with AI teammates every day.',
} as const;
