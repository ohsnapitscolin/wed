import React from "react";

import Sections from "./sections";
import Notes from "./notes";

import Ben from "@/public/images/ben.jpg";

export type PinImageConfig = {
  image: string;
  location: "bottom" | "left" | "right";
  rotation: number;
  offset: number;
  overlap?: number;
  size: number;
};

export type SectionContent = {
  key: string;
  title: string;
  type: "section";
  Content: React.ReactNode;
  pins?: Array<PinImageConfig>;
  navigation: boolean;
};

export type NoteContent = {
  key: string;
  type: "note";
  Content: React.ReactNode;
};

type Content = SectionContent | NoteContent;

export const ContentList: Array<Content> = [
  {
    key: "welcome",
    title: "💕 We’re getting married!",
    type: "section",
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
  },
  {
    key: "venue",
    title: "🥑 Our Venue",
    type: "section",
    Content: Sections.Venue,
    navigation: true,
  },
  {
    key: "venue-note",
    type: "note",
    Content: Notes.Venue,
  },
  {
    key: "accommodations",
    title: "🛏️ Accommodations",
    type: "section",
    Content: Sections.Accommodations,
    navigation: true,
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
  },
  {
    key: "accommodations-note",
    type: "note",
    Content: Notes.Accommodations,
  },
  {
    key: "travel",
    title: "🌎 Travel",
    type: "section",
    Content: Sections.Travel,
    navigation: true,
  },
  {
    key: "details",
    title: "🌴 Things to Do",
    type: "section",
    Content: Sections.Details,
    navigation: true,
  },
];
