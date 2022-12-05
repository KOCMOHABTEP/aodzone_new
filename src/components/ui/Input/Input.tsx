import cn from "classnames";

import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import { ChangeEvent, forwardRef, HTMLInputTypeAttribute } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Input.module.scss";

interface InputProps {
    name?: string;
    label?: string;
    value?: string;
    type?: HTMLInputTypeAttribute;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    icon?: ICON_NAME;
    placeholder?: string;
    hint?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, forwardedRef) => {
        const {
            name,
            required,
            hint,
            error,
            type = "text",
            disabled,
            label,
            ...rest
        } = props;

        return (
            <label className={styles.input__label} htmlFor={name}>
                {hint && (
                    <div className={styles.hint}>
                        <Icon
                            name="hint"
                            size={16}
                            className={styles.hint__icon}
                        />
                        <div className={styles.hint__message}>{hint}</div>
                    </div>
                )}
                <div className={styles.input__container}>
                    <input
                        ref={forwardedRef}
                        className={cn(styles.input, {
                            [styles.disabled]: disabled,
                            [styles.error]: error,
                        })}
                        type={type}
                        name={name}
                        placeholder={" "}
                        required={required}
                        disabled={disabled}
                        {...rest}
                    />
                    <div className={styles.placeholder}>
                        {required && (
                            <span className={styles.placeholder__required}>
                                *{" "}
                            </span>
                        )}
                        {label}
                    </div>
                </div>
                {error && (
                    <div className={styles.error__container}>
                        <Icon
                            name="error"
                            size={16}
                            className={styles.error__container__icon}
                        />
                        <div className={styles.error__container__message}>
                            {error}
                        </div>
                    </div>
                )}
            </label>
        );
    }
);
