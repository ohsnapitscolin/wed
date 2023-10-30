import Sections from "./sections";
import Notes from "./notes";

import Bandana from "@/public/images/bandana.jpg";
import Bear from "@/public/images/bear.jpg";
import Ben from "@/public/images/ben.jpg";
import Disney from "@/public/images/disney.jpg";
import Durham from "@/public/images/durham.jpg";
import Engagement from "@/public/images/engagement.jpg";
import Graduation from "@/public/images/graduation.jpg";
import Hawaii from "@/public/images/hawaii.jpg";
import Letchworth from "@/public/images/letchworth.jpg";
import Nashville from "@/public/images/nashville.jpg";
import Park from "@/public/images/park.jpg";
import Polaroid from "@/public/images/polaroid.jpg";

import { MDXProps } from "mdx/types";
import { StaticImageData } from "next/image";

export type PinImageConfig = {
  image: StaticImageData;
  location: "bottom" | "left" | "right";
  rotation: number;
  offset: number;
  overlap: number;
  size: number;
  color: string;
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
        image: Polaroid,
        location: "bottom",
        rotation: -17,
        overlap: 35,
        offset: 50,
        size: 30,
        color: "blue",
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
    pins: [
      {
        image: Ben,
        location: "right",
        rotation: 5,
        overlap: 10,
        offset: 10,
        size: 40,
        color: "black",
      },
      {
        image: Nashville,
        location: "left",
        rotation: -4,
        overlap: 5,
        offset: 60,
        size: 60,
        color: "red",
      },
    ],
  },
  {
    key: "accommodations",
    title: "🛏️ Accommodations",
    Content: Sections.Accommodations,

    Note: Notes.Accommodations,
    pins: [
      {
        image: Bandana,
        location: "left",
        rotation: -3,
        overlap: 2,
        offset: 50,
        size: 25,
        color: "green",
      },
      {
        image: Hawaii,
        location: "right",
        rotation: 25,
        overlap: 0,
        offset: 15,
        size: 40,
        color: "yellow",
      },
      {
        image: Engagement,
        location: "right",
        rotation: 2,
        overlap: 10,
        offset: 75,
        size: 40,
        color: "orange",
      },
      {
        image: Park,
        location: "left",
        rotation: 10,
        overlap: 2,
        offset: 98,
        size: 25,
        color: "pink",
      },
    ],
    navigation: true,
    accordion: true,
  },
  {
    key: "travel",
    title: "🌎 Travel",
    Content: Sections.Travel,
    pins: [
      {
        image: Durham,
        location: "right",
        rotation: -1,
        overlap: 5,
        offset: 25,
        size: 25,
        color: "grey",
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
        image: Graduation,
        location: "left",
        rotation: 10,
        overlap: 5,
        offset: 50,
        size: 30,
        color: "black",
      },
      {
        image: Disney,
        location: "right",
        rotation: -12,
        overlap: 5,
        offset: 85,
        size: 40,
        color: "red",
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
        image: Bear,
        location: "right",
        rotation: 3,
        overlap: 25,
        offset: 30,
        size: 40,
        color: "green",
      },
      {
        image: Letchworth,
        location: "left",
        rotation: -6,
        overlap: 5,
        offset: 65,
        size: 40,
        color: "orange",
      },
    ],
    navigation: true,
    accordion: true,
  },
];
