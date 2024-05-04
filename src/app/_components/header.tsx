import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b-4">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 underline">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
    </div>
  );
};

export default Header;
