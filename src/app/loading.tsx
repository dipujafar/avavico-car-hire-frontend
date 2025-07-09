"use client"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Car progress animation */}
      <div className="relative w-80 h-16">
        {/* Road */}
        <div className="absolute bottom-0 w-full h-1 bg-gray-400 rounded"></div>

        {/* Moving car that changes color during progress */}
        <div className="absolute bottom-2 animate-[drive_3s_ease-in-out_infinite]">
          <div className="w-12 h-6 rounded-lg relative animate-[colorChange_3s_ease-in-out_infinite]">
            {/* Car windows */}
            <div className="absolute top-1 left-2 w-8 h-3 bg-white/70 rounded-sm"></div>
            {/* Car wheels */}
            <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full animate-spin"></div>
            <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drive {
          0% { transform: translateX(0); }
          50% { transform: translateX(280px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes colorChange {
          0% { background-color: #ef4444; }
          25% { background-color: #f97316; }
          50% { background-color: #eab308; }
          75% { background-color: #22c55e; }
          100% { background-color: #3b82f6; }
        }
      `}</style>
    </div>
  )
}
