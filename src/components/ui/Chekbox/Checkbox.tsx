import { forwardRef } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import IconCheck from "./checked.svg";

interface CheckboxProps {
    className?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (props, forwardedRef) => {
        const { className, disabled, name, id, label, ...rest } = props;

        return (
            <label className={cn(styles.checkbox, className)}>
                <input
                    ref={forwardedRef}
                    className={styles.checkboxInput}
                    disabled={disabled}
                    type="checkbox"
                    name={name}
                    id={id}
                    {...rest}
                />
                <div className={styles.checkboxLabel}>
                    <IconCheck className={styles.checkboxLabelIcon} />
                </div>
                <div className={styles.checkboxTitle}>{label}</div>
            </label>
        );
    }
);
