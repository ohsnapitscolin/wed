import Card from "@/components/Card";

const NoteCard = ({ className = "", children }: React.ReactNode) => {
  return (
    <Card className={`mt-5 relative flex flex-col !bg-lemongrass ${className}`}>
      <div className="py-[30px] px-10">
        <div className="content">{children}</div>
      </div>
    </Card>
  );
};

export default NoteCard;
