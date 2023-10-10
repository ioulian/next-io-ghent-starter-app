import { css } from "@linaria/core";

import { getThemeVariable } from "./utils";

export const globals = css`
  :global() {
    html,
    body {
      -webkit-overflow-scrolling: touch;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      font-family: var(${getThemeVariable("fonts.familyRegular")});
      font-size: 1rem;
      line-height: 1.25rem;
      color: var(${getThemeVariable("colors.body")});
      letter-spacing: 0.01em;
    }

    p {
      margin-top: 0;
      margin-bottom: 0;
    }

    hr {
      width: 100%;
      height: 1px;
      border: 0;
      background-color: currentColor;
      margin: 0;
    }

    ul,
    ol {
      margin-top: 0;
      margin-bottom: 0;
      list-style: none;
      padding-left: 0;
    }

    a {
      color: var(${getThemeVariable("colors.primary")});

      &:hover {
        text-decoration: none;
      }
    }

    button {
      border: 0;
      appearance: none;
      background: none;
      cursor: pointer;
      color: inherit;
      padding: 0;
      font-size: inherit;
    }

    // Remove 300ms delay on buttons:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation
    a,
    button,
    input[type="button"],
    input[type="submit"] {
      touch-action: manipulation;
    }

    button,
    input,
    select,
    textarea,
    a {
      outline-offset: 4px;

      &:focus-visible {
        outline: 2px solid var(${getThemeVariable("colors.primary")});
      }
    }

    // Remove animations and transitions on devices that are low on resources or battery
    // From: https://hankchizljaw.com/wrote/a-modern-css-reset/
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    // Prevent overflow of images and remove spacing at the bottom
    picture,
    img,
    svg,
    video {
      display: block;
      max-width: 100%;
      height: auto;
    }

    svg {
      width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(${getThemeVariable("fonts.familyHeadings")});
      margin: 0;
    }

    .app-dialog-overlay {
      background-color: var(
        ${getThemeVariable("colors.backdropColor")}
      ) !important;
      // TODO: remove if performance suffers
      backdrop-filter: blur(10px);
    }

    .ReactModal__Html--open,
    .ReactModal__Body--open {
      overflow: hidden;
    }

    .ReactModalPortal {
      .ReactModal {
        &__Overlay {
          background-color: var(
            ${getThemeVariable("colors.backdropColor")}
          ) !important;
          overflow-y: auto;
          overflow-x: hidden;
          opacity: 0;
          transition: opacity 250ms ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;

          // TODO: remove if performance suffers
          backdrop-filter: blur(10px);
          -webkit-overflow-scrolling: touch;

          &--after-open {
            opacity: 1;
          }
          &--before-close {
            opacity: 0;
          }
        }

        &__Content {
          max-height: 100%;
          min-width: 100%;
          position: initial !important;
          inset: initial !important;
          border: initial !important;
          background: initial !important;
          overflow: auto !important;
          border-radius: initial !important;
          padding: initial !important;
        }
      }
    }
  }
`;
