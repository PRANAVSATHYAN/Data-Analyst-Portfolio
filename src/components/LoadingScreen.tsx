import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative">
        {/* Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full opacity-5">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
        
        {/* Purple blur effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#cc73f8] rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-25"></div>
        
        {/* Loading animation */}
        <div className="flex flex-col items-center relative z-10">
          <div className="w-16 h-16 border-4 border-[#cc73f8] border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-2xl font-bold text-primary animate-pulse">Hi there! I'm glad you're here</h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
