export function Header() {
  return (
    <section className="border-b-4 border-[#22b8cf] flex-col md:flex-row flex items-center md:justify-between pb-4 mt-16 mb-8 md:mb-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        モチヅ記
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A dialy written by{" "}
        <a
          href="https://motttey.github.io/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Tagosaku Mochiduki
        </a>
      </h4>
    </section>
  );
}
