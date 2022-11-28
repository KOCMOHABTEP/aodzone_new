import cn from "classnames";

import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import { ChangeEvent, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Input.module.scss";

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

export const Input = (props: InputProps) => {
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
        styles.placeholder,
        placeholderIsModified && styles.placeholder__modified,
    ]);

    return (
        <label className={styles.input__label} htmlFor={name}>
            {hint && (
                <div className={styles.hint}>
                    <Icon name="hint" size={16} className={styles.hint__icon} />
                    <div className={styles.hint__message}>{hint}</div>
                </div>
            )}
            <div className={styles.input__container}>
                <div className={placeholderClassName}>
                    {required && (
                        <span className={styles.placeholder__required}>* </span>
                    )}
                    {label}
                </div>
                <input
                    className={cn(styles.input, {
                        [styles.disabled]: disabled,
                        [styles.error]: error,
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
                <div className={styles.error__container}>
                    <Icon
                        name="error"
                        size={16}
                        className={styles.error__container__icon}
                    />
                    <div className={styles.error__container__message}>
                        {error?.message}
                    </div>
                </div>
            )}
        </label>
    );
};
