import { IconProps } from "../../types/types";

export const BoldIcon = (props: IconProps): React.ReactElement => {
  const { width = 20, height = 20, fill = "#ffffff", ...rest } = props;
  return (
    <svg
      viewBox="0 0 100 100"
      focusable="false"
      role="img"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
    >
      <title>Bold</title>
      <path d="M62.73 49.109c5.347-1.103 9.76-5.94 9.76-12.985 0-7.553-5.517-14.428-16.295-14.428H29.011a2.604 2.604 0 0 0-2.604 2.604v51.399a2.604 2.604 0 0 0 2.604 2.604h28.118c10.863 0 16.464-6.79 16.464-15.361.001-7.043-4.752-12.9-10.863-13.833zM38.458 32.305h15.107c4.074 0 6.62 2.461 6.62 5.94 0 3.649-2.546 5.941-6.62 5.941H38.458V32.305zm15.615 35.39H38.458v-12.9h15.616c4.668 0 7.214 2.886 7.214 6.45 0 4.074-2.716 6.45-7.215 6.45z"></path>
    </svg>
  );
};
