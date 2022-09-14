import cn from "classnames";
import Icon from "@components/Icon/Icon";
import { ICON_NAME } from "@components/Icon/Icon.library";
import { ChangeEvent, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
    name: string;
    label: string;
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    icon?: ICON_NAME;
    hint?: string;
    disabled?: boolean;
    required?: boolean;
    error?: {
        valid: boolean;
        message: string;
    };
}

const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const { name, value, required, onChange, hint, error, disabled, label } =
        props;

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const placeholderIsModified = isFocused || value.length;

    const placeholderClassName = cn([
        styles.inputPlaceholder,
        placeholderIsModified && styles.inputPlaceholderModified,
    ]);

    return (
        <label className={styles.inputLabel} htmlFor={name}>
            {hint && (
                <div className={styles.inputHint}>
                    <Icon
                        name="hint"
                        size={16}
                        className={styles.inputHintIcon}
                    />
                    <div className={styles.inputHintMessage}>{hint}</div>
                </div>
            )}
            <div className={styles.inputContainer}>
                <div className={placeholderClassName}>
                    {required && (
                        <span className={styles.inputPlaceholderRequired}>
                            *{" "}
                        </span>
                    )}
                    {label}
                </div>
                <input
                    className={cn(styles.input, {
                        [styles.inputDisabled]: disabled,
                        [styles.inputError]: error,
                    })}
                    type="text"
                    name={name}
                    value={value}
                    required={required}
                    disabled={disabled}
                    onChange={event => onChange(event)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            {error && (
                <div className={styles.inputErrorContainer}>
                    <Icon
                        name="error"
                        size={16}
                        className={styles.inputErrorContainerIcon}
                    />
                    <div className={styles.inputErrorContainerMessage}>
                        {error?.message}
                    </div>
                </div>
            )}
        </label>
    );
};

export default Input;
