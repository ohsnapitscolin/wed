import React from "react";

interface PropTypes extends React.HTMLProps<HTMLDivElement> {}

const Card = ({ className = "", children }: PropTypes) => {
  return (
    <div
      className={`flex bg-pistachio rounded-2xl items-center justify-center border border-black ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;
