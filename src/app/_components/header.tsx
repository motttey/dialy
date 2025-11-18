import Link from "next/link";

export function Header() {
  return (
    <section className="mx-auto mb-8 mt-16 flex max-w-4xl flex-col items-center border-b-4 border-[#22b8cf] pb-4 md:mb-12 md:flex-row md:justify-between">
      <Link href={`/`}>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:pr-8 md:text-5xl">
          モチヅ記
        </h1>
      </Link>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        A dialy written by{" "}
        <a
          href="https://motttey.github.io/"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          Tagosaku Mochiduki
        </a>
      </h4>
    </section>
  );
}
