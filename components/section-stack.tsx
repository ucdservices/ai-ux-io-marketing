import type { ReactNode } from 'react';

type SectionStackProps = {
  children: ReactNode;
  className?: string;
  tight?: boolean;
};

export function SectionStack({ children, className = '', tight }: SectionStackProps) {
  return (
    <div
      className={`section-stack${tight ? ' section-stack--tight' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}
