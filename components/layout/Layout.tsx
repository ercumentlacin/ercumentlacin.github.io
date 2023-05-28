import React from 'react';
import Navbar from '../Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 mb-16">
        <Navbar />
      </header>
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
        {children}
      </main>
    </>
  );
}
