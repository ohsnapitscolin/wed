import Card from "@/components/Card";
import NextImage from "next/image";
import { PinImageConfig } from "@/content";
import PinImage from "@/components/PinImage";

interface PropTypes extends React.ReactNode {
  id: string;
  title: string;
  pins: Array<PinImageConfig>;
}

const SectionCard = ({ className, id, title, pins = [], children }: PropTypes) => {
  const hasBottomImage = pins.find(p => p.location === 'bottom');

  return (
    <div id={id} className={hasBottomImage && "mb-20 md:mb-52"}>
      <Card className={`relative flex flex-col ${className} overflow-visible`}>
        <div className=" border-b border-black w-full">
          <div className={"flex flex-row pb-3 justify-between pt-6 pb-3 px-8"}>
            <span>{title || ""}</span>
          </div>
        </div>
        <div className="px-8 pb-20 lg:px-16">
          <div className="content">{children}</div>
        </div>
        {pins.map((config, i) => (
          <PinImage key={i} config={config} />
        ))}
      </Card>

    </div>
  );
};

export default SectionCard;
