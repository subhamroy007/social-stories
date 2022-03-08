import React from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  COLORS,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../constants/dimensions";

export interface ColorCircleProps {
  color: string;
  onPress: () => void;
}

export interface ColorMenuProps {
  onColorSelect: (color: string) => void;
  style: StyleProp<ViewStyle>;
}

export function ColorCircle({ color, onPress }: ColorCircleProps) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: Math.floor(0.056 * WINDOW_WIDTH),
          height: Math.floor(0.056 * WINDOW_WIDTH),
          borderRadius: Math.floor(0.028 * WINDOW_WIDTH),
          backgroundColor: color,
        }}
      ></View>
    </Pressable>
  );
}

export interface ColorGroupProps {
  index: number;
  onColorSelect: (color: string) => void;
}

export function ColorGroup({ index, onColorSelect }: ColorGroupProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingVertical: 8,
        width: WINDOW_WIDTH,
      }}
    >
      {COLORS.slice(index, index + 10).map((color) => {
        return (
          <ColorCircle
            color={color}
            key={color}
            onPress={() => {
              onColorSelect(color);
            }}
          />
        );
      })}
    </View>
  );
}

const ColorMenu = React.memo<ColorMenuProps>(
  ({ onColorSelect, style }) => {
    return (
      <View style={[style, { width: WINDOW_WIDTH, height: 60 }]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          horizontal={true}
          style={{ flex: 1 }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <ColorGroup index={0} onColorSelect={onColorSelect} />
          <ColorGroup index={10} onColorSelect={onColorSelect} />
          <ColorGroup index={20} onColorSelect={onColorSelect} />
          <ColorGroup index={30} onColorSelect={onColorSelect} />
          <ColorGroup index={40} onColorSelect={onColorSelect} />
        </ScrollView>
      </View>
    );
  },
  (prevprops, nextProps) => {
    return true;
  }
);

export default ColorMenu;
