export default function Loading() {
  return (
    <div className="min-h-screen bg-codirect-black flex items-center justify-center">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-neutral-800 border-t-codirect-gold rounded-full animate-spin"></div>
        
        {/* Logo or text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-codirect-gold/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
