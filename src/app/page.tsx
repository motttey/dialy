import { Archives } from "@/app/_components/archives";
import Container from "@/app/_components/container";
import CoverImage from "@/app/_components/cover-image";
import { Header } from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import PostService from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

const postService = new PostService();

export default async function Index() {
  const allPosts = postService.getAllPosts();
  const sortedList = [...allPosts].sort((a, b) =>
    a.title > b.title ? (a.title === b.title ? 0 : -1) : 1,
  );
  const recentPost = sortedList[0];

  const pastPosts = allPosts.slice(0);
  const firstContent = await markdownToHtml(recentPost.content || "");

  return (
    <main>
      <Container>
        <Header />
        <div className="grid grid-cols-1">
          <CoverImage
            slug={recentPost.slug}
            title={recentPost.title}
            src={recentPost.coverImage}
            path="posts"
          />
          <PostBody content={firstContent} />
        </div>
        {pastPosts.length > 0 && <Archives posts={pastPosts} />}
      </Container>
    </main>
  );
}
