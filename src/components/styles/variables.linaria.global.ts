import { css } from "@linaria/core";

import { buildThemeCSSVars } from "./utils";
import theme from "./theme";

export const globals = css`
  :global() {
    html {
      ${buildThemeCSSVars(theme)}
    }
  }
`;
