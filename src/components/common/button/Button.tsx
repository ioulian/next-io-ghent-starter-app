import {
  ReactNode,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  isValidElement,
  cloneElement,
  memo,
} from "react";
import { useCallback } from "react";
import { cx } from "@linaria/core";

import { InferComponentProps } from "@/@types/helpers";

import Spinner from "../spinner/Spinner";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

import {
  StyledButton,
  sizeBase,
  sizeLarge,
  sizeNormal,
  sizeSmall,
  svgSizeNormal,
  svgSizeSmall,
  variantLink,
  variantPrimary,
  variantSecondary,
  variantSimple,
} from "./Button.styles";

const Button = forwardRef<
  HTMLButtonElement,
  {
    as?: keyof JSX.IntrinsicElements;

    /**
     * Add an icon before
     */
    iconBefore?: ReactNode;

    /**
     * Add an icon after
     */
    iconAfter?: ReactNode;

    /**
     * Show progress bar
     */
    isLoading?: boolean;

    /**
     * Will hide children and show icons only
     */
    iconOnly?: boolean;
    variant?: "primary" | "secondary" | "simple" | "link";
    size?: "base" | "small" | "normal" | "large";
  } & InferComponentProps<typeof StyledButton>
>(
  (
    {
      className,
      iconOnly,
      iconBefore,
      iconAfter,
      isLoading = false,
      disabled,
      onClick,
      as,
      children,
      $isLoading,
      variant = "primary",
      size = "normal",
      ...props
    },
    ref,
  ) => {
    const newOnClick = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!isLoading && !disabled) {
          onClick?.(e);
        }
      },
      [onClick, isLoading, disabled],
    );

    return (
      <StyledButton
        ref={ref}
        type={!as || as === "button" ? "button" : undefined}
        as={as}
        {...props}
        className={cx(
          className,
          variant === "primary" && variantPrimary,
          variant === "secondary" && variantSecondary,
          variant === "simple" && variantSimple,
          variant === "link" && variantLink,
          size === "base" && sizeBase,
          size === "small" && sizeSmall,
          size === "normal" && sizeNormal,
          size === "large" && sizeLarge,
          size === "small" ? svgSizeSmall : svgSizeNormal,
        )}
        $isLoading={isLoading}
        disabled={disabled || isLoading}
        onClick={onClick ? newOnClick : undefined}
      >
        <span>
          {isValidElement(iconBefore) &&
            cloneElement(iconBefore, {
              // @ts-ignore
              "aria-hidden": "true",
            })}
          {children ? (
            iconOnly ? (
              <VisuallyHidden>{children}</VisuallyHidden>
            ) : (
              <span>{children}</span>
            )
          ) : null}
          {isValidElement(iconAfter) &&
            cloneElement(iconAfter, {
              // @ts-ignore
              "aria-hidden": "true",
            })}
        </span>
        <Spinner />
      </StyledButton>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
  //Button.whyDidYouRender = true;
}

export default memo(Button);
