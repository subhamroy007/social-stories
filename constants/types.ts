import { ReactNode } from "react";

export interface StickerProps {
  children: ReactNode;
}

export interface PollConfig {
  question: string;
  primaryColor: string;
  answers: string[];
}

export interface StickerConfig {
  scale: number;
  rotation: number;
  translation: { x: number; y: number };
}

export type StickerType = {
  type: "Poll";
  generic?: StickerConfig;
  specifc: PollConfig;
};

export interface CreateStoryScreenState {
  stickers: StickerType[];
}
