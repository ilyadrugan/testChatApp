import React, { FC } from "react";
import { Stack, TouchableStack } from "./stack";
import { Body, Regular18 } from "../constants/text";
import { perfectSize } from "../utils/pixelPerfect";
import { ResizeMode, Video } from "expo-av";

interface Props {
  time: string;
  text: string;
  ava?: string;
  attachment?: string;
}
export const Bubble: FC<Props> = ({ time, text, ava, attachment }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
      {attachment && (
        <TouchableStack
          width={"100%"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Video
            ref={video}
            style={{
              alignSelf: "center",
              width: "100%",
              height: perfectSize(180),
            }}
            source={{
              uri: attachment,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </TouchableStack>
      )}

      <Stack row ais="flex-end" pl={16} pr={4}>
        <Body color="#cdcdcd">{time}</Body>
      </Stack>
    </Stack>
  );
};
