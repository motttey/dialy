import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("flex shadow-sm rounded-lg", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1000}
      height={600}
      unoptimized={true}
      priority={true}
    />
  );
  return (
    <div className="mx-auto flex max-w-[900px] items-center justify-center overflow-hidden rounded-lg sm:h-64 md:h-72 lg:h-96">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
