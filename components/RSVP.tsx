import Card from "@/components/Card";

const RSVP = ({ className }) => {
  return (
    <Card
      className={`px-8 lg:px-10 py-6 lg:py-8 flex-col !items-start lg:!bg-lemongrass ${className}`}
    >
      <h3 className="font-pin text-[32px] lg:text-[42px] mb-4">RSVP</h3>
      <p>
        ✔️ Please{" "}
        <a
          href="https://www.zola.com/wedding/colinandlian/rsvp"
          target="__blank"
          className="underline"
        >
          RSVP at this link
        </a>
        .
      </p>
    </Card>
  );
};

export default RSVP;
