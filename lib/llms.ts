import { agentic } from '@/content/agentic';
import { contact, shift, site } from '@/content/site';
import { engineering } from '@/content/engineering';
import { foundation } from '@/content/foundation';
import { hero } from '@/content/hero';
import { organisations } from '@/content/organisations';
import { proof } from '@/content/proof';
import { team } from '@/content/team';
import { tools } from '@/content/tools';

function section(title: string, body: string) {
  return `## ${title}\n\n${body.trim()}\n`;
}

export function buildLlmsTxt() {
  const heroRunBody = [
    ...hero.run.steps.map(
      (row, index) =>
        `${index + 1}. **${row.step}** — ${row.owner} — ${row.status}`,
    ),
    '',
    hero.run.caption,
  ].join('\n');

  const shiftBody = [
    shift.heading,
    '',
    ...shift.cards.map((c) => `### ${c.title}\n${c.body}`),
    '',
    shift.closing,
  ].join('\n');

  const teamBody = [
    team.headingLines.join(' '),
    '',
    team.intro,
    '',
    ...team.roster.map(
      (m) =>
        `- **${m.name}** — Drafts: ${m.drafts} I check: ${m.check}`,
    ),
    '',
    team.footnote,
  ].join('\n');

  const agenticBody = [
    agentic.heading,
    '',
    ...agentic.principles.map(
      (p, i) => `${String(i + 1).padStart(2, '0')}. **${p.title}** — ${p.body}`,
    ),
  ].join('\n');

  const proofBody = [
    proof.heading,
    '',
    ...proof.cards.map((c) => `- **${c.title}** — ${c.body} (${c.tag})`),
    '',
    `### ${proof.cursorBlock.heading}`,
    proof.cursorBlock.body,
    `${proof.cursorBlock.stats.agentsRun} ${proof.cursorBlock.stats.agentsRunLabel}`,
    `${proof.cursorBlock.stats.currentStreak} ${proof.cursorBlock.stats.currentStreakLabel}`,
    `${proof.cursorBlock.stats.tokens} ${proof.cursorBlock.stats.tokensLabel}`,
    `${proof.cursorBlock.stats.longestRun} ${proof.cursorBlock.stats.longestRunLabel}`,
    proof.cursorBlock.stats.sourceNote,
  ].join('\n');

  const engineeringBody = [
    engineering.heading,
    '',
    engineering.intro,
    '',
    ...engineering.items.map((i) => `- **${i.title}** — ${i.body}`),
  ].join('\n');

  const foundationBody = [
    foundation.heading,
    '',
    foundation.intro,
    '',
    ...foundation.steps.map(
      (s, i) => `${i + 1}. **${s.title}** — ${s.body}`,
    ),
  ].join('\n');

  const orgBody = [
    organisations.heading,
    '',
    ...organisations.groups.map(
      (g) => `**${g.label}:** ${g.names.join(' · ')}`,
    ),
    '',
    organisations.note,
  ].join('\n');

  const toolsBody = [
    tools.heading,
    '',
    ...tools.groups.map(
      (g) => `**${g.label}:** ${g.items.join(' · ')}`,
    ),
  ].join('\n');

  const contactBody = [
    contact.heading,
    '',
    contact.body,
    `- LinkedIn: ${site.links.linkedIn}`,
    `- Cursor: ${site.links.cursor}`,
  ].join('\n');

  const related = [
    `**Hub:** ${site.links.vijay}`,
    `- ${site.links.uxengineer}`,
    `- ${site.links.interaction}`,
  ].join('\n');

  return [
    `# ${site.name}`,
    '',
    `> ${hero.heading}`,
    '',
    hero.body,
    '',
    section(hero.run.title.replace(/\.$/, ''), heroRunBody),
    section('The shift', shiftBody),
    section('The team', teamBody),
    section('Agentic UX', agenticBody),
    section('Proof', proofBody),
    section('Engineering', engineeringBody),
    section('Foundation', foundationBody),
    section('Track record', orgBody),
    section('Tools', toolsBody),
    section('Contact', contactBody),
    section('Related sites', related),
    '',
    `Full page: ${site.url}/llms-full.txt`,
  ].join('\n');
}

export function buildLlmsFullTxt() {
  return buildLlmsTxt();
}
