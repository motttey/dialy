// import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        モチヅ記
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A dialy written by {" "}
        <a
          href="https://motttey.github.io/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Tagosaku Mochiduki
        </a>
        {/* and {CMS_NAME}. */}
      </h4>
    </section>
  );
}
