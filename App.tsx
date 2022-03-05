import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BlankScreen from "./components/examples/BlankScreen";
import { STYLE } from "./constants/styles";

export default function App() {
  const [loaded, error] = useFonts({
    "dancing-script-bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "dancing-script-medium": require("./assets/fonts/DancingScript-Medium.ttf"),
    "dancing-script-regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "dancing-script-semi-bold": require("./assets/fonts/DancingScript-SemiBold.ttf"),
    "dosis-bold": require("./assets/fonts/Dosis-Bold.ttf"),
    "dosis-extra-bold": require("./assets/fonts/Dosis-ExtraBold.ttf"),
    "dosis-extra-light": require("./assets/fonts/Dosis-ExtraLight.ttf"),
    "dosis-light": require("./assets/fonts/Dosis-Light.ttf"),
    "dosis-medium": require("./assets/fonts/Dosis-Medium.ttf"),
    "dosis-regular": require("./assets/fonts/Dosis-Regular.ttf"),
    "dosis-semi-bold": require("./assets/fonts/Dosis-SemiBold.ttf"),
    hubballi: require("./assets/fonts/Hubballi-Regular.ttf"),
    "raleway-black": require("./assets/fonts/Raleway-Black.ttf"),
    "raleway-black-italic": require("./assets/fonts/Raleway-BlackItalic.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "raleway-bold-italic": require("./assets/fonts/Raleway-BoldItalic.ttf"),
    "raleway-extra-bold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "raleway-extra-bold-italic": require("./assets/fonts/Raleway-ExtraBoldItalic.ttf"),
    "raleway-extra-light": require("./assets/fonts/Raleway-ExtraLight.ttf"),
    "raleway-extra-light-italic": require("./assets/fonts/Raleway-ExtraLightItalic.ttf"),
    "raleway-thin": require("./assets/fonts/Raleway-Thin.ttf"),
    "raleway-thin-italic": require("./assets/fonts/Raleway-ThinItalic.ttf"),
    "raleway-semibold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "raleway-semibold-italic": require("./assets/fonts/Raleway-SemiBoldItalic.ttf"),
    "raleway-medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "raleway-medium-italic": require("./assets/fonts/Raleway-MediumItalic.ttf"),
    "raleway-light": require("./assets/fonts/Raleway-Light.ttf"),
    "raleway-light-italic": require("./assets/fonts/Raleway-LightItalic.ttf"),
    "raleway-regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "raleway-italic": require("./assets/fonts/Raleway-Italic.ttf"),
    "smooch-sans-black": require("./assets/fonts/SmoochSans-Black.ttf"),
    "smooch-sans-bold": require("./assets/fonts/SmoochSans-Bold.ttf"),
    "smooch-sans-extra-bold": require("./assets/fonts/SmoochSans-ExtraBold.ttf"),
    "smooch-sans-extra-light": require("./assets/fonts/SmoochSans-ExtraLight.ttf"),
    "smooch-sans-light": require("./assets/fonts/SmoochSans-Light.ttf"),
    "smooch-sans-medium": require("./assets/fonts/SmoochSans-Medium.ttf"),
    "smooch-sans-regular": require("./assets/fonts/SmoochSans-Regular.ttf"),
    "smooch-sans-semibold": require("./assets/fonts/SmoochSans-SemiBold.ttf"),
    "smooch-sans-thin": require("./assets/fonts/SmoochSans-Thin.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "ubuntu-bold-italic": require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
    "ubuntu-italic": require("./assets/fonts/Ubuntu-Italic.ttf"),
    "ubuntu-light": require("./assets/fonts/Ubuntu-Light.ttf"),
    "ubuntu-light-italic": require("./assets/fonts/Ubuntu-LightItalic.ttf"),
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
    "ubuntu-medium-italic": require("./assets/fonts/Ubuntu-MediumItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={STYLE.CONTAINER_1}>
      <BlankScreen />
    </GestureHandlerRootView>
  );
}
