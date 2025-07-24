import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";
import PostService from "@/lib/api";
import Link from "next/link";

const MEMO_DIR = "_memo";
const postService = new PostService(MEMO_DIR);

export default async function Index() {
  const memos = postService.getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        <h1 className="my-4 text-3xl font-bold">雑記</h1>
        <ul>
          {memos.map((memo) => (
            <li key={memo.slug} className="mb-2">
              <Link
                href={`/memo/${memo.slug}`}
                className="text-lg hover:underline"
              >
                {memo.title} [{memo.date.toLocaleString()}]
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
