import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  // date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, author }: Props) {
  return (
    <div className="mx-auto max-w-3xl">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto">
        <div className="mb-6 block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/*
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        */}
      </div>
    </div>
  );
}
