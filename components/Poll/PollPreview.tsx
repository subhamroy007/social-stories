import { StyleSheet, Text, View } from "react-native";
import { PollConfig } from "../../constants/types";

export function PollPreview({ answers, primaryColor, question }: PollConfig) {
  return (
    <View style={[styles.container]}>
      <Text
        style={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: "100%",
          backgroundColor: primaryColor,
          fontSize: 20,
          color: "white",
          fontFamily: "ubuntu-medium",
          padding: 12,
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {question}
      </Text>

      {answers.map((answer, index) => {
        return (
          <Text
            key={answer + "-" + index}
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
              textAlign: "center",
              textAlignVertical: "center",
            }}
          >
            {answer}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 250,
  },
});
