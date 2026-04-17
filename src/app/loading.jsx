export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1f1b] via-[#132c26] to-[#0b1513] px-4">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-gray-300 text-sm sm:text-base">
        Loading, please wait...
      </p>
      
    </div>
  );
}