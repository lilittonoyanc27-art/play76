/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface PedroCharacterProps {
  message: string;
  mood?: 'happy' | 'thinking' | 'sporty';
}

export default function PedroCharacter({ message, mood = 'happy' }: PedroCharacterProps) {
  const getPedroEmoji = () => {
    switch (mood) {
      case 'happy': return '🧔‍♂️';
      case 'thinking': return '🤔';
      case 'sporty': return '🏃‍♂️';
      default: return '🧔‍♂️';
    }
  };

  return (
    <div className="flex items-end gap-4 mb-8">
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-6xl filter drop-shadow-lg"
      >
        <div className="relative">
          {getPedroEmoji()}
          <div className="absolute -top-2 -right-2 text-2xl">⚡</div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        key={message}
        className="pedro-bubble flex-1"
      >
        {message}
      </motion.div>
    </div>
  );
}
