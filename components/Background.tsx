import React from 'react';

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-pastel-pink via-white to-pastel-blue">
      {/* Floating Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-pastel-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pastel-pink rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-md px-6 py-8 flex flex-col h-full min-h-screen md:min-h-[800px] md:h-auto justify-center">
        {children}
      </main>
    </div>
  );
};

export default Background;