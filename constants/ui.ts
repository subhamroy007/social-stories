// Once your custom font has been loaded...
import { createIconSetFromFontello } from "@expo/vector-icons";
import fontelloConfig from "../font.config.json";
// Both the font name and files exported from Fontello are most likely called "fontello"
export const CustomIcon = createIconSetFromFontello(
  fontelloConfig,
  "icons",
  "icons"
);
