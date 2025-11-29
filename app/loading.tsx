export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center mesh-bg">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary-500/30 animate-pulse">
            MU
          </div>
          {/* Spinning ring */}
          <div className="absolute -inset-2 rounded-3xl border-2 border-transparent border-t-primary-500 border-r-accent-500 animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-600 dark:text-zinc-400 font-medium">Loading</p>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
