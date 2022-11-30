import cn from "classnames";

import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import { ChangeEvent, FC, forwardRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Input.module.scss";

interface InputProps {
    name?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    // onFocus?: () => void;
    // onBlur?: () => void;
    icon?: ICON_NAME;
    hint?: string;
    disabled?: boolean;
    required?: boolean;
    error?: {
        valid: boolean;
        message: string;
    };
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        name,
        value,
        defaultValue,
        required,
        onChange,
        hint,
        error,
        disabled,
        label,
        ...rest
    } = props;

    console.log(value);

    const placeholderIsModified = value?.length;

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
                    ref={ref}
                    className={cn(styles.input, {
                        [styles.disabled]: disabled,
                        [styles.error]: error,
                    })}
                    type="text"
                    name={name}
                    value={value}
                    defaultValue={defaultValue}
                    required={required}
                    disabled={disabled}
                    onChange={event => onChange(event)}
                    {...rest}
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
});
