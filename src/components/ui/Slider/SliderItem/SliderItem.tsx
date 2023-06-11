import { Button } from "@/components/ui/Button";
import cn from "classnames";
import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import { Icon } from "@/components/ui/Icon";
import styles from "./SliderItem.module.scss";

interface ISliderItem {
    title: string;
    game?: string;
    icon?: ICON_NAME;
    description: string;
    href: string;
    image: string;
    current: boolean;
}

export const SliderItem = ({
    title,
    game,
    icon,
    description,
    // href,
    image,
    current,
}: ISliderItem) => {
    return (
        <div
            className={cn(styles.item, {
                [styles.itemActive]: current,
            })}
        >
            <div
                className={styles.frame}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.content}>
                <div className={styles.contentGame}>
                    {icon && (
                        <Icon name={icon} className={styles.contentIcon} />
                    )}
                    <span className={styles.contentLabel}>{game}</span>
                </div>
                <h2 className={styles.contentTitle}>{title}</h2>
                <p className={styles.contentDescription}>{description}</p>
                <Button text="Читать" />
            </div>
        </div>
    );
};
