/* eslint-disable react/no-danger */
import { Mdx } from '@/components/mdx';
import { allBlogs } from 'contentlayer/generated';
import type { Metadata } from 'next';
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
    <section className="post-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />
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
    </section>
  );
}
