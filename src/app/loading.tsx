export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
} 