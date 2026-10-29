import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#fffefa]">
      <span className="font-handwriting text-5xl text-[#fec32a] mb-2 font-bold">Oops!</span>
      <h1 className="text-4xl font-extrabold text-[#19263a] mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for might have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-[#ffcf4e] hover:bg-[#fec32a] text-[#19263a] font-bold px-6 py-2.5 rounded-full transition-all shadow-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}

