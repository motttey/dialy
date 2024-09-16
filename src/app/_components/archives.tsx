import { Post } from "@/interfaces/post";
import { PostPreview } from "@/app/_components/post-preview";
import { SectionSeparator } from "@/app/_components/section-separator";

type Props = {
  posts: Post[];
};

export function Archives({ posts }: Props) {
  return (
    <section>
      <div className="mx-auto max-w-4xl">
        <SectionSeparator></SectionSeparator>
        <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tighter md:text-2xl">
          Archives
        </h2>
        <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
