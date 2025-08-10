import Container from "@/app/_components/container";
import DateFormatter from "@/app/_components/date-formatter";
import { Header } from "@/app/_components/header";
import PostService from "@/lib/api";
import Image from "next/image";
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
            <li key={memo.slug} className="mb-4">
              <Link
                className="flex items-center gap-4 text-lg hover:no-underline"
                href={`/memo/${memo.slug}`}
              >
                <Image
                  className="rounded-lg object-cover"
                  src={
                    memo.coverImage ||
                    "https://motttey.github.io/404notfound.webp"
                  }
                  alt={`Cover Image for ${memo.title}`}
                  width={150}
                  height={80}
                  unoptimized={true}
                />
                <div className="flex flex-col">
                  <span className="font-bold hover:underline">
                    {memo.title}
                  </span>
                  <DateFormatter dateString={memo.date} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
