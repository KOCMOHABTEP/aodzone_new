import ReactDOM from "react-dom";
import { CSSProperties, useEffect, useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
    customRef: any;
    visible: boolean;
    label: string;
    attributes: any;
    customStyles: CSSProperties;
}

const Tooltip = ({
    customRef,
    label,
    visible,
    customStyles,
    attributes,
}: TooltipProps) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    if (!visible) {
        return null;
    }

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div
                ref={customRef}
                className={styles.tooltip}
                style={customStyles}
                {...attributes}
            >
                <div className={styles.tooltipLabel}>{label}</div>
            </div>,
            document.getElementById("tooltip-root")
        );
    }
    return null;
};

export default Tooltip;
