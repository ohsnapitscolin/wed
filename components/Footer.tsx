import Card from "@/components/Card";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999]">
      <Card className="bg-white/40 backdrop-blur md:bg-white px-6 py-3 m-5">
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <span>
            © 2024 Site designed/developed by Lian Fumerton-Liu & Colin Dunn
          </span>
          <span className="hidden lg:block">Last updated 02.18.24</span>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
