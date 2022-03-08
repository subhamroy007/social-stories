import { StyleSheet, Text, View } from "react-native";
import { PollConfig } from "../../constants/types";

export function PollPreview({ answers, primaryColor, question }: PollConfig) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.qustionText, { backgroundColor: primaryColor }]}>
        {question}
      </Text>

      {answers.map((answer, index) => {
        return (
          <Text
            key={answer + "-" + index}
            style={[
              styles.answerText,
              {
                borderBottomLeftRadius: index === answers.length - 1 ? 12 : 0,
                borderBottomRightRadius: index === answers.length - 1 ? 12 : 0,
              },
            ]}
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
  qustionText: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    fontSize: 20,
    color: "white",
    fontFamily: "ubuntu-medium",
    padding: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },
  answerText: {
    fontFamily: "dosis-medium",
    fontSize: 20,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "black",
    padding: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
