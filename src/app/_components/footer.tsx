import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-4 border-t-4 border-[#22b8cf] text-center max-w-4xl mx-auto px-8 lg:px-16">
          <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center mb-4 lg:mb-8">
            Mochidu-ki
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center text-left">
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
