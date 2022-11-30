import { ChangeEvent } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import IconCheck from "./checked.svg";

interface CheckboxProps {
    defaultChecked?: boolean;
    className?: string;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: boolean;
    name?: string;
    id?: string;
    label?: string;
}

export const Checkbox = ({
    defaultChecked,
    className,
    disabled,
    onChange,
    value,
    name,
    id,
    label,
}: CheckboxProps) => {
    return (
        <label className={cn(styles.checkbox, className)}>
            <input
                className={styles.checkboxInput}
                defaultChecked={defaultChecked}
                onChange={onChange}
                disabled={disabled}
                checked={value}
                type="checkbox"
                name={name}
                id={id}
            />
            <div className={styles.checkboxLabel}>
                <IconCheck className={styles.checkboxLabelIcon} />
            </div>
            <div className={styles.checkboxTitle}>{label}</div>
        </label>
    );
};
