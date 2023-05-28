/* eslint-disable react/no-danger */
import BackIcon from '@/components/icons/BackIcon';
import WithTransition from '@/components/layout/WithTransition';
import { Mdx } from '@/components/mdx';
import { allBlogs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import slugify from 'slugify';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const url = 'https://ercumentlacin.github.io';

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  if (!post) return {};

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;
  const slugifyTitle = slugify(title, { lower: true, locale: 'tr' });
  const ogImage = image
    ? `${url}${image}`
    : `${url}/api/og?title=${slugifyTitle}`;

  return {
    title,
    description,
    openGraph: {
      title: slugifyTitle,
      description,
      type: 'article',
      publishedTime,
      url: `${url}/blog/${slugifyTitle}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function Blog({ params }: Props) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <WithTransition className="post-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />
      <div className="fixed text-main-300 left-[85%] top-[92%] sm:left-5 sm:top-5">
        <Link
          href="/blog"
          className="flex items-center gap-2 p-2 transition duration-300 ease-in-out rounded-full shadow-md border-white/10 bg-main-900/30 backdrop-blur-sm-sm w-max hover:bg-main-900/40"
        >
          <BackIcon width={20} height={20} aria-labelledby="back" />
        </Link>
      </div>
      <h1>
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mx-auto mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="px-2 py-1 tracking-tighter text-white rounded-md bg-ghost-700">
          {post.publishedAt}
        </div>
        <div className="mx-2 h-[0.2em] bg-ghost-700" />
      </div>
      <Mdx code={post.body.code} />
    </WithTransition>
  );
}
