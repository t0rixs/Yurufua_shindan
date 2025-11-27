export type ScreenState = 'start' | 'quiz' | 'loading' | 'result';

export type Rank = 'Unicorn' | 'Witch' | 'Sloth';

export interface QuestionData {
  id: number;
  category: string;
  question: string;
  iconName: string;
}

export interface QuestionResult {
  questionId: number;
  isCorrect: boolean;
}

export interface RankDetails {
  label: Rank;
  title: string;
  emoji: string;
  colorClass: string; // Text color
  bgClass: string;   // Background color for badges
  description: string;
  advice: string;
}