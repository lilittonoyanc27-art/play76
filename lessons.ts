/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, ExerciseType } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 'pedro-spanathlon',
    title: 'Պեդրոյի Մարզադաշտը',
    description: 'Սովորիր Por և Para նախդիրները Պեդրոյի սպորտային աշխարհում:',
    progress: 0,
    exercises: [
      {
        id: 'p-intro',
        type: ExerciseType.THEORY,
        question: 'Ողջո՜ւյն, Չեմպիոն!',
        theoryText: 'Ես Պեդրոն եմ! Այսօր մենք կսովորենք **POR** ու **PARA** նախդիրները մեր մարզումների ժամանակ։ \n\nՅուրաքանչյուրը ունի իր «սպորտային» կանոնը։ 🎾🏀',
      },
      {
        id: 'para-purpose',
        type: ExerciseType.THEORY,
        question: 'PARA: Նպատակ (Purpose)',
        theoryText: '**PARA**-ն օգտագործում ենք, երբ խոսում ենք ՆՊԱՏԱԿԻ մասին։ Ինչի՞ համար ենք ինչ-որ բան անում։\n\n*Օրինակ: Entreno **para** ganar.* \n(Մարզվում եմ հաղթելու համար)',
      },
      {
        id: 'p-ex-1',
        type: ExerciseType.PUZZLE,
        question: 'Ես մարզվում եմ հաղթելու համար',
        translation: 'Entreno para ganar',
        options: ['ganar', 'para', 'Entreno', 'por'],
        answer: ['Entreno', 'para', 'ganar']
      },
      {
        id: 'por-route',
        type: ExerciseType.THEORY,
        question: 'POR: Ճանապարհ (Route)',
        theoryText: '**POR**-ը օգտագործում ենք, երբ նկարագրում ենք ՇԱՐԺՄԱՆ ՏԱՐԱԾՔԸ կամ ՄԻՋՈՎ անցնելը։\n\n*Օրինակ: Corro **por** la playa.* \n(Վազում եմ լողափով)',
      },
      {
        id: 'p-ex-2',
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Caminamos ___ el parque (այգով).',
        options: ['por', 'para'],
        answer: 'por'
      },
      {
        id: 'para-recipient-ball',
        type: ExerciseType.THEORY,
        question: 'PARA: Ստացող (Recipient)',
        theoryText: '**PARA**-ն նաև ցույց է տալիս, թե ՈՒՄ ՀԱՄԱՐ է նախատեսված իրը։\n\n*Օրինակ: El balón es **para** Pedro.* \n(Գնդակը Պեդրոյի համար է)',
      },
      {
        id: 'p-ex-3',
        type: ExerciseType.PUZZLE,
        question: 'Գնդակը Պեդրոյի համար է',
        translation: 'El balón es para Pedro',
        options: ['Pedro', 'para', 'es', 'balón', 'El', 'por'],
        answer: ['El', 'balón', 'es', 'para', 'Pedro']
      },
      {
        id: 'por-motivation',
        type: ExerciseType.THEORY,
        question: 'POR: Պատճառ / Մոտիվացիա',
        theoryText: '**POR**-ը օգտագործում ենք, երբ խոսքը ՊԱՏՃԱՌԻ կամ հանուն ինչ-որ բանի մասին է։\n\n*Օրինակ: Todo **por** el equipo.* \n(Ամեն ինչ թիմի համար/հանուն թիմի)',
      },
      {
        id: 'p-ex-4',
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Trabajamos ___ el equipo (հանուն թիմի).',
        options: ['por', 'para'],
        answer: 'por'
      },
      {
        id: 'para-deadline',
        type: ExerciseType.THEORY,
        question: 'PARA: Վերջնաժամկետ',
        theoryText: '**PARA**-ն օգտագործում ենք նաև ժամանակային ՍԱՀՄԱՆԱԳԾԻ համար։\n\n*Օրինակ: La tarea es **para** mañana.* \n(Առաջադրանքը վաղվա համար է)',
      },
      {
        id: 'p-ex-5',
        type: ExerciseType.PUZZLE,
        question: 'Խաղը վաղվա համար է',
        translation: 'El partido es para mañana',
        options: ['mañana', 'para', 'es', 'partido', 'El', 'por'],
        answer: ['El', 'partido', 'es', 'para', 'mañana']
      },
      {
        id: 'p-conclusion',
        type: ExerciseType.THEORY,
        question: 'ԳՈ՜Ո՜Ո՜Լ!',
        theoryText: 'Դու իսկական չեմպիոն ես! 🏆\n\n✅ **PARA** - Նպատակ, Ստացող, Վերջնաժամկետ\n✅ **POR** - Ճանապարհ, Պատճառ\n\nՇարունակիր մարզվել! 👟🔥',
      }
    ]
  }
];
