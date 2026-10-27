'use client';

import { agentic } from '@/content/agentic';
import { contact, shift, site } from '@/content/site';
import { engineering } from '@/content/engineering';
import { foundation } from '@/content/foundation';
import { hero } from '@/content/hero';
import { organisations } from '@/content/organisations';
import { proof } from '@/content/proof';
import { team } from '@/content/team';
import { tools } from '@/content/tools';
import { badgeStatusForRun } from '@/lib/run-status';
import { ExternalLink } from '@/components/external-link';
import { LinkedInButton } from '@/components/linkedin-button';
import { BrandLogo } from '@/components/brand-logo';
import { SectionStack } from '@/components/section-stack';
import { ThemeToggleLazy } from '@/components/theme-toggle-lazy';

function HeroRunCard() {
  return (
    <nve-card className="run-card">
      <nve-card-content>
        <h2 id="run-heading" className="vc-h3 run-card__title">
          {hero.run.title}
        </h2>
        <ol className="run-list">
          {hero.run.steps.map((row) => (
            <li key={row.step} className="run-list__row">
              <span className="run-list__step">
                {row.human ? (
                  <span className="visually-hidden">Vijay, human lead: </span>
                ) : (
                  <span className="visually-hidden">AI teammate: </span>
                )}
                <OwnerMark human={row.human} owner={row.owner} />
                <span className="run-list__step-name">{row.step}</span>
              </span>
              <span className="run-list__owner">{row.owner}</span>
              <nve-badge status={badgeStatusForRun(row.status)}>{row.status}</nve-badge>
            </li>
          ))}
        </ol>
      </nve-card-content>
    </nve-card>
  );
}

function OwnerMark({ human }: { human: boolean; owner: string }) {
  if (human) {
    return (
      <span className="owner-mark owner-mark--human" aria-hidden="true">
        <span>V</span>
      </span>
    );
  }
  return (
    <span className="owner-mark owner-mark--agent" aria-hidden="true">
      <nve-icon name="sparkles" size="sm" />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner" nve-layout="row align:space-between align:vertical-center gap:md">
        <BrandLogo />
        <div className="site-header__actions" nve-layout="row gap:sm align:vertical-center">
          <ThemeToggleLazy />
          <LinkedInButton size="sm" />
        </div>
      </div>
    </header>
  );
}

