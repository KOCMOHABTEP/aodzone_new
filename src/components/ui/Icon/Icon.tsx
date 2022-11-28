import cn from "classnames";
import { ICON_LIBRARY, ICON_NAME } from "@/components/ui/Icon/Icon.library";
import styles from "./Icon.module.scss";

interface IconProps {
    name: ICON_NAME;
    size?: number;
    className?: string;
}

export const Icon = ({ name, size = 24, className }: IconProps) => {
    const props = {
        ...(size ? { width: size, height: size } : null),
        className: cn(styles.icon, className),
    };

    const resultComponent = ICON_LIBRARY[name.toString()]?.(props);

    if (!resultComponent) return null;

    return resultComponent;
};
