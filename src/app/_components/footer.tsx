import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="mx-auto max-w-4xl border-t-4 border-[#22b8cf] px-8 py-4 text-center lg:px-16">
          <h3 className="mb-4 text-center text-2xl font-bold leading-tight tracking-tighter lg:mb-8 lg:text-[1.5rem]">
            Mochidu-ki
          </h3>
          <div className="flex flex-col items-center justify-center text-left lg:flex-row">
            <p className="font-bold">
              © {new Date().getFullYear()} Tagosaku Mochiduki
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
