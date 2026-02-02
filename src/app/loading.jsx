export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-background transition-opacity duration-500">
      
      {/* Animation Container 
        Represents the "Winds" and "Tides" mentioned in the text [cite: 6, 7]
      */}
      <div className="relative mb-8 flex items-center justify-center">
        
        {/* Outer Ripple (Tide) - Slow expansion */}
        <div className="absolute h-24 w-24 rounded-full border border-primary/20 opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        
        {/* Inner Ripple - Delayed expansion */}
        <div className="absolute h-16 w-16 rounded-full border border-primary/40 opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
        
        {/* Center Anchor - The house/stability */}
        <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(98,186,234,0.5)] animate-pulse"></div>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="animate-fade-in text-lg font-medium tracking-[0.3em] text-foreground uppercase">
          Winds of Zanzibar
        </h1>
        
        {/* Subtitle / Status */}
        <p className="animate-fade-up text-xs font-light tracking-widest text-muted-foreground">
          LOADING PARADISE...
        </p>
      </div>
    </div>
  );
}