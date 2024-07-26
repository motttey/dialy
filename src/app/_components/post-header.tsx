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
    <div className="max-w-3xl mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto">
        <div className="block md:hidden mb-6">
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
