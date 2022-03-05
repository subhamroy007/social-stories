import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export interface ColorButtonProps {
  onTap: () => void;
  style: StyleProp<ViewStyle>;
}

export default function ColorButton({
  onTap,
  style,
}: Partial<ColorButtonProps>) {
  const animationData = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(animationData.value ? 0.8 : 1) }],
  }));

  const onPress = useCallback(() => {
    if (onTap) {
      onTap();
    }
  }, [onTap]);
  const onPressIn = useCallback(() => {
    animationData.value = true;
  }, []);
  const onPressOut = useCallback(() => {
    animationData.value = false;
  }, []);

  return (
    <Pressable
      onPressIn={onPressIn}
      onPress={onPress}
      onPressOut={onPressOut}
      android_disableSound={true}
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          style={[style, styles.container]}
          colors={["red", "green", "blue"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.25, 0.5, 1.0]}
        ></LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
