import { IconProps } from "../../types/types";

export const TrashIcon = (props: IconProps): React.ReactElement => {
  const { width = 20, height = 20, fill = "black", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      role="img"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
    >
      <title>Trash</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 7-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"
      ></path>
    </svg>
  );
};