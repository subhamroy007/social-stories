import React, { useCallback } from "react";
import { Image, Pressable, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export interface ColorButtonProps {
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

const ColorButton = React.memo<ColorButtonProps>(
  ({ onPress, style }) => {
    const isPressed = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: withSpring(isPressed.value ? 0.8 : 1) }],
      };
    });

    const onPressIn = useCallback(() => {
      isPressed.value = true;
    }, []);

    const onPressOut = useCallback(() => {
      isPressed.value = false;
    }, []);

    return (
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={style}
      >
        <Animated.View style={animatedStyle}>
          <Image
            source={require("../../assets/images/colorpicker.png")}
            resizeMode="cover"
            style={{ width: 50, height: 50 }}
          />
        </Animated.View>
      </Pressable>
    );
  },
  (prevProps, nextProps) => {
    return true;
  }
);

export default ColorButton;
