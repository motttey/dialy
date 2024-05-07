import Container from "@/app/_components/container";
import { Archives } from "@/app/_components/archives";
import { Header } from "@/app/_components/header";
import { PostBody } from "./_components/post-body";
import { getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const allPosts = getAllPosts();

  const recentPost = allPosts[0];

  const pastPosts = allPosts.slice(0);
  const firstContent = await markdownToHtml(recentPost.content || "");

  return (
    <main>
      <Container>
        <Header />
        <div className="grid grid-cols-1">
          <PostBody content={firstContent} />
        </div>
        {pastPosts.length > 0 && <Archives posts={pastPosts} />}
      </Container>
    </main>
  );
}
