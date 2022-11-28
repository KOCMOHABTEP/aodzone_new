import cn from "classnames";
import { ChangeEvent, useState } from "react";
import styles from "./Textarea.module.scss";

interface TextareaProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    textAresClassName?: string;
}

export const Textarea = ({
    label,
    value,
    onChange,
    textAresClassName,
}: TextareaProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const placeholderIsModified = isFocused || value.length;

    const placeholderClassName = cn(styles.placeholder, {
        [styles.placeholder__modified]: placeholderIsModified,
    });

    return (
        <div className={styles.container}>
            <div className={placeholderClassName}>{label}</div>
            <textarea
                className={styles.field}
                name="test"
                id="test"
                cols={30}
                rows={10}
                onFocus={handleFocus}
                onChange={onChange}
                onBlur={handleBlur}
            />
        </div>
    );
};
