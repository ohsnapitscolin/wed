import Draggable from "react-draggable";

const Magnet = ({ color, className = '' }: { color: string, className?: string}) => {
  return (
    <Draggable>
      <div
        className={`absolute rounded-full h-5 w-5 ${className}`}
        style={{ backgroundColor: color }}
      />
    </Draggable>
  );
};

export default Magnet;
