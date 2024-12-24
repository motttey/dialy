import { Archives } from "@/app/_components/archives";
import Container from "@/app/_components/container";
import CoverImage from "@/app/_components/cover-image";
import { Header } from "@/app/_components/header";
// import { PostBody } from "@/app/_components/post-body";
import { getAllPosts } from "@/lib/api";
// import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const allPosts = getAllPosts();
  const sortedList = [...allPosts].sort((a, b) =>
    a.title > b.title ? (a.title === b.title ? 0 : -1) : 1,
  );
  const recentPost = sortedList[0];

  const pastPosts = allPosts.slice(0);
  // const firstContent = await markdownToHtml(recentPost.content || "");

  return (
    <main>
      <Container>
        <Header />
        <div className="grid grid-cols-1">
          <CoverImage
            slug={recentPost.slug}
            title={recentPost.title}
            src={recentPost.coverImage}
          />
          {/* <PostBody content={firstContent} /> */}
          <div className={"mx-auto max-w-full lg:max-w-4xl"}>
            終了です. さようなら
          </div>
        </div>
        {pastPosts.length > 0 && <Archives posts={pastPosts} />}
      </Container>
    </main>
  );
}
