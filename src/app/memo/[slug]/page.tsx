import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const MEMO_DIR = "_memo";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, MEMO_DIR);

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
  const post = getPostBySlug(params.slug, MEMO_DIR);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | モチヅ記`;

  return {
    title,
    /*
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
    */
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(MEMO_DIR);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
