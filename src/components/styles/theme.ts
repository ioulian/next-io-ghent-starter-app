const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    primary: "#f38a5d",
    body: "#3C4346",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
  fonts: {
    familyRegular: "Arial, sans-serif",
    familyHeadings: "Arial, sans-serif",
  },
  breakpoints: {
    smallPhone: "320px",
    phone: "375px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1440px",
  },
  container: {
    maxWidth: "1200px",
    gap: "16px",
  },
  timings: {
    fast: "100ms",
    normal: "250ms",
    slow: "400ms",
  },
  borderRadius: {
    normal: 4,
  },
  floating: {
    tooltip: {
      offset: "10px",
    },
    popover: {
      offset: "10px",
    },
    dropdown: {
      offset: "10px",
    },
    floater: {
      shift: "5px",
      flip: "5px",
      arrow: {
        size: "10px",
      },
    },
  },
  zIndex: {
    contextMenu: 100,
    overlay: 200,
  },
  form: {
    input: {
      color: "#000",
      border: "rgba(0, 0, 0, 0.6)",
      background: "rgba(239, 242, 243, 0.2)",
      shadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    },
    select: {
      indicator: "rgba(0, 0, 0, 0.6)",
    },
    asterisk: {
      color: "#b30000",
    },
    outline: {
      color: "#000",
    },
    checkbox: {
      checked: {
        border: "#f38a5d",
        background: "#f38a5d",
        color: "#fff",
      },
    },
    requiredMessage: {
      color: "#b30000",
    },
    error: {
      color: "#b30000",
    },
  },
  fileProgress: {
    progressBackground: "#eee",
    states: {
      idle: {
        main: "#737575",
        accent: "#909090",
      },
      failed: {
        main: "#B30000",
        accent: "#D12626",
      },
      loading: {
        main: "#0059A1",
        accent: "#0073CF",
      },
      succeeded: {
        main: "#00BE62",
        accent: "#00E375",
      },
    },
  },
};

export default theme;
