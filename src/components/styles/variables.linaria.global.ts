import { css } from "@linaria/core";

import { buildThemeCSSVars } from "./utils";

export const globals = css`
  :global() {
    html {
      ${buildThemeCSSVars()}
    }
  }
`;
