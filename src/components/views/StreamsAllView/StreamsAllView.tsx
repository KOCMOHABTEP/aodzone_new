import { StreamItem } from "@/components/views/StreamView/StreamItem";
import { StreamsFilter } from "@/components/views/StreamView/StreamsFilter";
import { StreamFilterIAll } from "@/components/views/StreamView/StreamsFilter/StreamFilterIAll";
import styles from "./StreamsAllView.module.scss";

export const StreamsAllView = () => {
    return (
        <div>
            <div className={styles.title}>Список всех стримов</div>
            <StreamsFilter />
            <div className={styles.list}>
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />

                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />

                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
                <StreamItem
                    nameGame="World plane 3"
                    title="Играем в игру на выживание"
                    nickName="КОСМОНАВТ"
                    numbersViews={32}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
            </div>
        </div>
    );
};
