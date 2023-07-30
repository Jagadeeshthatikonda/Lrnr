import { IconProps } from "../../types/types";

export const CopyIcon = (props: IconProps): React.ReactElement => {
  const { width = 16, height = 16, fill = "black", ...rest } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      height={height}
      {...rest}
    >
      <title>Copy</title>
      <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
    </svg>
  );
};
