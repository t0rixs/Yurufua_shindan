import React, { useState } from 'react';
import Background from './components/Background';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import LoadingScreen from './components/LoadingScreen';
import { QUESTIONS, RANK_SYSTEM } from './constants';
import { ScreenState, Rank } from './types';
import { Share2, RotateCcw } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    // 12.5 points per question * 8 questions = 100 max
    if (isCorrect) {
      setScore((prev) => prev + 12.5);
    }

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScreen('loading');
    }
  };

  const handleLoadingComplete = () => {
    setScreen('result');
  };

  const handleRetry = () => {
    setScreen('start');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // Result Calculation Logic
  const getRank = (finalScore: number): Rank => {
    if (finalScore >= 80) return 'Unicorn';
    if (finalScore >= 50) return 'Witch';
    return 'Sloth';
  };

  const renderScreen = () => {
    switch (screen) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'quiz':
        return (
          <QuizScreen
            currentQuestionIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
          />
        );
      case 'loading':
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case 'result':
        const rankKey = getRank(score);
        const rank = RANK_SYSTEM[rankKey];
        
        return (
          <div className="flex flex-col items-center w-full animate-in zoom-in duration-500">
            <div className={`glass-card p-8 rounded-[2.5rem] w-full text-center relative overflow-hidden border-4 ${rank.bgClass.replace('bg-', 'border-')}`}>
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-40 rounded-full blur-2xl"></div>

              <div className="mb-2 text-slate-400 text-xs font-bold tracking-widest uppercase">
                YOUR ARCHETYPE
              </div>
              
              <div className="text-8xl mb-4 animate-bounce filter drop-shadow-md">
                {rank.emoji}
              </div>
              
              <h2 className={`text-3xl font-bold mb-2 ${rank.colorClass} drop-shadow-sm`}>
                {rank.title}
              </h2>
              
              <div className="w-full bg-slate-100 rounded-full h-3 mb-6 relative overflow-hidden">
                <div 
                  className={`h-full rounded-full ${rank.bgClass.replace('bg-', 'bg-') === 'bg-purple-100' ? 'bg-purple-400' : rank.bgClass.replace('bg-', 'bg-') === 'bg-blue-100' ? 'bg-blue-400' : 'bg-orange-400'}`} 
                  style={{ width: `${score}%` }}
                ></div>
              </div>

              <div className="bg-white/60 rounded-xl p-4 mb-6 shadow-sm">
                <p className="text-slate-700 font-bold text-lg mb-2">
                  {rank.description}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {rank.advice}
                </p>
              </div>

              {score < 80 && (
                <div className="mb-6 animate-pulse">
                  <a 
                    href="https://www.ncchd.go.jp/hospital/about/section/preconception/pcc_check-list.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-600 transition-colors text-sm"
                  >
                    もっと強靭な生殖能力を得たい？✨
                  </a>
                </div>
              )}

              <button className="w-full bg-[#1da1f2] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 mb-3 shadow-md hover:bg-[#1a91da] transition-colors">
                <Share2 className="w-5 h-5" />
                結果をシェアする♡
              </button>
              
              <button 
                onClick={handleRetry}
                className="w-full bg-white text-slate-500 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                もう一度診断する
              </button>

            </div>
            
            <div className="mt-8 text-center text-[10px] text-slate-400 max-w-xs">
              ※ この診断は医学的アドバイスではありませんが、<br/>内容は専門医監修のガイドラインに基づいています。<br/>
              気になることがあれば<a href="#" className="underline text-pink-400">専門機関</a>へ。
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Background>
      {renderScreen()}
    </Background>
  );
}