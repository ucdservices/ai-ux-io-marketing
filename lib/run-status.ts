export type RunDisplayStatus = 'Done' | 'Running' | 'Next';

export function badgeStatusForRun(status: RunDisplayStatus) {
  switch (status) {
    case 'Done':
      return 'finished' as const;
    case 'Running':
      return 'running' as const;
    case 'Next':
      return 'scheduled' as const;
  }
}
