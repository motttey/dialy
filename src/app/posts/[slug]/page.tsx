import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { SectionSeparator } from "@/app/_components/section-separator";
import PostService from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const postService = new PostService();

export default async function Post(props: Params) {
  const params = await props.params;
  const post = postService.getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <div className="grid grid-cols-1">
          <article className="mx-auto mb-32 sm:mx-16">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              author={post.author}
            />
            <SectionSeparator></SectionSeparator>
            <PostBody content={content} />
          </article>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = postService.getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | モチヅ記`;

  return {
    title,
    icons: "/favicon.ico",
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      site: "@mt_tg",
      creator: "@mt_tg",
      images: [post.ogImage.url],
    },
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = postService.getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
