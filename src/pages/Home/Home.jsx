import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@components/Layout';

const socialMedias = [
  {
    name: 'Github',
    url: 'https://github.com/ercumentlacin',
    icon: 'fab fa-github-square',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ercument-lacin/',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@ercumentlacin',
    icon: 'fab fa-medium',
  },
  {
    name: 'Stackoverflow',
    url: 'https://stackoverflow.com/users/14406819/erc%c3%bcment',
    icon: 'fab fa-stack-overflow',
  },
];

const renderSocialMediaAccounnts = () => (
  <ul className='social-media-container flex justify-center space-x-3'>
    {socialMedias.map(({ name, url, icon }) => (
      <li key={name}>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <i className={`${icon} text-3xl`} />
        </a>
      </li>
    ))}
  </ul>
);

const Home = () => (
  <section className='container max-w-4xl mx-auto text-center flex flex-col items-center px-4'>
    <article className='max-w-prose'>
      <h1 className='text-3xl font-semibold text-center mb-6'>
        Hello my name is Ercüment Laçın.
      </h1>
      <p className='leading-7 text-left '>
        I am a frontend developer. I have experience in React, Redux, Node.js,
        Express, MongoDB and more.
        <br />
        Check out my articles, React and Redux articles, and more at the{' '}
        <Link to='/articles'>Articles</Link> page.
        <br />
        Check out my projects, React and Redux projects, and more at the{' '}
        <Link to='/projects'>Projects</Link> page.
      </p>

      <p>
        Remotely available UTC-1 to UTC+8{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='mailto:ercument.lacin@gmail.com'
        >
          ercument.lacin@gmail.com
        </a>
      </p>

      {renderSocialMediaAccounnts()}
    </article>
  </section>
);

export default Layout(Home);
