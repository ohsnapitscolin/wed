import Sections from "./sections";
import Notes from "./notes";

import Ben from "@/public/images/ben.jpg";
import { MDXProps } from "mdx/types";
import { StaticImageData } from "next/image";

export type PinImageConfig = {
  image: StaticImageData;
  location: "bottom" | "left" | "right";
  rotation: number;
  offset: number;
  overlap: number;
  size: number;
};

export type SectionContent = {
  key: string;
  title: string;
  Content: (props: MDXProps) => JSX.Element;
  Note?: (props: MDXProps) => JSX.Element;
  pins?: Array<PinImageConfig>;
  navigation: boolean;
  accordion: boolean;
};

export const ContentList: Array<SectionContent> = [
  {
    key: "welcome",
    title: "💕 We’re getting married!",
    Content: Sections.Welcome,
    pins: [
      {
        image: Ben,
        location: "bottom",
        rotation: 0,
        overlap: 50,
        offset: 50,
        size: 50,
      },
    ],
    navigation: false,
    accordion: false,
  },
  {
    key: "venue",
    title: "🥑 Our Venue",
    Content: Sections.Venue,
    Note: Notes.Venue,
    navigation: true,
    accordion: true,
  },
  {
    key: "accommodations",
    title: "🛏️ Accommodations",
    Content: Sections.Accommodations,

    Note: Notes.Accommodations,
    pins: [
      {
        image: Ben,
        location: "left",
        rotation: -15,
        overlap: 15,
        offset: 50,
        size: 100,
      },
      {
        image: Ben,
        location: "right",
        rotation: 25,
        overlap: 0,
        offset: 15,
        size: 25,
      },
    ],
    navigation: true,
    accordion: true,
  },
  {
    key: "travel",
    title: "🌎 Travel",
    Content: Sections.Travel,
    navigation: true,
    accordion: true,
  },
  {
    key: "details",
    title: "🕺 More Details",
    Content: Sections.Details,
    navigation: true,
    accordion: true,
  },
  {
    key: "todo",
    title: "🌴 Things to Do",
    Content: Sections.Todo,
    navigation: true,
    accordion: true,
  },
];
