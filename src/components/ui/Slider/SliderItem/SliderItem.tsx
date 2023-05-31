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
    const renderIcon = () => {
        if (icon) {
            return <Icon name={icon} className={styles.icon} />;
        }
        return null;
    };

    return (
        <div
            className={cn(styles.item, {
                [styles.item__active]: current,
            })}
        >
            <div
                className={styles.content__frame}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.content}>
                <div className={styles.content__game}>
                    {renderIcon()}
                    <span className={styles.content__text}>{game}</span>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <Button text="ЧИТАТЬ" />
            </div>
        </div>
    );
};
