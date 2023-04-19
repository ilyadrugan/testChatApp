import styled from "styled-components/native";
import { perfectSize } from "../utils/pixelPerfect";

interface StyleProps {
  mt?: number;
  w?: number | string;
  h?: number | string;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  mh?: number;
  jcon?: string;
  ai?: string;
  bg?: string;
  color?: string;
}

export const InputField = styled.TextInput<StyleProps>`
  width: ${(p) => (typeof p.w === "string" ? p.w : perfectSize(p.w) || "auto")};
  height: ${(p) =>
    typeof p.h === "string" ? p.h : perfectSize(p.h) || "auto"};
  padding-left: ${(p) => perfectSize(p.pl) || 0}px;
  background-color: ${(p) => (p.bg ? p.bg : "#f0f0f0")};
  color: ${(p) => (p.color ? p.color : "#000")};
  font-size: ${perfectSize(16)}px;
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
`;

export const InputWrapper = styled.View<StyleProps>`
  flex-direction: row;
  align-items: center;
  width: ${(p) => (typeof p.w === "string" ? p.w : perfectSize(p.w) || "auto")};
  height: ${(p) =>
    typeof p.h === "string" ? p.h : perfectSize(p.h) || "auto"};
  background-color: ${(p) => (p.bg ? p.bg : "#f0f0f0")};
  color: ${(p) => (p.color ? p.color : "#000")};
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
  border-top-color: #9a9a9a;
  border-top-width: 1px;
`;
