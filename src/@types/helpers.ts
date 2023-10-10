import { ComponentPropsWithRef, JSXElementConstructor } from "react";

export type NestedKeyOf<ObjectType> = ObjectType extends object
  ? {
      [Key in keyof ObjectType]:
        | `${Key & string}`
        | `${Key & string}.${NestedKeyOf<ObjectType[Key]>}`;
    }[keyof ObjectType]
  : never;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type InferComponentProps<T> = T extends
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<any>
  ? ComponentPropsWithRef<T>
  : never;
