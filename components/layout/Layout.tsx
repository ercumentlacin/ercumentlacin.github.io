'use client';

import Navbar from '../Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 mb-16">
        <Navbar />
      </header>
      <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:mt-0 md:px-0">
        {children}
      </main>
    </>
  );
}
