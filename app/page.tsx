import WithTransition from '@/components/layout/WithTransition';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ercüment Laçın',
  description: 'Frontend Developer',
};

export default function HomePage() {
  return (
    <WithTransition>
      <main className="container max-w-2xl mx-auto my-5">
        <h1 className="home-title">Ercüment Laçın</h1>

        <div className="flex flex-col gap-5 sm:flex-row">
          <Image
            src="/images/avatar.jpg"
            alt="me"
            width="96"
            height="96"
            className="object-cover object-top w-24 h-24 rounded-full aspect-square grayscale"
          />
          <section className="space-y-3">
            <p>
              Hey, I&apos;m a frontend developer with a passion for creating
              engaging and user-friendly web experiences. With 4 years of
              professional experience, I have developed a strong skill set in
              JavaScript, TypeScript, and React. I also have knowledge of
              Node.js and have experience in developing full stack applications
              using Next.js.
            </p>
            <p>
              My goal is to bring ideas to life through clean and elegant code.
              I believe in the power of collaboration and enjoy working in teams
              to deliver high-quality projects.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring the world of
              anime, staying active through sports, and expressing my creativity
              through graphite drawings.
            </p>
          </section>
        </div>
      </main>
    </WithTransition>
  );
}
