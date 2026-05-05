/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Exercise } from './types';

interface WordPuzzleProps {
  exercise: Exercise;
  onCorrect: () => void;
}

interface WordItem {
  id: string;
  text: string;
  isSelected: boolean;
}

export default function WordPuzzle({ exercise, onCorrect }: WordPuzzleProps) {
  const [availableWords, setAvailableWords] = useState<WordItem[]>([]);
  const [selectedWords, setSelectedWords] = useState<WordItem[]>([]);
  const [isError, setIsError] = useState(false);

  // Initialize words
  useEffect(() => {
    const words = (exercise.options || []).map((text, index) => ({
      id: `${text}-${index}-${Math.random()}`,
      text,
      isSelected: false
    }));
    // Shuffle words
    setAvailableWords([...words].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setIsError(false);
  }, [exercise]);

  const selectWord = (word: WordItem) => {
    if (word.isSelected) return;

    const newAvailable = availableWords.map(w => 
      w.id === word.id ? { ...w, isSelected: true } : w
    );
    
    const newSelected = [...selectedWords, word];
    
    setAvailableWords(newAvailable);
    setSelectedWords(newSelected);
    setIsError(false);

    // Check if finished
    const expectedAnswer = exercise.answer as string[];
    if (newSelected.length === expectedAnswer.length) {
      const isCorrect = newSelected.every((w, i) => w.text === expectedAnswer[i]);
      if (isCorrect) {
        onCorrect();
      } else {
        setIsError(true);
        // Auto reset after failure to let user try again
        setTimeout(() => {
          resetPuzzle();
        }, 1500);
      }
    }
  };

  const resetPuzzle = () => {
    setAvailableWords(prev => prev.map(w => ({ ...w, isSelected: false })));
    setSelectedWords([]);
    setIsError(false);
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 font-display">{exercise.question}</h3>
        {exercise.translation && (
          <p className="text-gray-400 italic">"{exercise.translation}"</p>
        )}
      </div>

      {/* Result Area (Sentence Building) */}
      <div className={`min-h-[80px] p-6 rounded-2xl bg-white/5 border-2 transition-colors flex flex-wrap gap-3 items-center justify-center ${
        isError ? 'border-red-500/50 bg-red-500/10' : 'border-white/10'
      }`}>
        <AnimatePresence>
          {selectedWords.length === 0 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="text-white uppercase tracking-widest text-sm"
            >
              Կառուցեք նախադասությունը
            </motion.p>
          )}
          {selectedWords.map((word, index) => (
            <motion.div
              key={`selected-${word.id}`}
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="word-chip cursor-default"
            >
              {word.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Available Words Area */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {availableWords.map((word) => (
          <div key={word.id} className="relative">
            {/* The Placeholder stayed behind */}
            {word.isSelected && (
              <div className="word-placeholder">
                {word.text}
              </div>
            )}
            
            {/* The actual selectable word */}
            {!word.isSelected && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectWord(word)}
                className="word-chip transition-all hover:border-white/40 shadow-lg"
              >
                {word.text}
              </motion.button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={resetPuzzle}
          className="text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4"
        >
          Сбросить (Reiniciar)
        </button>
      </div>
    </div>
  );
}
