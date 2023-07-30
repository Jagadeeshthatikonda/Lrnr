import { IconProps } from "../../types/types";

export const CheckIcon = (props: IconProps): React.ReactElement => {
  const { width = 20, height = 20, fill = "black", ...rest } = props;

  return (
    <svg
      viewBox="0 0 20 20"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      height={height}
      {...rest}
    >
      <title>Check</title>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
