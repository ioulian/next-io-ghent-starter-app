// Use type safe message keys with `next-intl`
type CommonMessages = typeof import("./src/messages/nl-BE/common.json");
type AppMessages = typeof import("./src/messages/nl-BE/app.json");
declare interface IntlMessages extends CommonMessages, AppMessages {}
