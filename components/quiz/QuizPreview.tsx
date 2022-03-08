import { StyleSheet, Text, View } from "react-native";
import Icon from "../global/Icon";

export interface QuizConfig {
  question: string;
  options: string[];
  backgroundColor: string;
  correctOptionIndex: number;
}

export default function QuizPreview({
  backgroundColor,
  options,
  question,
  correctOptionIndex,
}: QuizConfig) {
  return (
    <View
      style={{
        borderRadius: 12,
        flexWrap: "nowrap",
      }}
    >
      <Text
        style={{
          fontFamily: "ubuntu-medium",
          fontSize: 22,
          color: "white",
          backgroundColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          padding: 18,
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {question}
      </Text>
      {options.map((option, index) => {
        return (
          <View
            key={option + "index"}
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 12,
              borderBottomLeftRadius: index === options.length - 1 ? 12 : 0,
              borderBottomRightRadius: index === options.length - 1 ? 12 : 0,
              borderBottomColor: "black",
              borderBottomWidth:
                index === options.length - 1 ? 0 : StyleSheet.hairlineWidth,
            }}
          >
            {index === correctOptionIndex ? (
              <Icon name="circle" size={20} />
            ) : (
              <Icon name="circle-thin" size={20} />
            )}
            <Text
              style={{
                fontSize: 20,
                fontFamily: "dosis-medium",
                textAlign: "center",
                textAlignVertical: "center",
                marginHorizontal: 8,
              }}
            >
              {option}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
