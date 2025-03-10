import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-900">Nishant Ranjan</h1>
      <p className="text-gray-700 mt-2">Backend Software Engineer | Python | Django | Scalable Systems</p>
      <div className="mt-4 flex space-x-4">
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/projects" className="text-blue-500 hover:underline">Projects</Link>
        <Link href="/experience" className="text-blue-500 hover:underline">Experience</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </div>
    </div>
  );
}