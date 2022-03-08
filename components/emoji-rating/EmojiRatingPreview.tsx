import { Text, View } from "react-native";

export interface EmojiRatingConfig {
  question: string;
  backgroundColor: string;
  foregroundColor: string;
  emoji: string;
}

export default function EmojiRatingPreview({
  backgroundColor,
  emoji,
  foregroundColor,
  question,
}: EmojiRatingConfig) {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: 12,
        flexWrap: "nowrap",
        padding: 18,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: foregroundColor,
          fontFamily: "ubuntu-medium",
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {question}
      </Text>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginHorizontal: 12,
          marginBottom: 18,
          marginTop: 24,
          backgroundColor: "#E9E9E9",
          flexDirection: "row",
          width: 250,
        }}
      >
        <View style={{ width: 120, height: 4, backgroundColor: "red" }} />
        <Text
          style={{
            fontSize: 30,
            position: "absolute",
            top: -15,
            left: 105,
            fontFamily: "ubuntu-medium",
          }}
        >
          {emoji}
        </Text>
      </View>
    </View>
  );
}
