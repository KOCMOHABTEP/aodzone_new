import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    buttonClassName?: string;
    onClick?: () => void;
}

export default function Button({
    text,
    buttonClassName,
    onClick,
}: ButtonProps) {
    const buttonClassNameStyles = cn(styles.button, buttonClassName);

    return (
        <button
            type="button"
            className={buttonClassNameStyles}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
