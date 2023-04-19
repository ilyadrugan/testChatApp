import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface Props {
  color?: string;
  mt?: number;
}

export const Hr = styled.View<Props>`
  width: 100%;
  height: 1px;
  margin-top: ${(p) => (p.mt ? p.mt : perfectSize(14))}px;
  background-color: ${(p) => (p.color ? p.color : "black")};
`;
