import { ComponentProps } from "react";
import cx from "classnames";

import { BoldIcon } from "../../Icons/BoldIcon";
import { CheckIcon } from "../../Icons/CheckIcon";
import { CodeIcon } from "../../Icons/CodeIcon";
import { ItalicIcon } from "../../Icons/ItalicIcon";
import { LinkIcon } from "../../Icons/LinkIcon";
import { TrashIcon } from "../../Icons/TrashIcon";

import "./styles.css";
import { CopyIcon } from "../../Icons/CopyIcon";

type IconType =
  | "bold"
  | "code"
  | "copy"
  | "italic"
  | "link"
  | "check"
  | "trash";

type IconButtonProps = {
  active?: boolean;
  icon?: IconType;
} & ComponentProps<"button">;

export function IconButton({
  icon,
  active,
  className,
  ...props
}: IconButtonProps) {
  if (!icon) return null;

  const getIcon = (icon: IconType, active?: boolean): React.ReactElement => {
    const icons: Record<IconType, JSX.Element> = {
      bold: <BoldIcon fill={active ? "red" : "#ffffff"} />,
      check: <CheckIcon />,
      code: <CodeIcon fill={active ? "red" : "#ffffff"} />,
      copy: <CopyIcon />,
      italic: <ItalicIcon fill={active ? "red" : "#ffffff"} />,
      link: <LinkIcon fill={active ? "red" : "#ffffff"} />,
      trash: <TrashIcon />,
    };
    return icons[icon];
  };

  return (
    <button
      {...props}
      className={cx(
        className,
        icon === "check" || "trash"
          ? "check-icon-class-name"
          : "icon-class-name"
      )}
    >
      {getIcon(icon, active)}
    </button>
  );
}
