/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ExerciseView from './ExerciseView';
import { Lesson } from './types';
import { Trophy } from 'lucide-react';

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleComplete = (progress: number) => {
    console.log(`Lesson completed with ${progress}%`);
  };

  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-x-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-sporty-orange rounded-2xl shadow-lg rotate-3">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black font-display tracking-tight text-white leading-none uppercase italic">
                ՊԵԴՐՈՅԻ ՍՊՈՐՏԱՅԻՆ ԱՇԽԱՐՀԸ
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-sporty-green font-black mt-1">
                POR vs PARA • SPORTY WORLD
              </p>
            </div>
          </div>
        </header>

        <main>
          {!selectedLesson ? (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-6xl md:text-8xl font-black font-display mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent uppercase italic leading-none">
                  ՊԵԴՐՈՅԻ <br/> ՄԱՐԶԱԴԱՇՏԸ
                </h2>
                <p className="text-blue-100/70 text-xl font-medium">
                  Մարզվիր Պեդրոյի հետ և տիրապետիր Por և Para նախդիրներին:
                </p>
              </div>
              <Dashboard onSelectLesson={setSelectedLesson} />
            </div>
          ) : (
            <ExerciseView 
              lesson={selectedLesson} 
              onBack={() => setSelectedLesson(null)} 
              onComplete={handleComplete}
            />
          )}
        </main>

        <footer className="mt-24 py-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs font-black uppercase tracking-widest">
            &copy; 2024 PEDRO'S SPORTY WORLD • POR VS PARA EDITION
          </p>
        </footer>
      </div>
    </div>
  );
}
