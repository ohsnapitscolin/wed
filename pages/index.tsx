import Card from "@/components/Card";
import NextImage from "next/image";

import Flower from "@/public/images/flower.jpg";

import { ContentList, SectionContent } from "@/content";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import PhotoSection from "@/components/PhotoSection";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import RSVP from "@/components/RSVP";

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
    <div className="relative lg:pb-80 overflow-hidden">
      <div className="fixed w-screen h-screen top-0 z-[-2]">
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
        <div className="w-full flex flex-col lg:w-[20%] gap-4">
          <button className="group" onClick={() => setQuery(null)}>
            <Card className="px-4 py-8 lg:py-12 text-center font-pin text-[32px] md:text-[42px] mb-3 bg-white/40 lg:mb-0 lg:bg-pistachio/100 lg:hover:bg-white backdrop-blur">
              Colin & Lian
            </Card>
          </button>
          <RSVP className="hidden lg:flex" />
        </div>
        <div className="flex-1 shrink-0" />
        <div
          ref={navContainerRef}
          className="hidden lg:flex w-[20%] flex flex-col px-0"
        >
          {Navigation.map(({ title, id }) => {
            return (
              <button
                ref={(el) => (navItemRefs.current[id] = el)}
                key={id}
                onClick={() => setQuery(id)}
                className={`w-[225px] shrink-0 lg:w-full mr-4 lg:mr-0 lg:mb-3`}
              >
                <Card className="px-4 py-6 lg:py-9 hover:bg-white bg-pistachio">
                  {title}
                </Card>
              </button>
            );
          })}
          <a
            href="https://www.zola.com/wedding/colinandlian/registry"
            target="__blank"
          >
            <Card className="px-4 lg:py-9 hover:bg-white">💝 Registry</Card>
          </a>
        </div>
      </div>

      <div className="relative lg:z-[2] flex max-w-[1750px] flex-row mx-auto px-3 lg:px-5 pointer-events-none">
        <div className="w-0 lg:w-[20%] flex flex-col" />
        <div className="w-full shrink-0 flex flex-col flex-1 lg:mx-5 pointer-events-auto">
          <div className="lg:hidden h-[132px] md:h-[148px]" />
          <RSVP className="flex lg:hidden" />
          {ContentList.map((content, index) => (
            <Section
              key={content.key}
              className={`mt-[6px] lg:mt-5 ${index === 0 && "bg-lemongrass"}`}
              content={content}
            />
          ))}
          <a
            href="https://www.zola.com/wedding/colinandlian/registry"
            target="__blank"
          >
            <Card className="lg:hidden px-8 py-6 hover:bg-white !justify-start mt-[6px]">
              💝 Registry
            </Card>
          </a>
        </div>
        <div className="w-0 lg:w-[20%] flex flex-col pointer-events-none" />
      </div>

      <div className="lg:hidden">
        <PhotoSection pins={allPins} />
      </div>
      <Footer />
    </div>
  );
}
