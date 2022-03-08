import { Pressable, View } from "react-native";
import { IconProps } from "../../constants/types";
import { CustomIcon } from "../../constants/ui";

export default function Icon({ color, name, size, style, onPress }: IconProps) {
  size = size ? size : 24;
  color = color ? color : "black";

  return (
    <Pressable style={style} onPress={onPress}>
      <CustomIcon name={name} size={size} color={color} />
    </Pressable>
  );
}
