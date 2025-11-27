import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-1000">
      
      <div className="relative text-center">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Sparkles className="w-12 h-12 text-yellow-400 drop-shadow-sm" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-700 leading-tight tracking-wide drop-shadow-sm">
          あなたの<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-purple to-pastel-pink text-5xl md:text-6xl">未来オーラ</span>
          <br/>は何色？♡
        </h1>
        <div className="mt-4 inline-block px-6 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white shadow-sm">
           <span className="text-slate-500 font-bold tracking-widest text-sm">#ゆるふわプレコン診断</span>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl w-full text-center transform hover:scale-105 transition-transform duration-300">
         <p className="text-slate-600 font-medium leading-loose">
           「将来の継承力」とか言われても<br/>
           よくわかんないよね🥺<br/>
           <br/>
           だから、<span className="text-pink-500 font-bold">宇宙のパワー</span>で<br/>
           あなたのポテンシャルを<br/>
           かわいく診断しちゃうよ🔮✨
         </p>
      </div>

      <button
        onClick={onStart}
        className="group relative w-full max-w-xs"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-soft"></div>
        <div className="relative bg-white rounded-full p-1">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full py-4 px-8 flex items-center justify-center space-x-2 transition-transform transform group-hover:-translate-y-1 group-active:translate-y-0">
             <Heart className="w-6 h-6 text-white fill-white animate-wiggle" />
             <span className="text-white font-bold text-lg tracking-wider">診断スタート♡</span>
          </div>
        </div>
      </button>

      <footer className="text-[10px] text-slate-400 font-medium tracking-widest">
        © 2024 YURU-FUWA LAB.
      </footer>
    </div>
  );
};

export default StartScreen;