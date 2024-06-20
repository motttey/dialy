import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t-4 border-[#22b8cf] max-w-4xl mx-auto">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Mochidu-ki
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p className="mx-3 font-bold">
              © {new Date().getFullYear()} Tagosaku Mochiduki
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
