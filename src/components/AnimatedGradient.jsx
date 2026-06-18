export default function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px]
        bg-indigo-500/30 blur-[140px] rounded-full animate-float1" />

      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px]
        bg-purple-500/30 blur-[140px] rounded-full animate-float2" />

      <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px]
        bg-cyan-500/20 blur-[140px] rounded-full animate-float3" />

    </div>
  );
}