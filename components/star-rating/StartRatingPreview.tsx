import { Text, View } from "react-native";
import Icon from "../global/Icon";

export interface StarRatingConfig {
  question: string;
  backgroundColor: string;
  foregroundColor: string;
}

export default function StarRatingPreview({
  backgroundColor,
  foregroundColor,
  question,
}: StarRatingConfig) {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: 12,
        flexWrap: "nowrap",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: foregroundColor,
          fontFamily: "ubuntu-medium",
          textAlign: "center",
          textAlignVertical: "center",
          paddingHorizontal: 18,
          marginTop: 18,
        }}
      >
        {question}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingVertical: 18,
          paddingHorizontal: 9,
        }}
      >
        <Icon
          name="star"
          color="yellow"
          size={40}
          style={{ marginHorizontal: 9 }}
        />
        <Icon
          name="star"
          color="yellow"
          size={40}
          style={{ marginHorizontal: 9 }}
        />
        <Icon
          name="star"
          color="yellow"
          size={40}
          style={{ marginHorizontal: 9 }}
        />
        <Icon
          name="star"
          color="yellow"
          size={40}
          style={{ marginHorizontal: 9 }}
        />
        <Icon
          name="star"
          color="yellow"
          size={40}
          style={{ marginHorizontal: 9 }}
        />
      </View>
    </View>
  );
}
