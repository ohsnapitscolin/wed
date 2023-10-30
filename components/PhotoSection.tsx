import { PinImageConfig } from "@/content";
import PinImage from "@/components/PinImage";
import { useEffect, useState } from "react";

interface PropTypes extends React.HTMLProps<HTMLDivElement> {
  pins: Array<PinImageConfig>;
}

const PhotoSection = ({ pins = [] }: PropTypes) => {
  const [randomPins, setRandomPins] = useState(null);

  useEffect(() => {
    setRandomPins(
      pins.map((p) => {
        return {
          ...p,
          offset: Math.random() * 100 - 15,
          overlap: Math.random() * 50,
        };
      }),
    );
  }, [pins]);

  if (!randomPins) return null;

  return (
    <div className="h-screen flex w-full items-center justify-center overflow-hidden">
      <div className="relative h-1/2 w-1/4">
        {randomPins.map((config, i) => (
          <PinImage key={i} config={config} section={true} />
        ))}
      </div>
    </div>
  );
};

export default PhotoSection;
