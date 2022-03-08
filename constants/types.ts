import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

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

export type IconName =
  | "star"
  | "star-empty"
  | "circle-thin"
  | "circle"
  | "art-brush-outline"
  | "art-brush";

export interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
