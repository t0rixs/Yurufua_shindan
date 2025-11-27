import React, { useEffect, useState } from 'react';
import { Star, Moon, Cloud, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [text, setText] = useState("宇宙と交信中...✨");
  
  useEffect(() => {
    const steps = [
      "前世の記憶をスキャン中...🔮",
      "オーラの色を解析中...🌈",
      "天使に問い合わせ中...👼",
      "運命の星読み中...⭐",
      "もうすぐわかるよ！💖",
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setText(steps[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-10 animate-in fade-in bg-white/30 backdrop-blur-sm rounded-[2rem] p-8 border border-white">
      
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-pastel-pink rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 border-4 border-pastel-blue rounded-full border-b-transparent animate-spin-slow"></div>
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
           <Moon className="w-12 h-12 text-pastel-yellow fill-pastel-yellow" />
        </div>
        <Sparkles className="absolute top-0 right-0 text-pastel-purple w-6 h-6 animate-bounce" />
        <Star className="absolute bottom-2 left-2 text-pastel-pink w-5 h-5 animate-pulse" />
      </div>

      <div className="text-center space-y-3">
        <h2 className="text-xl font-bold text-slate-600 animate-pulse">
          {text}
        </h2>
        <p className="text-xs text-slate-400">
          ※ 悪い気（ノイズ）を除去しています
        </p>
      </div>
      
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-pastel-pink rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 bg-pastel-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-pastel-yellow rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>

    </div>
  );
};

export default LoadingScreen;