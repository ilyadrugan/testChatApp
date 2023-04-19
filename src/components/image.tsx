import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface StyledProps {
  w?: number;
  h?: number;
  br?: number;
}

export const Image = styled.Image<StyledProps>`
  width: ${(p) => perfectSize(p.w) || 60}px;
  height: ${(p) => perfectSize(p.h) || 60}px;
  border-radius: ${(p) => perfectSize(p.br) || 0}px;
`;
