/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson, ExerciseType, Exercise } from './types';
import { X, Heart, Trophy, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import WordPuzzle from './WordPuzzle';
import PedroCharacter from './PedroCharacter';

interface ExerciseViewProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: (progress: number) => void;
}

export default function ExerciseView({ lesson, onBack, onComplete }: ExerciseViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(5);
  
  const currentExercise = lesson.exercises[currentIndex];
  const isLast = currentIndex === lesson.exercises.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete(100);
      onBack();
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowResult(false);
    }
  };

  const checkMultipleChoice = (option: string) => {
    setSelectedOption(option);
    const isRight = option === currentExercise.answer;
    setIsCorrect(isRight);
    setShowResult(true);
    if (!isRight) setHearts(h => Math.max(0, h - 1));
  };

  const renderContent = () => {
    switch (currentExercise.type) {
      case ExerciseType.THEORY:
        return (
          <div className="space-y-6">
            <PedroCharacter message={currentExercise.theoryText || ''} mood="sporty" />
            <button onClick={handleNext} className="btn-primary">
              ԱՌԱ՛Ջ (VAMOS)
            </button>
          </div>
        );

      case ExerciseType.MULTIPLE_CHOICE:
        return (
          <div className="space-y-6">
            <PedroCharacter message={currentExercise.question} mood="thinking" />
            <div className="grid grid-cols-1 gap-3">
              {currentExercise.options?.map(opt => (
                <button
                  key={opt}
                  disabled={showResult}
                  onClick={() => checkMultipleChoice(opt)}
                  className={`p-5 rounded-2xl border-4 text-xl font-black transition-all ${
                    selectedOption === opt
                      ? isCorrect 
                        ? 'border-green-400 bg-green-500/20 text-white'
                        : 'border-red-400 bg-red-500/20 text-white'
                      : 'border-white/10 bg-white/5 hover:border-white/30 text-white'
                  }`}
                >
                  {opt.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        );

      case ExerciseType.PUZZLE:
        return (
          <div className="space-y-6">
            <PedroCharacter message={currentExercise.question} mood="sporty" />
            <div className="bg-black/20 p-6 rounded-3xl border border-white/10">
              <WordPuzzle 
                exercise={currentExercise} 
                onCorrect={() => {
                  setIsCorrect(true);
                  setShowResult(true);
                }} 
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* HUD */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="text-white/60 hover:text-white">
          <X className="w-8 h-8" />
        </button>
        <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / lesson.exercises.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-sporty-orange to-sporty-green shadow-[0_0_15px_rgba(255,126,95,0.5)]"
          />
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="font-black text-xl">{hearts}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
        >
          {renderContent()}

          {showResult && currentExercise.type !== ExerciseType.THEORY && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-6 rounded-3xl border-4 flex items-center justify-between ${
                isCorrect ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'
              }`}
            >
              <div className="flex items-center gap-4">
                {isCorrect ? (
                  <>
                    <div className="bg-green-500 rounded-full p-2"><CheckCircle2 className="w-8 h-8 text-white" /></div>
                    <div>
                      <h4 className="text-2xl font-black text-green-100">ՃԻՇՏ Է!</h4>
                      <p className="text-green-200/70">ԳՈԼ!</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-red-500 rounded-full p-2"><AlertCircle className="w-8 h-8 text-white" /></div>
                    <div>
                      <h4 className="text-2xl font-black text-red-100">ՍԽԱԼ Է</h4>
                      <p className="text-red-200/70">ՓՈՐՁԻՐ ՆՈՐԻՑ</p>
                    </div>
                  </>
                )}
              </div>
              
              {isCorrect && (
                <button 
                  onClick={handleNext}
                  className="bg-white text-sporty-dark px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all flex items-center gap-2 shadow-xl"
                >
                  ՇԱՐՈՒՆԱԿԵԼ <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {hearts === 0 && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-center p-8">
          <div className="bg-sporty-dark p-12 rounded-3xl text-center border-4 border-red-500 shadow-2xl">
            <h2 className="text-4xl font-black mb-4">ԽԱՂՆ ԱՎԱՐՏՎԱԾ Է</h2>
            <p className="text-xl mb-8 text-gray-400">Էներգիան սպառվեց:</p>
            <button onClick={onBack} className="btn-primary">ՓՈՐՁԵԼ ՆՈՐԻՑ</button>
          </div>
        </div>
      )}
    </div>
  );
}
