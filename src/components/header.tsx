import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import styled from "styled-components/native";
import { Image } from "./image";

import { Stack } from "./stack";
import { perfectSize } from "../utils/pixelPerfect";
import { NavigationBar } from "../constants/text";
import { SCREEN_WIDTH } from "../constants/other";

interface Props {
  title?: string;
  ava?: string;
  step?: number;
  noback?: boolean;
  backPress?: () => void;
}
export const NavigationHeader: FC<Props> = ({ title, noback, ava }) => {
  const navigation = useNavigation();
  return (
    <Stack pb={12} row aic="center" mt={0} style={{ width: SCREEN_WIDTH }}>
      <Wrapper>
        {!noback && (
          <Back
            name="chevron-back"
            size={perfectSize(26)}
            color={"black"}
            onPress={navigation.goBack}
          />
        )}
        <NavigationBar color={"black"}>{title}</NavigationBar>
        {ava && (
          <Image
            style={{
              position: "absolute",
              right: perfectSize(16),
              bottom: -perfectSize(6),
            }}
            source={{ uri: ava }}
            w={44}
            h={44}
            br={24}
          />
        )}
      </Wrapper>
    </Stack>
  );
};

const Back = styled(Ionicons)`
  position: absolute;
  left: ${perfectSize(16)}px;
  padding-right: ${perfectSize(20)}px;
`;

const Wrapper = styled.View`
  width: 100%;
  height: ${perfectSize(26)}px;
  margin-top: ${perfectSize(50)}px;
  align-items: center;
`;
