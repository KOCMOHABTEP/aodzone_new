import { useRef, useState } from "react";
import { useClickOutsideContainer } from "@/hooks/use-click-outside-container";
import cn from "classnames";
import { Icon } from "@/components/ui/Icon";
import styles from "./Dropdown.module.scss";

type DropdownOptionsType = {
    value: string;
    label: string;
    name?: string;
};

type DropdownOptionsCallbackType = {
    // eslint-disable-next-line no-use-before-define
    name: DropdownProps["name"];
    option: DropdownOptionsType;
};

interface DropdownProps {
    name: string;
    label: string;
    value?: string;
    options: DropdownOptionsType[];
    onSelect: (data: DropdownOptionsCallbackType) => void;
}

export const Dropdown = ({
    name,
    label,
    value,
    options,
    onSelect,
}: DropdownProps) => {
    const dropdownRef = useRef();
    const [dropdownMenuOpened, setDropdownMenuOpened] = useState(false);

    useClickOutsideContainer(dropdownRef, () => setDropdownMenuOpened(false));

    const generateDropdownValues = () => {
        const defaultValue = label || "Выбрать";

        if (value) {
            return options.find(option => option.value === value)?.label;
        }

        return defaultValue;
    };

    const handleToggleDropdownMenu = () => {
        if (options.length) {
            setDropdownMenuOpened(!dropdownMenuOpened);
        }
    };

    const handleSelectOption = (option: DropdownOptionsType) => {
        setDropdownMenuOpened(false);
        onSelect({
            name,
            option,
        });
    };

    const renderOptions = () => {
        return options.map(option => (
            <div
                className={styles.dropdownMenuItem}
                onClick={() => handleSelectOption(option)}
            >
                {option.label}
            </div>
        ));
    };

    const DropdownArrowIcon = () => {
        if (dropdownMenuOpened) {
            return <Icon name="arrow_up" />;
        }
        return <Icon name="arrow_down" />;
    };

    return (
        <div className={styles.component} ref={dropdownRef}>
            {/* <div className={styles.label}>{label}</div> */}
            <div className={styles.dropdown}>
                <div
                    className={cn(styles.input, {
                        [styles.inputActive]: dropdownMenuOpened,
                    })}
                    onClick={handleToggleDropdownMenu}
                >
                    <div>
                        <div>{generateDropdownValues()}</div>
                    </div>
                    <div className={styles.inputIcon}>
                        <DropdownArrowIcon />
                    </div>
                </div>
                {dropdownMenuOpened && (
                    <div className={styles.dropdownMenuContainer}>
                        <div className={styles.dropdownMenu}>
                            {renderOptions()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
