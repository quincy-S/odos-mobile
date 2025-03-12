import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const scale = width / 375; // Base screen width (iPhone 11)

export function normalize(size) {
  return Math.round(PixelRatio.getFontScale() * size * scale);
}
