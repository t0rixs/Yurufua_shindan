import React from 'react';
import { 
  Feather, Sparkles, Shield, HeartHandshake, 
  Wand, Moon, CloudFog, Map, Heart, Star
} from 'lucide-react';
import { QUESTIONS } from '../constants';
import { QuestionData } from '../types';

interface QuizScreenProps {
  currentQuestionIndex: number;
  onAnswer: (result: boolean) => void;
}

const IconMap: Record<string, React.ElementType> = {
  Feather, Sparkles, ShieldHeart: Shield, HeartHandshake, Wand, Moon, CloudFog, MapHeart: Map
};

const QuizScreen: React.FC<QuizScreenProps> = ({ currentQuestionIndex, onAnswer }) => {
  const question = QUESTIONS[currentQuestionIndex];
  const IconComponent = IconMap[question.iconName] || Star;

  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="flex flex-col h-full min-h-[600px] w-full animate-in slide-in-from-bottom duration-700">
      
      {/* Header */}
      <div className="w-full mb-8 space-y-3">
        <div className="flex justify-between items-center text-slate-500 font-bold text-sm px-2">
          <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-yellow-400" /> Q.{currentQuestionIndex + 1}</span>
          <span className="bg-white/50 px-3 py-1 rounded-full text-xs">あと {QUESTIONS.length - currentQuestionIndex} 問だよ♡</span>
        </div>
        <div className="h-4 w-full bg-white rounded-full overflow-hidden shadow-inner border border-white/60">
          <div 
            className="h-full bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full relative" 
            style={{ width: `${progress}%`, transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-full bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[scanline_1s_linear_infinite]" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex-grow flex flex-col items-center justify-center relative mb-8">
        <div className="glass-card p-8 md:p-12 rounded-[2rem] w-full text-center relative overflow-hidden group">
          
          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-pastel-yellow rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white shadow-lg border-4 border-pastel-blue animate-float">
              <IconComponent className="w-12 h-12 text-pastel-purple" />
            </div>
          </div>
          
          <h3 className="text-pastel-purple text-sm font-bold tracking-wider mb-4 uppercase bg-pastel-purple/10 inline-block px-4 py-1 rounded-full">
            {question.category}
          </h3>
          
          <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed drop-shadow-sm">
            {question.question}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-4 w-full">
        <button
          onClick={() => onAnswer(true)}
          className="group relative h-16 w-full transform transition-all active:scale-95"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink to-pink-400 rounded-2xl shadow-lg shadow-pink-200"></div>
           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"></div>
           <div className="relative flex items-center justify-center space-x-3 h-full">
             <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
             <span className="text-white font-bold text-lg tracking-wider">めっちゃそう！🥰</span>
           </div>
        </button>

        <button
          onClick={() => onAnswer(false)}
          className="group relative h-14 w-full transform transition-all active:scale-95 mt-2"
        >
           <div className="absolute inset-0 bg-white border-2 border-slate-200 rounded-2xl shadow-sm group-hover:border-slate-300"></div>
           <div className="relative flex items-center justify-center space-x-2 h-full">
             <span className="text-slate-500 font-bold tracking-wider">全然ちがう🥺</span>
           </div>
        </button>
      </div>

    </div>
  );
};

export default QuizScreen;