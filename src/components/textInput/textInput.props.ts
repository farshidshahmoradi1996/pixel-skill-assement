import React from "react";

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  autofocus?: boolean;
}
