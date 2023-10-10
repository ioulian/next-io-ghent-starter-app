import type theme from "./theme";

type NestedKeyOf<ObjectType> = ObjectType extends object
  ? {
      [Key in keyof ObjectType]:
        | `${Key & string}`
        | `${Key & string}.${NestedKeyOf<ObjectType[Key]>}`;
    }[keyof ObjectType]
  : never;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const getThemeVariable = (
  key: NestedKeyOf<typeof theme>,
): `--${string}` => {
  return `--theme-${key.replaceAll(".", "-")}`;
};

export const themeVar = getThemeVariable;

export const getThemeCSSVar = (
  key: string,
  value: string | number | object,
): string => {
  if (typeof value === "object") {
    return Object.entries(value).reduce(
      (acc, [currentKey, currentValue]) =>
        `${acc}${getThemeCSSVar(`${key}-${currentKey}`, currentValue)}`,
      "",
    );
  }

  return `
  --theme-${key}: ${value};`;
};

export const buildThemeCSSVars = (
  themeVars: DeepPartial<typeof theme>,
): string => {
  return Object.entries(themeVars).reduce(
    (acc, [currentKey, currentValue]) =>
      `${acc}${getThemeCSSVar(`${currentKey}`, currentValue)}`,
    "",
  );
};
