import { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@/components/ui/Icon";
import styles from "./Modal.module.scss";

interface ModalProps {
    title: string;
    description: string;
    children: ReactNode;
    visibility: boolean;
    onClose: () => void;
}

export const Modal = ({
    title,
    description,
    children,
    visibility,
    onClose,
}: ModalProps) => {
    const modalContainerRef = useRef(null);
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    if (!visibility) {
        return null;
    }

    const handleClickOutside = event => {
        if (
            event.target !== modalContainerRef.current &&
            !modalContainerRef.current.contains(event.target)
        ) {
            onClose();
        }
    };

    const ModalContent = () => {
        return (
            <div onClick={handleClickOutside} className={styles.overlay}>
                <div ref={modalContainerRef} className={styles.item}>
                    <div className={styles.item_close} onClick={onClose}>
                        <Icon name="xmark" size={16} />
                    </div>
                    <div className={styles.head}>
                        <div className={styles.head__title}>{title}</div>
                        <div className={styles.head__description}>
                            {description}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        );
    };

    if (isBrowser) {
        return ReactDOM.createPortal(
            <ModalContent />,
            document.getElementById("modal-root")
        );
    }
    return null;
};
