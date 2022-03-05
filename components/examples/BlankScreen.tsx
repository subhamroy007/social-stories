import { useEffect, useReducer } from "react";
import { StatusBar, View } from "react-native";
import { STYLE } from "../../constants/styles";
import { CreateStoryScreenState, StickerType } from "../../constants/types";
import Sticker from "../global/Sticker";
import { PollPreview } from "../Poll/PollPreview";

export type ActionType = { type: "story/add_sticker"; payload: StickerType };

function reducer(
  state: CreateStoryScreenState,
  action: ActionType
): CreateStoryScreenState {
  switch (action.type) {
    case "story/add_sticker":
      return {
        ...state,
        stickers: [...state.stickers, action.payload],
      };
  }
}

export default function BlankScreen() {
  const [state, dispatch] = useReducer(reducer, { stickers: [] });

  useEffect(() => {
    dispatch({
      type: "story/add_sticker",
      payload: {
        type: "Poll",
        specifc: {
          answers: ["F.R.I.N.D.S", "Big Bang Theory", "SienField"],
          question: "what tv series should i watch?",
          primaryColor: "#2c2c2c",
        },
      },
    });
    dispatch({
      type: "story/add_sticker",
      payload: {
        type: "Poll",
        specifc: {
          answers: ["YES", "NO"],
          question: "kya video aaj nikal de?",
          primaryColor: "green",
        },
      },
    });
  }, []);

  return (
    <View style={[STYLE.CONTAINER_2, { backgroundColor: "purple" }]}>
      <StatusBar hidden={true} />
      {state.stickers.map((sticker, index) => {
        switch (sticker.type) {
          case "Poll":
            return (
              <Sticker key={"Poll" + index}>
                <PollPreview {...sticker.specifc} />
              </Sticker>
            );
        }
      })}
    </View>
  );
}
