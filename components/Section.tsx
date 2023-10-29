import Card from "@/components/Card";
import { SectionContent } from "@/content";
import PinImage from "@/components/PinImage";
import NoteCard from "@/components/NoteCard";
import * as Accordion from "@radix-ui/react-accordion";

interface PropTypes {
  className: string;
  content: SectionContent;
}

const Section = ({ className, content }: PropTypes) => {
  const { accordion } = content;
  return (
    <>
      {accordion && (
        <div className="block lg:hidden">
          <SectionAccordion className={className} content={content} />
        </div>
      )}
      <div className={`${accordion ? "hidden" : "block"} lg:block`}>
        <SectionCard className={className} content={content} />
      </div>
    </>
  );
};

const SectionCard = ({ className, content }: PropTypes) => {
  const { key, title, pins, Content, Note } = content;

  const hasBottomImage = pins?.find((p) => p.location === "bottom");

  return (
    <div id={key} className={hasBottomImage && "mb-24 lg:mb-52"}>
      <Card className={`relative flex flex-col ${className} overflow-visible`}>
        <div className="w-full flex flex-row pb-3 pt-6 pb-3 px-8">
          <span>{title || ""}</span>
        </div>
        <div className="px-8 pb-20 lg:px-16 border-t border-black w-full">
          <div className="content">
            <Content />
          </div>
          {pins?.map((config, i) => <PinImage key={i} config={config} />)}
        </div>
      </Card>
      {Note && (
        <NoteCard>
          <Note />
        </NoteCard>
      )}
    </div>
  );
};

const SectionAccordion = ({ className, content }: PropTypes) => {
  const { title, Content, Note } = content;

  return (
    <Accordion.Root className="group" type="single" collapsible>
      <Accordion.Item className="group" value="item-1">
        <Card className={`relative flex flex-col ${className} overflow-hidden`}>
          <Accordion.Trigger className="w-full group">
            <div className="flex flex-row justify-between pb-3 pt-6 pb-3 px-8">
              <span>{title || ""}</span>
              <span className="group-data-[state=open]:hidden group-data-[state=closed]:block">
                +
              </span>
              <span className="group-data-[state=open]:block group-data-[state=closed]:hidden">
                -
              </span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-b-2xl overflow-hidden">
            <div className="px-8 pb-20 lg:px-16 border-t border-black w-full">
              <div className="content">
                <Content />
              </div>
            </div>
          </Accordion.Content>
        </Card>

        {Note && (
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-2xl overflow-hidden">
            <NoteCard>
              <Note />
            </NoteCard>
          </Accordion.Content>
        )}
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Section;
