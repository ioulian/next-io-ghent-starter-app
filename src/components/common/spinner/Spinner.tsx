import { FC, memo } from "react";
import { cx } from "@linaria/core";

import { InferComponentProps } from "@/@types/helpers";

import {
  StyledSpinner,
  StyledSpinnerIcon,
  StyledSpinnerLabel,
  animation,
} from "./Spinner.styles";

const Spinner: FC<
  {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
  } & InferComponentProps<typeof StyledSpinner>
> = ({
  children,
  primaryColor = "currentColor",
  secondaryColor = "transparent",
  backgroundColor = "transparent",
  ...props
}) => (
  <StyledSpinner {...props} $backgroundColor={backgroundColor}>
    <StyledSpinnerIcon
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
    >
      <div className={cx(animation)} />
    </StyledSpinnerIcon>
    {children ? <StyledSpinnerLabel>{children}</StyledSpinnerLabel> : null}
  </StyledSpinner>
);

if (process.env.NODE_ENV === "development") {
  //Spinner.whyDidYouRender = true;
}

export default memo(Spinner);
