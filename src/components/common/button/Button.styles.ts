import { css } from "@linaria/core";
import { styled } from "@linaria/react";

import { themeVar } from "@/components/styles/utils";

import { StyledSpinner } from "../spinner/Spinner.styles";

export const variantPrimary = css`
  color: var(${themeVar("colors.white")});
  background-color: var(${themeVar("colors.primary")});

  &:hover,
  &:focus {
    background-color: var(${themeVar("colors.primaryDarker")});
    border-color: var(${themeVar("colors.primaryDarker")});
  }
`;

export const variantSecondary = css`
  color: var(${themeVar("colors.primary")});
  background-color: var(${themeVar("colors.white")});

  &:hover,
  &:focus {
    color: var(${themeVar("colors.white")});
    background-color: var(${themeVar("colors.primaryDarker")});
    border-color: var(${themeVar("colors.primaryDarker")});
  }
`;

export const variantSimple = css`
  border-color: transparent;
`;

export const variantLink = css`
  border-color: transparent;
  text-decoration: underline;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export const sizeSmall = css`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
`;

export const sizeNormal = css`
  padding: 0.625rem 1.25rem;
`;

export const sizeLarge = css`
  padding: 1.125rem 2rem;
`;

export const sizeBase = css`
  border: 0;
`;

export const svgSizeSmall = css`
  > span {
    > svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const svgSizeNormal = css`
  > span {
    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const StyledButton = styled.button<{
  $fullWidth?: boolean;
  $isLoading?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  font-family: var(${themeVar("fonts.familyRegular")});
  font-weight: 500;
  appearance: none;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5rem;
  border: 1px solid var(${themeVar("colors.primary")});
  border-radius: 4px;
  transition:
    border-color var(${themeVar("timings.fast")}),
    background-color var(${themeVar("timings.fast")}),
    color var(${themeVar("timings.fast")});
  width: ${({ $fullWidth }) => ($fullWidth ? "100%;" : "auto")};

  &:disabled {
    opacity: 0.5;
    cursor: ${({ $isLoading }) => ($isLoading ? "wait" : "not-allowed")};
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity var(${themeVar("timings.fast")});
    opacity: ${({ $isLoading }) => ($isLoading ? "0" : "1")};
    gap: 0.5rem;

    > svg {
      flex-shrink: 0;
    }
  }

  > ${StyledSpinner} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({ $isLoading }) => ($isLoading ? "1" : "0")};
    transition: opacity var(${themeVar("timings.fast")});
    pointer-events: none;
  }
`;
