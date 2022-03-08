import React, { useMemo, useRef, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import { WINDOW_WIDTH } from "../../constants/dimensions";
import Icon from "../global/Icon";

export interface VerticalBarProps {
  onSizeChange: (size: number) => void;
  style: StyleProp<ViewStyle>;
}

export const VerticalBar = React.memo<VerticalBarProps>(
  ({ onSizeChange, style }) => {
    const [offset, setOffset] = useState(0);
    const start = useRef(0);

    const dynamicStyles = useMemo<StyleProp<ViewStyle>>(() => {
      return {
        transform: [
          { translateY: offset },
          { scale: interpolate(offset, [0, -250], [1, 2]) },
        ],
      };
    }, [offset]);

    const dragGesture = Gesture.Pan()
      .averageTouches(true)
      .runOnJS(true)
      .onUpdate((e) => {
        const newOffset = Math.min(
          Math.max(e.translationY + start.current, -250),
          0
        );
        setOffset(newOffset);
      })
      .onEnd((e) => {
        start.current = offset;
        onSizeChange(
          interpolate(offset, [0, -250], [2, 10], Extrapolate.CLAMP)
        );
      });

    return (
      <View style={style}>
        <View
          style={{
            width: 2,
            height: 250,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        />
        <GestureDetector gesture={dragGesture}>
          <Animated.View
            style={[
              {
                bottom: 0.028 * WINDOW_WIDTH,
                left: -0.028 * WINDOW_WIDTH + 2,
              },
              dynamicStyles,
            ]}
          >
            <Icon
              name="circle"
              color="rgba(255, 255, 255, 0.6)"
              size={0.056 * WINDOW_WIDTH}
            />
          </Animated.View>
        </GestureDetector>
      </View>
    );
  },
  (prevProps, nextprops) => {
    return true;
  }
);

export default VerticalBar;
