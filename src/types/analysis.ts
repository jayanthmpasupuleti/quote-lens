export type AttentionLevel = 'clear' | 'ask' | 'review' | 'info';

export interface AttentionItem {
  id: string;
  level: AttentionLevel;
  title: string;
  description: string;
  suggestedQuestion?: string;
}
