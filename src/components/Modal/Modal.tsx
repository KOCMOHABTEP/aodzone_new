import { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Icon from "@/components/Icon/Icon";
import styles from "./Modal.module.css";

interface ModalProps {
    title: string;
    description: string;
    children: ReactNode;
    visibility: boolean;
    onClose: () => void;
}

const Modal = ({
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
            <div onClick={handleClickOutside} className={styles.modalOverlay}>
                <div ref={modalContainerRef} className={styles.item}>
                    <div className={styles.itemClose} onClick={onClose}>
                        <Icon name="xmark" size={16} />
                    </div>
                    <div className={styles.itemHead}>
                        <div className={styles.itemHeadTitle}>{title}</div>
                        <div className={styles.itemHeadDescription}>
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

export default Modal;
