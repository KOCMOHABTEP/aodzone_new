import { Layout } from "@/components/layouts/Layout/Layout";
import { PlayersView } from "@/components/views/PlayersView";

const Players = () => {
    return (
        <Layout
            name="description"
            title="Рейтинг лучших игроков онлайн игр"
            description="Рейтинг игроков, которые ведут свою статистику на портале AODZONE.
        Ты можешь зарегистрироваться, начать вести свою статистику по играм и попасть в рейтинг лучших.">
            <PlayersView />
        </Layout>
    );
};

export default Players;
