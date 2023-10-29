import Card from "@/components/Card";
import NextImage from "next/image";

import Flower from "@/public/images/flower.jpg";

import { ContentList, SectionContent } from "@/content";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import PhotoSection from "@/components/PhotoSection";
import Section from "@/components/Section";

const Navigation = ContentList.filter((c) => c.navigation).map(
  (c: SectionContent) => ({ title: c.title, id: c.key }),
);

export default function Home() {
  const router = useRouter();
  const { query } = router;

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navContainerRef = useRef(null);
  const navItemRefs = useRef({});

  const scrollTo = useCallback(() => {
    let verticalScrollPosition = 0;

    if (activeSection) {
      // Vertical calculations
      const targetSection = document.getElementById(activeSection);
      verticalScrollPosition =
        targetSection.getBoundingClientRect().top + window.pageYOffset;
    }

    const offset = 20;

    // Programmatic vertical scroll
    window.scrollTo({
      top: verticalScrollPosition - offset,
      behavior: "smooth",
    });
  }, [activeSection]);

  useEffect(() => {
    const sectionKeys = Navigation.map((m) => m.id);
    const key = Object.keys(query).find((key) => sectionKeys.includes(key));
    setActiveSection(key || null);
    if (!key) {
      scrollTo();
    }
  }, [query, scrollTo]);

  const setQuery = (param: string | null) => {
    void router.push(
      {
        pathname: router.pathname,
        query: param,
      },
      undefined,
      { shallow: true },
    );
  };

  useEffect(() => {
    scrollTo();
  }, [activeSection, scrollTo]);

  const allPins = useMemo(() => {
    return ContentList.reduce((acc, c) => {
      if (Array.isArray(c.pins)) {
        return acc.concat(c.pins);
      }
      return acc;
    }, []);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[-2]">
        <NextImage
          src={Flower}
          quality={100}
          layout="fill"
          placeholder="empty"
          objectFit="cover"
          alt=""
        />
      </div>

      <div className="fixed z-[999] lg:z-[1] max-w-[1750px] top-0 w-full flex flex-col lg:flex-row lg:items-start justify-between left-1/2 -translate-x-1/2 p-3 lg:p-5">
        <button
          className="w-full lg:w-[20%] group"
          onClick={() => setQuery(null)}
        >
          <Card className="px-4 py-8 lg:py-12 text-center font-pin text-4xl mb-3 lg:mb-0 hover:bg-white bg-white/50 lg:bg-pistachio/100 backdrop-blur">
            Colin & Lian
          </Card>
        </button>
        <div className="flex-1 shrink-0" />
        <div
          ref={navContainerRef}
          className="hidden lg:flex w-[20%] flex flex-col px-0"
        >
          {Navigation.map(({ title, id }) => {
            const active = activeSection === id;
            return (
              <button
                ref={(el) => (navItemRefs.current[id] = el)}
                key={id}
                onClick={() => setQuery(id)}
                className={`w-[225px] shrink-0 lg:w-full mr-4 lg:mr-0 lg:mb-4 last-of-type:m-0 ${
                  active && "underline"
                }`}
              >
                <Card className="px-4 py-6 lg:py-9 hover:bg-white">
                  {title}
                </Card>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative lg:z-[2] flex max-w-[1750px] flex-row mx-auto px-3 lg:px-5 pointer-events-none overflow-hidden">
        <div className="w-0 lg:w-[20%] flex flex-col" />
        <div className="w-full shrink-0 flex flex-col flex-1 lg:mx-5 pointer-events-auto">
          <div className="lg:hidden h-[120px]" />
          {ContentList.map((content) => (
            <Section
              key={content.key}
              className="mt-2 lg:mt-5"
              content={content}
            />
          ))}
        </div>
        <div className="w-0 lg:w-[20%] flex flex-col pointer-events-none" />
      </div>

      <div className="lg:hidden">
        <PhotoSection pins={allPins} />
      </div>
    </>
  );
}
