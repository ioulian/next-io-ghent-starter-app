import { ReactNode } from "react";

import { Locale } from "./i18n";

export type LayoutPropsWithLocale = {
    children: ReactNode;
    params: { locale: Locale };
}

export type GenerateMetadataWithLocaleProps = {
  params: { locale: Locale };
};
