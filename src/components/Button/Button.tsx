import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
    text: string;
    buttonClassName?: string;
}

export default function Button({ text, buttonClassName }: ButtonProps) {
    const buttonClassNameStyles = cn(styles.button, buttonClassName);

    return (
        <button type="button" className={buttonClassNameStyles}>
            {text}
        </button>
    );
}
