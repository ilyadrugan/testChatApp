import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { RootStackParamList } from "../types/stack";
import { ChatList } from "../screens/chatList";
import { Chat } from "../screens/chat";

const Stack = createStackNavigator<RootStackParamList>();

export const StartNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"chatList"}
        screenOptions={{
          headerShown: false,
          title: "",
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp",
              }),
            },
          }),
        }}
      >
        <Stack.Screen name="chatList" component={ChatList} />
        <Stack.Screen name="chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
