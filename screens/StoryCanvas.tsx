import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Pattern,
  Rect,
  Stop,
  SvgXml,
  Text,
  Use,
} from "react-native-svg";
import ColorButton from "../components/story/ColorButton";
import ColorMenu from "../components/story/ColorMenu";
import PaintBrushSection from "../components/story/PaintBrushSection";
import VerticalBar from "../components/story/VerticalBar";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants/dimensions";
import { STYLE } from "../constants/styles";

const GRADIENTS = [
  ["#0075FF", "#06FF6A"],
  ["#FF5CBE", "#FF6969"],
  ["#FB1DBD", "#59FFE1"],
  ["#FFE600", "#FF067E"],
  ["#2555FF", "#FF09E6"],
];

export interface StoryCanvasProps {}

export interface StoryCanvasState {
  currentBrushColor: string;
  currentBrushSize: number;
  currentBrushType: number;
  isPainting: boolean;
  paths: { color: string; size: number; type: number; path: string }[];
  currentBackGroundIndex: number;
}

export default function StoryCanvas() {
  const [state, setState] = useState<StoryCanvasState>({
    currentBrushColor: "green",
    currentBrushSize: 8,
    currentBrushType: 0,
    paths: [],
    isPainting: false,
    currentBackGroundIndex: 4,
  });

  const panGesture = Gesture.Pan()
    .averageTouches(true)
    .enableTrackpadTwoFingerGesture(true)
    .runOnJS(true)
    .onBegin(({ absoluteX, absoluteY }) => {
      setState((currentState) => {
        return {
          ...currentState,
          isPainting: true,
          paths: [
            ...currentState.paths,
            {
              color: currentState.currentBrushColor,
              path: `M ${absoluteX} ${absoluteY}`,
              size: currentState.currentBrushSize,
              type: currentState.currentBrushType,
            },
          ],
        };
      });
    })
    .onUpdate(({ absoluteX, absoluteY }) => {
      setState((currentState) => {
        const paths = currentState.paths;
        paths[paths.length - 1] = {
          ...paths[paths.length - 1],
          path: paths[paths.length - 1].path + ` L ${absoluteX} ${absoluteY}`,
        };

        return {
          ...currentState,
          paths,
        };
      });
    })
    .onEnd(() => {
      setState((currentState) => {
        return {
          ...currentState,
          isPainting: false,
        };
      });
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.controlsOverlal]}>
        <StatusBar hidden={true} />
        <Svg
          style={[STYLE.CONTAINER_2]}
          viewBox={`0 0 ${WINDOW_WIDTH} ${WINDOW_HEIGHT}`}
        >
          <Defs>
            <Pattern
              patternContentUnits="userSpaceOnUse"
              patternUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={16}
              height={16}
              viewBox="0 0 16 16"
              id="p1"
            >
              <Circle cx={8} cy={8} r={1} fill="red" />
              <Circle cx={7} cy={6} r={1} fill="red" />
              <Circle cx={6} cy={4} r={1} fill="red" />
              <Circle cx={4} cy={2} r={1} fill="red" />
              <Circle cx={5} cy={0} r={1} fill="red" />
              <Circle cx={2} cy={8} r={1} fill="red" />
            </Pattern>
            <LinearGradient id="grad1" x1={0} y1={0} x2={1} y2={2}>
              <Stop
                stopColor={GRADIENTS[state.currentBackGroundIndex][0]}
                offset={0}
              />
              <Stop
                stopColor={GRADIENTS[state.currentBackGroundIndex][1]}
                offset={1}
              />
            </LinearGradient>
            <G id="background1">
              <Rect
                x={0}
                y={0}
                width={WINDOW_WIDTH}
                height={WINDOW_HEIGHT}
                fill="url(#grad1)"
              />
            </G>
          </Defs>
          <Use href="#background1" />

          {state.paths.map((path, index) => {
            return (
              <Path
                d={path.path}
                stroke={path.color}
                strokeWidth={path.size}
                key={path.path + "-" + index}
                strokeOpacity={path.type === 1 ? 0.7 : 1}
                strokeDasharray={path.type === 2 ? [1, 0, 1] : undefined}
              />
            );
          })}
        </Svg>
        <ColorMenu
          onColorSelect={(color) => {
            setState((currentState) => {
              return {
                ...currentState,
                currentBrushColor: color,
              };
            });
          }}
          style={{ position: "absolute", bottom: 100 }}
        />
        <VerticalBar
          onSizeChange={(size: number) => {
            setState((currentState) => {
              return {
                ...currentState,
                currentBrushSize: size,
              };
            });
          }}
          style={{ position: "absolute", left: 24 }}
        />
        <ColorButton
          onPress={() => {
            setState((currentState) => {
              return {
                ...currentState,
                currentBackGroundIndex:
                  (currentState.currentBackGroundIndex + 1) % 5,
              };
            });
          }}
          style={{ position: "absolute", bottom: 16 }}
        />
        <PaintBrushSection
          style={{ position: "absolute", top: 24 }}
          onBrushChange={(index) => {
            setState((currentState) => {
              return {
                ...currentState,
                currentBrushType: index,
              };
            });
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  controlsOverlal: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: "transparent",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
