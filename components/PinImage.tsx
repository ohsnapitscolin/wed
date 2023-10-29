import NextImage from "next/image";
import Draggable from "react-draggable";
import { PinImageConfig } from "@/content";
import { useContext, useState } from "react";
import { LayoutContext } from "@/context/layout";

const PinImage = ({
  config,
  section = false,
}: {
  config: PinImageConfig;
  section?: boolean;
}) => {
  const { setZIndex, breakpoint } = useContext(LayoutContext);
  const [zIndex, setLocalZIndex] = useState(1);

  const [dragging, setDragging] = useState(false);

  const { location, rotation, image, overlap, offset, size } = config;

  let style: React.CSSProperties = {
    position: "absolute",
    zIndex,
    width: `${scaleSize(size, breakpoint !== "lg" ? 2 : 1)}vw`,
    maxWidth: image.width,
    pointerEvents: "none",
  };

  switch (location) {
    case "bottom":
      style.bottom = 0;
      style.left = `${offset}%`;
      style.transform = `translate(-50%, ${100 - overlap}%)`;
      break;
    case "right":
      style.right = 0;
      style.top = `${offset}%`;
      style.transform = `translate(${100 - overlap}%, -50%)`;
      break;
    case "left":
      style.left = 0;
      style.top = `${offset}%`;
      style.transform = `translate(-${100 - overlap}%, -50%)`;
      break;
  }

  const handleDragStart = () => {
    setDragging(true);
    setZIndex((prevState) => {
      const newIndex = prevState + 1;
      setLocalZIndex(newIndex);
      return newIndex;
    });
  };

  return (
    <div
      style={style}
      className={`${
        section
          ? location === "bottom" && "hidden"
          : location !== "bottom" && "hidden lg:block"
      }`}
    >
      <Draggable onStart={handleDragStart} onStop={() => setDragging(false)}>
        <div>
          <div
            className="relative"
            style={{
              transform: `rotate(${rotation}deg)`,
              cursor: dragging ? "grabbing" : "grab",
              pointerEvents: "auto",
            }}
          >
            <NextImage
              src={image}
              quality={100}
              placeholder="empty"
              objectFit="cover"
              draggable={false}
              alt=""
            />
            <div
              className="rounded-full absolute h-5 w-5 top-5 left-1/2"
              style={{ backgroundColor: "black" }}
            />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

function scaleSize(size: number, scale: number) {
  size = Math.max(0, Math.min(100, size));
  const min = 0.125 * scale;
  const max = 0.25 * scale;
  return (min + (max - min) * (size / 100)) * 100;
}

export default PinImage;
