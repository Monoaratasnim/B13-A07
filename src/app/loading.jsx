export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-amber-50 z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-300">Loading...</p>
    </div>
  );
}