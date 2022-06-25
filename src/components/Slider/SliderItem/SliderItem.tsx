import styles from "@components/Slider/SliderItem/SliderItem.module.css";
import Icon from "@components/ui/Icon/Icon";
import Button from "@components/ui/Button/Button";
import cn from "classnames";

interface ISliderItem {
    title: string;
    game?: string;
    icon?: string;
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
