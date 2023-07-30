import { IconProps } from "../../types/types";

export const LinkIcon = (props: IconProps): React.ReactElement => {
  const { width = 18, height = 18, fill = "#ffffff", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      role="img"
      fill={fill}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Link</title>
      <path d="m17.657 14.828-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
    </svg>
  );
};
