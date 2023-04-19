import React, { FC } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { perfectSize } from "../utils/pixelPerfect";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/other";
interface Props {
  children: React.ReactNode;
  bg?: string;
  offset?: number;
}
export const KeyboardWrapper: FC<Props> = ({ children, bg, offset = -70 }) => {
  return (
    <ScrollView
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        flex: 1,
        backgroundColor: bg,
      }}
      scrollEnabled={false}
      keyboardShouldPersistTaps="never"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={perfectSize(offset)}
      >
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
