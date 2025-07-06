'use client';

import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <h1 className="text-4xl font-semibold">Home Page</h1>
      <Link href="/login" className="bg-cyan-800 hover:bg-cyan-900 duration-100 ease-in-out px-5 py-1 cursor-pointer rounded-sm font-medium">Login</Link>
    </div>
  );
}
