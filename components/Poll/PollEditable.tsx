import { useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { PollConfig } from "../../constants/types";

export interface PollEditableProps extends PollConfig {
  onQuestionChange: (question: string) => void;
  onAnswerChange: (answer: string, index: number) => void;
}

export default function PollEditable({
  answers,
  primaryColor,
  question,
  onAnswerChange,
  onQuestionChange,
}: PollEditableProps) {
  const animationData = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(animationData.value ? 0.8 : 1, undefined, () => {
          if (animationData.value) {
            animationData.value = false;
          }
        }),
      },
    ],
  }));

  useEffect(() => {
    animationData.value = true;
  }, [primaryColor]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TextInput
        style={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: "100%",
          backgroundColor: primaryColor,
          fontSize: 20,
          color: "white",
          fontFamily: "ubuntu-medium",
          padding: 12,
        }}
        textAlign="center"
        textAlignVertical="center"
        multiline={true}
        value={question}
        maxLength={50}
        onChangeText={onQuestionChange}
      />
      {answers.map((answer, index) => {
        return (
          <TextInput
            key={answer + "-" + index}
            value={answer}
            style={{
              fontFamily: "dosis-medium",
              fontSize: 20,
              width: "100%",
              backgroundColor: "white",
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: "black",
              padding: 12,
              borderBottomLeftRadius: index === answers.length - 1 ? 12 : 0,
              borderBottomRightRadius: index === answers.length - 1 ? 12 : 0,
            }}
            multiline={true}
            maxLength={50}
            onChangeText={(text) => {
              onAnswerChange(text, index);
            }}
          />
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 250,
  },
});
