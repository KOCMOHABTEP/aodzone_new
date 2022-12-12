import { Icon } from "@/components/ui/Icon";
import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import styles from "./UserCardMenuItem.module.scss";

interface UserCardMenuItemProps {
    label: string;
    icon: ICON_NAME;
    onSelectItem: (label: string) => void;
}

export const UserCardMenuItem = ({
    label,
    icon,
    onSelectItem,
}: UserCardMenuItemProps) => {
    return (
        <div className={styles.item} onClick={() => onSelectItem(label)}>
            <div className={styles.container}>
                <Icon
                    name={icon}
                    size={16}
                    className={styles.container__icon}
                />
                <div className={styles.container__text}>{label}</div>
            </div>
        </div>
    );
};
