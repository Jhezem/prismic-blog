import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { ComponentMappers } from "@/utils/contentMapper";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.blog_title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  const { blog_title, blog_content, blog_image } = page.data;

  return (
    <section className="px-10 flex flex-col items-center mt-8 gap-y-5">
      <PrismicRichText field={blog_title} components={ComponentMappers} />
      <div className="w-1/2">
        <PrismicNextImage field={blog_image} />
      </div>
      <div className="p-4 text-center space-y-6">
        <PrismicRichText field={blog_content} components={ComponentMappers} />
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("blog_post");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
