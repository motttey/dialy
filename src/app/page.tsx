import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { PostBody } from "./_components/post-body";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(0);
  const content = await markdownToHtml(heroPost.content || "");

  return (
    <main>
      <Container>
        <Intro />
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
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <PostBody content={content} />
      </Container>
    </main>
  );
}
