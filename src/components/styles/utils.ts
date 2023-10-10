import theme from "./theme";

type NestedKeyOf<ObjectType> = ObjectType extends object
  ? {
      [Key in keyof ObjectType]:
        | `${Key & string}`
        | `${Key & string}.${NestedKeyOf<ObjectType[Key]>}`;
    }[keyof ObjectType]
  : never;
export default NestedKeyOf;

export const getThemeVariable = (
  key: NestedKeyOf<typeof theme>,
): `--${string}` => {
  return `--theme-${key.replaceAll(".", "-")}`;
};

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

export const buildThemeCSSVars = (): string => {
  return Object.entries(theme).reduce(
    (acc, [currentKey, currentValue]) =>
      `${acc}${getThemeCSSVar(`${currentKey}`, currentValue)}`,
    "",
  );
};
