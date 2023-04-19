import { FC, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/stack";
import { Container } from "../components/container";
import React from "react";
import { NavigationHeader } from "../components/header";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { Message } from "../types/chat";
import { formatTimeToRU } from "../utils/formatTime";
import { User } from "../types/user";
import { Stack, TouchableStack } from "../components/stack";
import { InputField, InputWrapper } from "../components/input";
import { Bubble } from "../components/bubble";
import { Feather } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "chat">;

export const Chat: FC<Props> = ({ route }) => {
  const { chat, messages } = route.params;
  const [messagesData, setMessagesData] = useState<Message[]>(messages);
  const [value, setValue] = useState<string>("");

  const user = chat.participants[0] as User;
  const companion = chat.participants[1] as User;

  const sendMessage = () => {
    const messageObj = {
      message: value.trim(),
      timestamp: new Date().toJSON(),
      sender_id: user.user_id,
      receiver_id: companion.user_id,
      attachment: "",
    };
    if (messageObj.message.length > 0)
      setMessagesData([messageObj, ...messagesData]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <Stack width={"100%"} height={"100%"} justify="flex-end">
          <NavigationHeader title={companion.username} ava={companion.avatar} />
          <FlatList
            inverted
            data={messagesData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: { item: Message }) => {
              const time = formatTimeToRU(item.timestamp);
              const text = item.message;
              const attachment = item.attachment;
              return (
                <Stack
                  width={"100%"}
                  row
                  justify={
                    user.user_id === item.sender_id ? "flex-end" : "flex-start"
                  }
                >
                  <Bubble time={time} text={text} attachment={attachment} />
                </Stack>
              );
            }}
          />
          <InputWrapper h={58} w={"100%"} bg="#dcdcdc">
            <InputField
              w={"90%"}
              pl={16}
              bg="#dcdcdc"
              h={56}
              onChangeText={(text) => setValue(text)}
            />
            <TouchableStack onPress={sendMessage}>
              <Feather name="send" size={24} color="black" />
            </TouchableStack>
          </InputWrapper>
        </Stack>
      </Container>
    </KeyboardAvoidingView>
  );
};
