import { IconProps } from "../../types/types";

export const CodeIcon = (props: IconProps): React.ReactElement => {
  const { width = 20, height = 20, fill = "#ffffff", ...rest } = props;
  return (
    <svg
      viewBox="0 0 16 16"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      height={height}
      {...rest}
    >
      <title>Inline Code</title>
      <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
    </svg>
  );
};
