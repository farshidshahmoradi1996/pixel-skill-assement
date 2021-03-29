import React from "react";
import { labelSizes } from "./label.presets";

export interface LabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: string;
  size?: keyof typeof labelSizes;
  withLine?: boolean;
}
