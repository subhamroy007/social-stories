import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export interface AskMeAQuestionConfig {
  question: string;
  backgroundColor: string;
  foregroundColor: string;
}

export function AskMeAQuestionPreview({
  backgroundColor,
  foregroundColor,
  question,
}: AskMeAQuestionConfig) {
  return (
    <LinearGradient
      colors={["white", "white"]}
      style={{
        borderRadius: 12,
        flexWrap: "nowrap",
        padding: 18,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: "black",
          fontFamily: "ubuntu-medium",
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {question}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#909090",
          fontFamily: "ubuntu-regular",
          textAlign: "center",
          textAlignVertical: "center",
          backgroundColor: "#E9E9E9",
          marginTop: 18,
          padding: 18,
        }}
      >
        {"type question here..."}
      </Text>
    </LinearGradient>
  );
}
