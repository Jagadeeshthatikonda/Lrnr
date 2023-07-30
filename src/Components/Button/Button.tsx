import { ComponentProps } from "react";

import { getButtonStyles } from "./styles";

type ButtonProps = {
  children?: JSX.Element;
} & ComponentProps<"button">;

export const Button = ({
  children,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type="button"
      className={getButtonStyles(!!props.disabled)}
      {...props}
    >
      {children}
    </button>
  );
};
