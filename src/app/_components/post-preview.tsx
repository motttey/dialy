import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";

// import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  description: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  // date,
  description,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} path="posts" />
      </div>
      <h3 className="mb-3 text-2xl font-bold leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {/*
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      */}
      <p className="mb-4 text-lg leading-relaxed">{description}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
