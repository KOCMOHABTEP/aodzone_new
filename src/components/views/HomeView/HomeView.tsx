import { Slider } from "@/components/ui/Slider";
import { NewsView } from "@/components/views/NewsView";
import styles from './HomeView.module.scss'

export const HomeView = () => {
    return (
        <>
            <div className={styles.wrapperH1}>
                <h1 className={styles.h1}>Игровое сообщество AODZONE</h1>
            </div>
            <Slider />
            <NewsView />
        </>
    )
}
