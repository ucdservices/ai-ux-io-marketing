export const team = {
  id: 'team',
  headingLines: [
    'One lead.',
    'Specialist AI teammates.',
    'A human at every gate.',
  ],
  intro:
    'Each teammate does one job well. I set the brief, check the output against evidence, and decide what moves forward.',
  roster: [
    {
      name: 'Research Synthesiser',
      drafts: 'Themes and patterns from interviews and usability sessions.',
      check: 'Every theme traces back to something a user said.',
    },
    {
      name: 'Journey Mapper',
      drafts: 'End-to-end journeys, task flows and interaction flows.',
      check: 'The steps before and after the service, and the edge cases.',
    },
    {
      name: 'Service Blueprint Writer',
      drafts: 'Front-stage and back-stage steps, systems and policy.',
      check: 'That it matches how the organisation actually works.',
    },
    {
      name: 'Heuristic Reviewer',
      drafts: 'Usability issues against established heuristics.',
      check: 'Which issues matter to users, and which are noise.',
    },
    {
      name: 'Accessibility Auditor',
      drafts: 'WCAG 2.2 AA checks on designs and prototypes.',
      check: 'Keyboard and screen reader passes, by hand.',
    },
    {
      name: 'Prototype builder',
      drafts:
        'Working prototypes and proof-of-concept code from an agreed spec, using Cursor agents.',
      check: 'The code against the design, the spec and the tests.',
    },
  ],
  gateSteps: [
    { label: 'Brief', human: true },
    { label: 'AI teammates draft', human: false },
    { label: 'I review against evidence', human: true },
    { label: 'Test with users', human: true },
    { label: 'Ship', human: false },
  ],
  footnote:
    'The teammates are my own UCD Bots and UCD Agent, working alongside Cursor and Claude.',
  footnoteLinks: {
    ucdBots: { label: 'UCD Bots', href: 'https://ucdbots.com' },
    ucdAgent: { label: 'UCD Agent', href: 'https://ucdagent.com' },
  },
} as const;
