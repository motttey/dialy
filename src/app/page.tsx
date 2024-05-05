import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
import { Header } from "@/app/_components/header";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { PostBody } from "./_components/post-body";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const allPosts = getAllPosts();

  const recentPost = allPosts[0];

  const morePosts = allPosts.slice(0);
  const firstContent = await markdownToHtml(recentPost.content || "");

  return (
    <main>
      <Container>
        <Header />
        {/*
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        */}
        <div className="grid grid-cols-1">
          <PostBody content={firstContent} />
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
