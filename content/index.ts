import Sections from "./sections";
import Notes from "./notes";

import Babies from "@/public/images/babies.png";
import BBQ from "@/public/images/bbq.png";
import Ben from "@/public/images/ben.png";
import Durham from "@/public/images/durham.png";
import KingTides from "@/public/images/kingtides.png";
import Nashville from "@/public/images/nashville.png";
import Joshua from "@/public/images/joshua.png";
import Then from "@/public/images/then.png";
import Now from "@/public/images/now.png";

import { MDXProps } from "mdx/types";
import { StaticImageData } from "next/image";

export type PinImageConfig = {
  image: StaticImageData;
  location: "bottom" | "left" | "right";
  rotation: number;
  offset: number;
  overlap: number;
  size: number;
  magnet?: {
    color?: string;
    offset?: number;
  };
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
        image: Now,
        location: "bottom",
        rotation: -12,
        overlap: 25,
        offset: 50,
        size: 15,
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
        rotation: -12,
        overlap: 0,
        offset: 10,
        size: 35,
      },
      {
        image: Nashville,
        location: "right",
        rotation: -7,
        overlap: 10,
        offset: 35,
        size: 60,
      },
      {
        image: Durham,
        location: "right",
        rotation: 2,
        overlap: 10,
        offset: 70,
        size: 35,
      },
      {
        image: Joshua,
        location: "left",
        rotation: 15,
        overlap: 5,
        offset: 95,
        size: 35,
      },
    ],
    navigation: true,
    accordion: true,
  },
  {
    key: "travel",
    title: "🌎 Travel",
    Content: Sections.Travel,
    Note: Notes.Travel,
    pins: [
      {
        image: BBQ,
        location: "right",
        rotation: -8,
        overlap: 5,
        offset: 40,
        size: 60,
      },
    ],
    navigation: true,
    accordion: true,
  },
  {
    key: "details",
    title: "🕺 More Details",
    Content: Sections.Details,
    pins: [
      {
        image: KingTides,
        location: "left",
        rotation: 5,
        overlap: 7,
        offset: 50,
        size: 60,
      },
    ],
    navigation: true,
    accordion: true,
  },
  {
    key: "todo",
    title: "🌴 Things to Do",
    Content: Sections.Todo,
    pins: [
      {
        image: Babies,
        location: "right",
        rotation: -12,
        overlap: 15,
        offset: 30,
        size: 30,
        magnet: {
          offset: 65,
        },
      },
      {
        image: Then,
        location: "right",
        rotation: 15,
        overlap: 150,
        offset: 95,
        size: 15,
      },
    ],
    navigation: true,
    accordion: true,
  },
];