export function SitePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="section section--hero" aria-labelledby="hero-heading">
          <div className="hero-aurora" aria-hidden="true" />
          <SectionStack className="section__inner hero">
            <div className="hero__copy">
              <h1 id="hero-heading" className="vc-display">
                {hero.heading}
              </h1>
              <p className="vc-lead">{hero.body}</p>
              <div className="hero__actions">
                <LinkedInButton label={hero.primaryCta} />
                <a href={hero.secondaryHref} className="btn btn-secondary">
                  {hero.secondaryCta}
                </a>
              </div>
            </div>
          </SectionStack>
        </section>

        <section className="section section--run" aria-labelledby="run-heading">
          <SectionStack className="section__inner run-section">
            <HeroRunCard />
          </SectionStack>
        </section>

        <section className="section" aria-labelledby="shift-heading">
          <SectionStack className="section__inner">
            <h2 id="shift-heading" className="vc-h2">
              {shift.heading}
            </h2>
            <div className="card-grid card-grid--two">
              {shift.cards.map((card) => (
                <nve-card key={card.title}>
                  <nve-card-content>
                    <div className="card-panel">
                      <h3 className="vc-h3">{card.title}</h3>
                      <p className="vc-body-block">{card.body}</p>
                    </div>
                  </nve-card-content>
                </nve-card>
              ))}
            </div>
            <p className="vc-body-block">{shift.closing}</p>
          </SectionStack>
        </section>

        <section id={team.id} className="section" aria-labelledby="team-heading">
          <SectionStack className="section__inner">
            <h2 id="team-heading" className="vc-h2">
              {team.heading}
            </h2>
            <p className="vc-body-block">{team.intro}</p>
            <ul className="card-grid card-grid--team">
              {team.roster.map((member) => (
                <li key={member.name}>
                  <nve-card>
                    <nve-card-content>
                      <div className="card-panel">
                        <h3 className="vc-h3">{member.name}</h3>
                        <dl className="teammate-card__checks">
                          <div>
                            <dt className="vc-label">Drafts</dt>
                            <dd>{member.drafts}</dd>
                          </div>
                          <div>
                            <dt className="vc-label">I check</dt>
                            <dd>{member.check}</dd>
                          </div>
                        </dl>
                      </div>
                    </nve-card-content>
                  </nve-card>
                </li>
              ))}
            </ul>
            <ol className="gate-strip" aria-label="Delivery gates">
              {team.gateSteps.map((step, index) => (
                <li key={step.label} className="gate-strip__step">
                  <span
                    className={`gate-chip${step.human ? ' gate-chip--human' : ''}`}
                  >
                    {step.human ? (
                      <span className="visually-hidden">Vijay, human lead: </span>
                    ) : null}
                    {step.human ? <OwnerMark human owner="Vijay" /> : null}
                    {step.label}
                  </span>
                  {index < team.gateSteps.length - 1 ? (
                    <span className="gate-strip__arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="vc-muted visually-hidden">
              The teammates are my own{' '}
              <ExternalLink href={team.footnoteLinks.ucdBots.href}>
                {team.footnoteLinks.ucdBots.label}
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href={team.footnoteLinks.ucdAgent.href}>
                {team.footnoteLinks.ucdAgent.label}
              </ExternalLink>
              , working alongside Cursor and Claude.
            </p>
          </SectionStack>
        </section>

        <section id={agentic.id} className="section" aria-labelledby="agentic-heading">
          <SectionStack className="section__inner">
            <h2 id="agentic-heading" className="vc-h2">
              {agentic.heading}
            </h2>
            <ol className="agentic-grid">
              {agentic.principles.map((item, index) => (
                <li key={item.title}>
                  <article className="agentic-card" aria-labelledby={`agentic-${index}-title`}>
                    <span className="agentic-card__watermark" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="agentic-card__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(agentic.principles.length).padStart(2, '0')}
                    </p>
                    <h3 id={`agentic-${index}-title`} className="agentic-card__title">
                      {item.title}
                    </h3>
                    <p className="agentic-card__body">{item.body}</p>
                  </article>
                </li>
              ))}
            </ol>
          </SectionStack>
        </section>

        <section id={proof.id} className="section" aria-labelledby="proof-heading">
          <SectionStack className="section__inner">
            <h2 id="proof-heading" className="vc-h2">
              {proof.heading}
            </h2>
            <ul className="card-grid card-grid--proof">
              {proof.cards.map((card) => (
                <li key={card.title}>
                  <nve-card>
                    <nve-card-content>
                      <div className="card-panel">
                        <h3 className="vc-h3">{card.title}</h3>
                        <p className="proof-card__body">{card.body}</p>
                        <p className="card-panel__tag">{card.tag}</p>
                      {card.title ===
                      'In-service agent for a government finance service' ? (
                        <>
                          {/* CONFIRM WITH VIJAY: name the client (UK Export Finance, GIFT)? */}
                        </>
                      ) : null}
                      {card.title ===
                      'AI briefing tools for front-line diplomatic work' ? (
                        <>
                          {/* CONFIRM WITH VIJAY: name the client (FCDO, Envoy)? */}
                        </>
                      ) : null}
                      {card.href ? (
                        <ExternalLink href={card.href} className="text-link">
                          {card.title === 'UCD Agent' ? 'ucdagent.com' : 'ucdbots.com'}
                        </ExternalLink>
                      ) : null}
                      </div>
                    </nve-card-content>
                  </nve-card>
                </li>
              ))}
            </ul>
            <nve-card className="cursor-block">
              <nve-card-content>
                <SectionStack tight>
                  <h3 id="cursor-record" className="vc-h3">
                    {proof.cursorBlock.heading}
                  </h3>
                  <p className="vc-body-block vc-body-block--wide">
                    {proof.cursorBlock.body}
                  </p>
                  <dl className="stat-row" aria-label="Cursor usage statistics">
                    <div>
                      <dt>{proof.cursorBlock.stats.agentsRun}</dt>
                      <dd>{proof.cursorBlock.stats.agentsRunLabel}</dd>
                    </div>
                    <div>
                      <dt>{proof.cursorBlock.stats.currentStreak}</dt>
                      <dd>{proof.cursorBlock.stats.currentStreakLabel}</dd>
                    </div>
                    <div>
                      <dt>{proof.cursorBlock.stats.tokens}</dt>
                      <dd>{proof.cursorBlock.stats.tokensLabel}</dd>
                    </div>
                    <div>
                      <dt>{proof.cursorBlock.stats.longestRun}</dt>
                      <dd>{proof.cursorBlock.stats.longestRunLabel}</dd>
                    </div>
                  </dl>
                  <nve-button interaction="emphasis" className="cursor-cta">
                    <a
                      href={proof.cursorBlock.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proof.cursorBlock.cta}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </nve-button>
                  <p className="vc-muted">{proof.cursorBlock.stats.sourceNote}</p>
                </SectionStack>
              </nve-card-content>
            </nve-card>
          </SectionStack>
        </section>

        <section className="section" aria-labelledby="engineering-heading">
          <SectionStack className="section__inner">
            <h2 id="engineering-heading" className="vc-h2">
              {engineering.heading}
            </h2>
            <p className="vc-body-block">{engineering.intro}</p>
            <ul className="card-grid card-grid--engineering">
              {engineering.items.map((item) => (
                <li key={item.title}>
                  <nve-card>
                    <nve-card-content>
                      <div className="card-panel">
                        <h3 className="vc-h3">{item.title}</h3>
                        <p className="proof-card__body">{item.body}</p>
                      </div>
                    </nve-card-content>
                  </nve-card>
                </li>
              ))}
            </ul>
          </SectionStack>
        </section>

        <section className="section" aria-labelledby="foundation-heading">
          <SectionStack className="section__inner">
            <h2 id="foundation-heading" className="vc-h2">
              {foundation.heading}
            </h2>
            <p className="vc-body-block">{foundation.intro}</p>
            <ol className="foundation-list">
              {foundation.steps.map((step, index) => (
                <li key={step.title} className="foundation-step">
                  <span className="foundation-list__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="foundation-step__copy">
                    <span className="foundation-step__title">{step.title}</span>
                    <span className="foundation-step__body">{step.body}</span>
                  </div>
                </li>
              ))}
            </ol>
          </SectionStack>
        </section>

        <section className="section section--track" aria-labelledby="track-heading">
          <SectionStack className="section__inner">
            <h2 id="track-heading" className="vc-h2">
              {organisations.heading}
            </h2>
            <div className="org-grid">
              {organisations.groups.map((group) => (
                <nve-card key={group.label} className="org-panel">
                  <nve-card-content>
                    <div className="org-panel__inner">
                      <h3 className="vc-h3">{group.label}</h3>
                      <ul className="org-list" aria-label={group.label}>
                        {group.names.map((name) => (
                          <li key={name}>
                            <span className="org-chip">{name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nve-card-content>
                </nve-card>
              ))}
            </div>
            <p className="vc-muted org-note">{organisations.note}</p>
          </SectionStack>
        </section>

        <section className="section section--tools" aria-labelledby="tools-heading">
          <SectionStack className="section__inner">
            <h2 id="tools-heading" className="vc-h2">
              {tools.heading}
            </h2>
            <div className="org-grid org-grid--tools">
              {tools.groups.map((group) => (
                <nve-card key={group.label} className="org-panel">
                  <nve-card-content>
                    <div className="org-panel__inner">
                      <h3 className="vc-h3">{group.label}</h3>
                      <ul className="org-list" aria-label={group.label}>
                        {group.items.map((item) => (
                          <li key={item}>
                            <span className="org-chip">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nve-card-content>
                </nve-card>
              ))}
            </div>
          </SectionStack>
        </section>

        <section id="contact" className="section section--contact" aria-labelledby="contact-heading">
          <SectionStack tight className="section__inner">
            <h2 id="contact-heading" className="vc-h2">
              {contact.heading}
            </h2>
            <p className="vc-body-block">{contact.body}</p>
            <LinkedInButton label={contact.primaryCta} />
          </SectionStack>
        </section>
      </main>

      <footer className="site-footer">
        <SectionStack tight className="section__inner">
          <BrandLogo className="brand-logo--footer" />
          <ul className="footer-links">
            <li>
              <ExternalLink href={site.links.linkedIn}>LinkedIn</ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.links.cursor}>Cursor</ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.links.vijay}>vijay.ai</ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.links.uxengineer}>uxengineer.ai</ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.links.interaction}>interaction.dev</ExternalLink>
            </li>
          </ul>
          <p className="vc-muted">{site.footer.copyright}</p>
        </SectionStack>
      </footer>
    </>
  );
}
