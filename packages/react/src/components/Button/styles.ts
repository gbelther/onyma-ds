import styled from "styled-components";
import { theme } from "@onyma-ds/tokens";

export const Container = styled.button`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.short};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.xs};
`;
