export default function TodoLoading() {
  return (
    <div className="w-full max-w-md mx-auto p-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
      <div className="flex gap-2 mb-4">
        <div className="flex-1 h-10 bg-gray-200 rounded"></div>
        <div className="w-20 h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 border rounded-lg">
            <div className="w-5 h-5 bg-gray-200 rounded"></div>
            <div className="flex-1 h-4 bg-gray-200 rounded"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 