export const hero = {
  heading: 'UCD with AI Teammates.',
  body:
    'User-centred design with specialist AI teammates—for research synthesis, journey mapping, prototyping, and code. They draft; I set direction, check against evidence, and sign off. The same discipline shapes agentic products people can trust.',
  primaryCta: 'Connect on LinkedIn',
  secondaryCta: 'See how the team works',
  secondaryHref: '#team',
  run: {
    title: 'A run, start to finish.',
    caption: 'Illustrative run. AI teammates draft; every output passes a human gate.',
    steps: [
      { step: 'Brief', owner: 'Vijay', human: true, status: 'Done' as const },
      {
        step: 'Research synthesis',
        owner: 'Research Synthesiser',
        human: false,
        status: 'Done' as const,
      },
      { step: 'Journey map', owner: 'Journey Mapper', human: false, status: 'Done' as const },
      {
        step: 'Accessibility check',
        owner: 'Accessibility Auditor',
        human: false,
        status: 'Done' as const,
      },
      { step: 'Prototype build', owner: 'Cursor agent', human: false, status: 'Running' as const },
      { step: 'Review and sign-off', owner: 'Vijay', human: true, status: 'Next' as const },
    ],
  },
} as const;
