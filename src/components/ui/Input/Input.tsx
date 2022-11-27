import cn from "classnames";
import Icon from "@/components/Icon/Icon";
import { ICON_NAME } from "@/components/Icon/Icon.library";
import { ChangeEvent, useState } from "react";
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
        styles.input__placeholder,
        placeholderIsModified && styles.input__placeholder__modified,
    ]);

    console.log("Input::render");

    return (
        <label className={styles.input__label} htmlFor={name}>
            {hint && (
                <div className={styles.input__hint}>
                    <Icon
                        name="hint"
                        size={16}
                        className={styles.input__hint__icon}
                    />
                    <div className={styles.input__hint__message}>{hint}</div>
                </div>
            )}
            <div className={styles.input__container}>
                <div className={placeholderClassName}>
                    {required && (
                        <span className={styles.input__placeholder__required}>
                            *{" "}
                        </span>
                    )}
                    {label}
                </div>
                <input
                    className={cn(styles.input, {
                        [styles.input__disabled]: disabled,
                        [styles.input__error]: error,
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
                <div className={styles.input__error__container}>
                    <Icon
                        name="error"
                        size={16}
                        className={styles.input__error__container__icon}
                    />
                    <div className={styles.input__error__container__message}>
                        {error?.message}
                    </div>
                </div>
            )}
        </label>
    );
};

export default Input;
