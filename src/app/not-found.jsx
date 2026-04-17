import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a2c1b9] via-[#132c26] to-[#0b1513] px-6">
      
      <div className="text-center max-w-md w-full">

        {/* 404 Number */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/home"
            className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium shadow-lg transition duration-300 w-full sm:w-auto"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
}