import { PinImageConfig } from "@/content";
import PinImage from "@/components/PinImage";

interface PropTypes extends React.ReactNode {
  pins: Array<PinImageConfig>;
}

const PhotoSection = ({ pins = [] }: PropTypes) => {
  return (
    <div className="h-screen flex w-full items-center justify-center overflow-hidden">
      <div className="relative h-3/4 w-1">
        {pins.map((config, i) => (
          <PinImage key={i} config={config} section={true} />
        ))}
      </div>
    </div>
  );
};

export default PhotoSection;
