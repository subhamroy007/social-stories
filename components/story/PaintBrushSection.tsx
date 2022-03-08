import React, { useCallback, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { WINDOW_WIDTH } from "../../constants/dimensions";
import Icon from "../global/Icon";

export interface PaintBrushSectionProps {
  style: StyleProp<ViewStyle>;
  onBrushChange: (brushIndex: number) => void;
}

const PaintBrushSection = React.memo<PaintBrushSectionProps>(
  ({ style, onBrushChange }) => {
    const [brushIndex, setBrushIndex] = useState(0);

    const onBrushClick = useCallback(
      (index) => {
        setBrushIndex(index);
        onBrushChange(index);
      },
      [onBrushChange]
    );

    return (
      <View
        style={[
          style,
          {
            width: WINDOW_WIDTH,
            flexDirection: "row",
            flexWrap: "nowrap",
            padding: 8,
            alignItems: "center",
            justifyContent: "space-evenly",
          },
        ]}
      >
        {brushIndex === 0 ? (
          <Icon name="art-brush" color="white" />
        ) : (
          <Icon
            name="art-brush-outline"
            color="white"
            onPress={() => {
              onBrushClick(0);
            }}
          />
        )}
        {brushIndex === 1 ? (
          <Icon name="art-brush" color="white" />
        ) : (
          <Icon
            name="art-brush-outline"
            color="white"
            onPress={() => {
              onBrushClick(1);
            }}
          />
        )}
        {brushIndex === 2 ? (
          <Icon name="art-brush" color="white" />
        ) : (
          <Icon
            name="art-brush-outline"
            color="white"
            onPress={() => {
              onBrushClick(2);
            }}
          />
        )}
      </View>
    );
  },
  (prevProps, nextProps) => {
    return true;
  }
);

export default PaintBrushSection;
