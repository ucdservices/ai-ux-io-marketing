import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type NveCommon = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'nve-button': NveCommon & {
        interaction?: 'emphasis' | 'destructive';
        container?: 'flat' | 'inline';
        size?: 'sm' | 'md' | 'lg';
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        selected?: boolean;
      };
      'nve-icon-button': NveCommon & {
        'icon-name'?: string;
        'aria-label'?: string;
        size?: 'sm' | 'md' | 'lg';
        container?: 'flat' | 'inline';
        interaction?: 'emphasis' | 'destructive';
        popovertarget?: string;
      };
      'nve-icon': NveCommon & {
        name?: string;
        size?: 'sm' | 'md' | 'lg';
        direction?: string;
      };
      'nve-badge': NveCommon & {
        status?:
          | 'scheduled'
          | 'queued'
          | 'pending'
          | 'starting'
          | 'running'
          | 'restarting'
          | 'stopping'
          | 'finished'
          | 'failed'
          | 'ignored'
          | 'unknown';
      };
      'nve-card': NveCommon;
      'nve-card-header': NveCommon;
      'nve-card-content': NveCommon;
      'nve-card-footer': NveCommon;
      'nve-dropdown': NveCommon & {
        id?: string;
        position?: string;
        alignment?: string;
      };
      'nve-preferences-input': NveCommon & {
        name?: string;
        value?: string;
      };
    }
  }
}

export {};
