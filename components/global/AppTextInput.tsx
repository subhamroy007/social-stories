import { Component, ReactNode } from "react";
import { Keyboard, TextInput, TextInputProps } from "react-native";

export interface AppTextInputState {
  text: string;
}

export default class AppTextInput extends Component<
  TextInputProps,
  AppTextInputState
> {
  inputRef: TextInput | null = null;
  state: Readonly<AppTextInputState> = { text: "" };
  constructor(props: TextInputProps) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.state = { text: props.value ? props.value : "" };
  }

  onChangeText(text: string) {
    this.setState((state) => ({ text }));
  }

  render(): ReactNode {
    const { text } = this.state;
    return (
      <TextInput
        {...this.props}
        ref={(ref) => {
          this.inputRef = ref;
        }}
        value={text}
        onChangeText={this.onChangeText}
      />
    );
  }
}
