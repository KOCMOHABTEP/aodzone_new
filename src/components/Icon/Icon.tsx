import cn from "classnames";
import { ICON_LIBRARY, ICON_NAME } from "@/components/Icon/Icon.library";
import styles from "./Icon.module.css";

interface IconProps {
    name: ICON_NAME;
    size?: number;
    className?: string;
}

const Icon = ({ name, size = 24, className }: IconProps) => {
    const props = {
        ...(size ? { width: size, height: size } : null),
        className: cn(styles.icon, className),
    };

    const resultComponent = ICON_LIBRARY[name.toString()]?.(props);

    if (!resultComponent) return null;

    return resultComponent;
};

export default Icon;
