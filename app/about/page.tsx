import WithTransition from '@/components/layout/WithTransition';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

export default function AboutPage() {
  return (
    <WithTransition>
      <article className="mx-auto prose">
        <h1 className="home-title">
          <Balancer>
            About <span className="text-ghost-500">Me</span>
          </Balancer>
        </h1>
        <section>
          <h2>
            <Balancer>Introduction</Balancer>
          </h2>
          <p>
            Hello! I&apos;m Ercüment, a Frontend Developer based in Turkey.
            I&apos;ve been interested in frontend development since my high
            school years, and I&apos;ve been professionally involved in this
            field for the past 4 years.
          </p>
        </section>
        <section>
          <h2>
            <Balancer>Favorite Technologies</Balancer>
          </h2>
          <p>
            JavaScript, TypeScript, and React are my favorite programming
            languages and technologies. I believe that JavaScript has unlimited
            potential and I see it as a Swiss army knife. React, on the other
            hand, is my preferred JavaScript library. I find it easier to learn
            and use compared to other libraries.
          </p>
        </section>
        <section>
          <h2>
            <Balancer>Approach to Frontend Development</Balancer>
          </h2>
          <p>
            To be a successful frontend developer, I believe in not being afraid
            to make mistakes, asking the right questions, and constantly
            researching. Technology is advancing rapidly, so staying up to date
            and following new trends is crucial to me.
          </p>
        </section>
        <section>
          <h2>
            <Balancer>Passion for UI Development</Balancer>
          </h2>
          <p>
            I thoroughly enjoy working on UI development. Adding new features
            and seeing them come to life in a live environment brings me joy.
            Additionally, I strive to continually improve myself in order to
            enhance user experience.
          </p>
        </section>
        <section>
          <h2>
            <Balancer>Hobbies</Balancer>
          </h2>
          <p>
            Outside of work, I spend my time watching anime, engaging in sports
            activities, and drawing with graphite pencils. These hobbies provide
            relaxation and fuel my creativity.
          </p>
        </section>
        <section>
          <h2>
            <Balancer>Favorite Frontend Tools and Libraries</Balancer>
          </h2>
          <p>
            Some of my favorite frontend tools and libraries include
            TailwindCSS, Zod, Tanstack React Query, and React Toastify. These
            tools help me make my projects more efficient and visually
            appealing.
          </p>
        </section>
        <section>
          <h2>
            <Balancer>Career Goals</Balancer>
          </h2>
          <p>
            My future career goal is to become even more successful and continue
            my development journey. I aim to learn new things in every project
            and strive to become a better developer.
          </p>
        </section>
      </article>
    </WithTransition>
  );
}
