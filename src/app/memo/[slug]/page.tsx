import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { Post as PostInterface } from "@/interfaces/post";
import PostService from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const MEMO_DIR = "_memo";

const postService = new PostService(MEMO_DIR);

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
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = postService.getAllPosts();

  return posts.map((post: PostInterface) => ({
    slug: post.slug,
  }));
}
