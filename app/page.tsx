import WithTransition from '@/components/layout/WithTransition';
import Image from 'next/image';
import React from 'react';

export default function HomePage() {
  return (
    <WithTransition>
      <main className="container max-w-2xl mx-auto my-5">
        <h1 className="home-title">Ercüment Laçın</h1>

        <p className="my-5">
          Hey, I&apos;m Ercüment. I&apos;m a software engineer and a full-stack
          developer.
        </p>

        <div className="flex gap-5">
          <Image
            src="/images/avatar.jpg"
            alt="me"
            width="96"
            height="96"
            className="object-cover object-top w-24 h-24 rounded-full aspect-square grayscale"
          />
          <p>
            A qualified frontend developer with 6 years experienced with
            excellent skills in analyzing and modifying existing software, as
            well as developing, designing, and testing end-user applications
            that match user needs – all using software programming languages.
          </p>
        </div>
      </main>
    </WithTransition>
  );
}
