import CoverImage from "../_components/cover-image";
import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import PostService from "@/lib/api";
import Link from "next/link";

const MEMO_DIR = "_memo";
const postService = new PostService(MEMO_DIR);

export default async function Index() {
  const slug = "dora-esekai-monogatari";
  const memo = postService.getPostBySlug(slug);

  // const firstContent = await markdownToHtml(recentPost.content || "");

  return (
    <main>
      <Container>
        <Header />
        <div className="mb-5">
          <CoverImage
            slug={slug}
            title={memo.title}
            path="memo"
            src={memo.coverImage}
          />
        </div>
        <h3 className="mb-3 text-2xl font-bold leading-snug">
          <Link href={`/memo/${slug}`} className="hover:underline">
            {memo.title}
          </Link>
        </h3>
      </Container>
    </main>
  );
}
