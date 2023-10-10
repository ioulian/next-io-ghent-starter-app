import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const animation = css`
  animation: spinnerAnimation 1s linear infinite;

  @keyframes spinnerAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledSpinnerIcon = styled.div<{
  $primaryColor?: string;
  $secondaryColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    border-style: solid;
    border-top-color: ${({ $primaryColor }) => $primaryColor ?? "currentColor"};
    border-right-color: ${({ $secondaryColor }) =>
      $secondaryColor ?? "transparent"};
    border-bottom-color: ${({ $secondaryColor }) =>
      $secondaryColor ?? "transparent"};
    border-left-color: ${({ $secondaryColor }) =>
      $secondaryColor ?? "transparent"};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`;

export const StyledSpinnerLabel = styled.div`
  font-size: 0.875rem;
  line-height: 1;
`;

export const StyledSpinner = styled.div<{
  $fullWidth?: boolean;
  $fullHeight?: boolean;
  $backgroundColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  line-height: 1;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ?? "transparent"};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  height: ${({ $fullHeight }) => ($fullHeight ? "100%" : "auto")};
`;
