import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { UrlObject } from 'url';

type CustomLinkProps = {
  href: string | UrlObject;
  children?: React.ReactNode;
};

function CustomLink(props: CustomLinkProps) {
  const { href, children, ...others } = props;
  const isHrefString = typeof href === 'string';

  if (isHrefString && href.startsWith('/')) {
    return <Link {...props}>{children}</Link>;
  }

  if (isHrefString && href.startsWith('#')) {
    return (
      <a href={href} {...others}>
        {children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={isHrefString ? href : href.toString()}
      {...others}
    >
      {children}
    </a>
  );
}

function RoundedImage({ alt, ...props }: React.ComponentProps<typeof Image>) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage as MDXComponents['Image'],
  a: CustomLink as MDXComponents['a'],
} as MDXComponents;

interface MdxProps {
  code: string;
}

// eslint-disable-next-line import/prefer-default-export
export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose-quoteless prose prose-stone mx-auto py-10">
      <Component components={{ ...components }} />
    </article>
  );
}
