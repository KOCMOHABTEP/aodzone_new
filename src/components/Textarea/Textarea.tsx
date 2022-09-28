import cn from "classnames";
import { ChangeEvent, useState } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    textAresClassName?: string;
}

const Textarea = ({
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

    const placeholderClassName = cn(styles.textareaPlaceholder, {
        [styles.textareaPlaceholderModified]: placeholderIsModified,
    });

    return (
        <div className={styles.textareaContainer}>
            <div className={placeholderClassName}>{label}</div>
            <textarea
                className={styles.textareaField}
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

export default Textarea;
