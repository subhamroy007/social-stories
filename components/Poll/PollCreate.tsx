import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useReducer, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { STYLE } from "../../constants/styles";
import { PollConfig } from "../../constants/types";
import ColorButton from "../global/ColorButton";
import PollEditable from "./PollEditable";

export type ActionType =
  | { type: "poll/change_color"; payload: undefined }
  | { type: "poll/change_question"; payload: string }
  | {
      type: "poll/change_answer";
      payload: {
        answerIndex: number;
        answer: string;
      };
    };

export interface PollCreateProps extends Partial<PollConfig> {
  onCreate: (state: PollCreateState) => void;
}

export interface PollCreateState extends PollConfig {
  colorIndex: number;
}

const COLORS = ["#2c2c2c", "blue", "green", "pink"];

function initState({
  answers,
  primaryColor,
  question,
}: Partial<PollConfig>): PollCreateState {
  answers = answers ? answers : ["YES", "NO"];
  primaryColor = primaryColor ? primaryColor : "#2c2c2c";
  question = question ? question : "ASK A QUESTION";
  return {
    answers,
    primaryColor,
    question,
    colorIndex: COLORS.indexOf(primaryColor),
  };
}

function reducer(state: PollCreateState, action: ActionType): PollCreateState {
  switch (action.type) {
    case "poll/change_color":
      const colorIndex = (state.colorIndex + 1) % COLORS.length;
      return {
        ...state,
        colorIndex,
        primaryColor: COLORS[colorIndex],
      };
    case "poll/change_question":
      return {
        ...state,
        question: action.payload,
      };
    case "poll/change_answer":
      const answers = [...state.answers];
      if (action.payload.answerIndex < answers.length) {
        answers[action.payload.answerIndex] = action.payload.answer;
      } else {
        answers.push(action.payload.answer);
      }
      return {
        ...state,
        answers,
      };
    default:
      return state;
  }
}

export default function PollCreate(props: PollCreateProps) {
  const [state, dispatch] = useReducer(reducer, props, initState);

  const onColorBtnTap = useCallback(() => {
    dispatch({ type: "poll/change_color", payload: undefined });
  }, []);

  const onQuestionChange = useCallback((text: string) => {
    dispatch({ type: "poll/change_question", payload: text });
  }, []);

  const onAnswerChange = useCallback((text: string, index: number) => {
    dispatch({
      type: "poll/change_answer",
      payload: { answer: text, answerIndex: index },
    });
  }, []);

  const onPress = useCallback(() => {
    props.onCreate(state);
  }, [state]);

  return (
    <KeyboardAvoidingView
      style={[styles.container, STYLE.CONTAINER_2]}
      behavior={"padding"}
    >
      <View style={styles.header}>
        <Text
          style={{ fontSize: 20, color: "white", fontFamily: "ubuntu-medium" }}
          onPress={onPress}
        >
          done
        </Text>
      </View>
      <PollEditable
        primaryColor={state.primaryColor}
        answers={state.answers}
        question={state.question}
        onAnswerChange={onAnswerChange}
        onQuestionChange={onQuestionChange}
      />
      <ColorButton style={styles.colorBtn} onTap={onColorBtnTap} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  colorBtn: {
    marginTop: 32,
  },
  header: {
    width: "100%",
    position: "absolute",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    top: 0,
    left: 0,
  },
});
