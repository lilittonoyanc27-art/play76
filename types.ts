/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ExerciseType {
  PUZZLE = 'puzzle',
  MATCHING = 'matching',
  MULTIPLE_CHOICE = 'multiple_choice',
  THEORY = 'theory'
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  subquestion?: string;
  options?: string[]; // For multiple choice or source words for puzzle
  answer?: string | string[]; // Correct order/match
  audio?: string;
  theoryText?: string;
  translation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  progress: number;
}
