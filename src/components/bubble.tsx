import React, { FC } from "react";
import { Stack } from "./stack";
import { Body, Regular18 } from "../constants/text";
import { perfectSize } from "../utils/pixelPerfect";

interface Props {
  time: string;
  text: string;
  ava?: string;
}
export const Bubble: FC<Props> = ({ time, text, ava }) => {
  return (
    <Stack
      style={{ maxWidth: "70%" }}
      mr={6}
      ml={6}
      pb={6}
      pt={6}
      pl={12}
      pr={12}
      mb={12}
      br={12}
      bg="#086bd3"
    >
      <Regular18 color={"white"}>{text}</Regular18>
      <Stack row ais="flex-end" pl={16} pr={4}>
        <Body color="#cdcdcd">{time}</Body>
      </Stack>
    </Stack>
  );
};
