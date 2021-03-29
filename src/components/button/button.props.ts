import React from "react";
import { buttonPreset } from "./button.presets";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  preset?: buttonPreset;
}
