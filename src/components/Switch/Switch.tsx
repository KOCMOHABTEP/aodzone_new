import cn from "classnames";
import styles from "./Switch.module.css";

interface SwitchProps {
    value: boolean;
    onClick: () => void;
}

const Switch = ({ value, onClick }: SwitchProps) => {
    return (
        <div className={styles.component} onClick={onClick}>
            <div className={styles.label}>Favourites</div>
            <div
                className={cn(styles.switch, {
                    [styles.switchOn]: value === true,
                })}
            >
                <div
                    className={cn(styles.switchCircle, {
                        [styles.switchCircleOn]: value === true,
                    })}
                />
            </div>
        </div>
    );
};

export default Switch;
