import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
    visible: boolean;
    label: string;
    position: {
        x: number;
        y: number;
    };
    placement?: any;
}

const Tooltip = ({ label, visible }: TooltipProps) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const TooltipContent = () => {
        return (
            <div className={styles.tooltip}>
                <div className={styles.tooltipLabel}>{label}</div>
            </div>
        );
    };

    if (!visible) {
        return null;
    }

    if (isBrowser) {
        return ReactDOM.createPortal(
            <TooltipContent />,
            document.getElementById("tooltip-root")
        );
    }
    return null;
};

export default Tooltip;
