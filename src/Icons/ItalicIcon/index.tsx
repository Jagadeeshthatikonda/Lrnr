import { IconProps } from "../../types/types";

export const ItalicIcon = (props: IconProps): React.ReactElement => {
  const { width = 20, height = 20, fill = "#ffffff", ...rest } = props;
  return (
    <svg
      viewBox="0 0 100 100"
      focusable="false"
      role="img"
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>Italic</title>
      <path d="M60.571 24.301a2.604 2.604 0 0 0-2.604-2.604h-4.594a2.598 2.598 0 0 0-2.59 2.463l-.014-.001-11.276 50.978-.015.066-.011.048h.006a2.55 2.55 0 0 0-.045.449 2.595 2.595 0 0 0 2.406 2.584v.02h4.792a2.595 2.595 0 0 0 2.577-2.336l.013.001 11.257-50.972-.008-.001a2.58 2.58 0 0 0 .106-.695z"></path>
    </svg>
  );
};
