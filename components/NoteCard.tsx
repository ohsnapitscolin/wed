import Card from "@/components/Card";
import React from "react";

const NoteCard = ({ className = "", children }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Card className={`mt-2 md:mt-3 relative flex flex-col !bg-lemongrass ${className}`}>
      <div className="py-[30px] px-10">
        <div className="content">{children}</div>
      </div>
    </Card>
  );
};

export default NoteCard;
