import cn from "classnames";
import styles from "./Switch.module.scss";

interface SwitchProps {
    value: boolean;
    onClick: () => void;
}

export const Switch = ({ value, onClick }: SwitchProps) => {
    return (
        <div className={styles.component} onClick={onClick}>
            <div className={styles.label}>Favourites</div>
            <div
                className={cn(styles.switch, {
                    [styles.switch__on]: value === true,
                })}
            >
                <div
                    className={cn(styles.circle, {
                        [styles.circle__on]: value === true,
                    })}
                />
            </div>
        </div>
    );
};
