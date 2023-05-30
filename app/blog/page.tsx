import WithTransition from '@/components/layout/WithTransition';
import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  return (
    <WithTransition>
      <h1 className="mb-5 font-serif text-3xl font-bold home-title">
        <Balancer>Blog</Balancer>
      </h1>
      {[...allBlogs]
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col mb-4 space-y-1 no-underline group link text-primary-content"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col w-full">
              <p className="relative w-full text-xl font-semibold text-main-200 group-hover:text-ghost-500">
                <Balancer>
                  {post.title}
                  <span className="absolute -bottom-[0.05rem] left-0 h-[0.1rem] w-0 bg-ghost-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                </Balancer>
              </p>
              <time
                dateTime={new Date(post.publishedAt).toISOString()}
                className="text-sm no-underline text-main-50/50"
              >
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(new Date(post.publishedAt))}
              </time>
            </div>
          </Link>
        ))}
    </WithTransition>
  );
}
