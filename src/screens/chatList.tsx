import { FC, useEffect, useState } from "react";
import React from "react";
import { Stack, TouchableStack } from "../components/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/stack";
import { Container } from "../components/container";
import { NavigationHeader } from "../components/header";
import { SCREEN_WIDTH } from "../constants/other";
import { H3, Medium18, Regular18 } from "../constants/text";
import { Hr } from "../components/hr";
import { perfectSize } from "../utils/pixelPerfect";
import { FlatList } from "react-native";
import { chatList } from "../mockData/chatList";
import { formatTimeToRU } from "../utils/formatTime";
import { Chat } from "../types/chat";
import { Image } from "../components/image";
import { getLastMessage, getLastMessageTime } from "../utils/getLastMessage";

type Props = NativeStackScreenProps<RootStackParamList, "chatList">;

export const ChatList: FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <NavigationHeader title="Чаты" noback />
      <FlatList
        data={chatList.chat_list}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          width: SCREEN_WIDTH,
        }}
        renderItem={({ item }: { item: Chat }) => {
          const companion = item.participants[1];
          return (
            <>
              <TouchableStack
                mt={16}
                pr={16}
                pl={16}
                row
                justify="space-between"
                onPress={() =>
                  navigation.navigate("chat", {
                    chat: item,
                    messages: [...item.messages].reverse(),
                  })
                }
              >
                <Stack row>
                  {companion.avatar ? (
                    <Image br={40} source={{ uri: companion.avatar }} />
                  ) : (
                    <Stack
                      width={60}
                      bg={"#EEEEEE"}
                      br={52}
                      aic={"center"}
                      justify="center"
                      height={60}
                    >
                      <H3>{companion.username || ""}</H3>
                    </Stack>
                  )}

                  <Stack ml={12} width="70%">
                    <Medium18 color={"black"} numberOfLines={1}>
                      {companion.username}
                    </Medium18>
                    <Regular18 color={"black"} numberOfLines={1}>
                      {getLastMessage(item)}
                    </Regular18>
                  </Stack>
                </Stack>
                <Medium18 color={"black"}>
                  {formatTimeToRU(getLastMessageTime(item))}
                </Medium18>
              </TouchableStack>
              <Hr mt={4} color="#acacac" />
            </>
          );
        }}
      />
    </Container>
  );
};
