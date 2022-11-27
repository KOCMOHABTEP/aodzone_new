import cn from "classnames";
import Icon from "@/components/Icon/Icon";
import { useState } from "react";
import { ICON_NAME } from "@/components/Icon/Icon.library";
import SliderItem from "./SliderItem/SliderItem";
import styles from "./Slider.module.css";

const Slider = () => {
    const slidesList = [
        {
            title: "Что такое Call of Duty: Online",
            game: "Call of Duty: Black Ops",
            icon: "game_bo",
            description:
                "Небольшая статья о малоизвестной части Call Of Duty с большим потенциалом",
            image: "/img/slider-image_1.jpg",
            href: "#",
        },
        {
            title: "Лучшие эмблемы ноября в Black Ops III",
            game: "Call of Duty: Black Ops",
            icon: "game_bo",
            description:
                "В первом же месяце, после выхода Black Ops III, было создано очень много интересных эмблем на разную тематику. Даже трудно поверить в то, что они были созданы без Фотошопа. Предлагаем взглянуть на ТОП-10 эмблемок месяца.",
            image: "/img/slider-image_2.jpg",
            href: "#",
        },
        {
            title: "8 интересных колод использующих карты Лиги Исследователей",
            game: "Hearthstone",
            icon: "game-hs",
            description:
                "Представляем вашему вниманию 8 колод, которые были созданы или обновлены после выхода Лиги Исследователей",
            image: "/img/slider-image_3.jpg",
            href: "#",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        if (currentSlide) setCurrentSlide(currentSlide - 1);
        else setCurrentSlide(slidesList.length - 1);
    };

    const nextSlide = () => {
        if (currentSlide < slidesList.length - 1)
            setCurrentSlide(currentSlide + 1);
        else setCurrentSlide(0);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.sliderControls}>
                <div className={styles.sliderControlsItem} onClick={prevSlide}>
                    <Icon
                        className={cn(styles.sliderControlsItemIcon)}
                        name="arrow_left"
                    />
                </div>
                <div className={styles.sliderControlsItem} onClick={nextSlide}>
                    <Icon
                        className={cn(styles.sliderControlsItemIcon)}
                        name="arrow_right"
                    />
                </div>
            </div>
            <div className={styles.sliderInner}>
                {slidesList.map(
                    (
                        { description, image, icon, href, game, title },
                        index
                    ) => (
                        <SliderItem
                            description={description}
                            image={image}
                            icon={icon as ICON_NAME}
                            href={href}
                            game={game}
                            title={title}
                            /* eslint-disable-next-line react/no-array-index-key */
                            key={index}
                            current={index === currentSlide}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Slider;
