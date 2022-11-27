import Icon from "@/components/Icon/Icon";
import Button from "@/components/ui/Button/Button";
import cn from "classnames";
import { ICON_NAME } from "@/components/Icon/Icon.library";
import styles from "./SliderItem.module.css";

interface ISliderItem {
    title: string;
    game?: string;
    icon?: ICON_NAME;
    description: string;
    href: string;
    image: string;
    current: boolean;
}

export default function SliderItem({
    title,
    game,
    icon,
    description,
    // href,
    image,
    current,
}: ISliderItem) {
    const renderIcon = () => {
        if (icon) {
            return (
                <Icon name={icon} className={styles.sliderItemContentIcon} />
            );
        }
        return null;
    };

    return (
        <div
            className={cn(styles.sliderItem, {
                [styles.sliderItemActive]: current,
            })}
        >
            <div
                className={styles.sliderItemContentFrame}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.sliderItemContent}>
                <div className={styles.sliderItemContentGame}>
                    {renderIcon()}
                    <span className={styles.sliderItemContentGameText}>
                        {game}
                    </span>
                </div>
                <h1 className={styles.sliderItemContentTitle}>{title}</h1>
                <p className={styles.sliderItemContentDescription}>
                    {description}
                </p>
                <Button text="ЧИТАТЬ" />
            </div>
        </div>
    );
}
