/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LESSONS } from './lessons';
import { Lesson } from './types';
import { Trophy, ArrowRight } from 'lucide-react';

interface DashboardProps {
  onSelectLesson: (lesson: Lesson) => void;
}

export default function Dashboard({ onSelectLesson }: DashboardProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {LESSONS.map((lesson) => (
        <motion.div
          key={lesson.id}
          whileHover={{ scale: 1.02, rotate: -0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectLesson(lesson)}
          className="glass-card p-1 bg-gradient-to-br from-sporty-orange to-sporty-green cursor-pointer group"
        >
          <div className="bg-sporty-dark p-8 rounded-[22px] flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-sporty-orange transition-colors">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black font-display text-white uppercase italic">{lesson.title}</h3>
                <p className="text-blue-100/60 font-medium">{lesson.description}</p>
              </div>
            </div>
            <ArrowRight className="w-10 h-10 text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
