import { Layout } from "@/components/layouts/Layout/Layout";
import { MatchView } from "@/components/views/MatchView";

const Matches = () => {
    return (
        <Layout
            name="description"
            title="Последние матчи онлайн игр"
            description="Последние матчи игроков сообщества AODZONE. Можно посмотреть статистику, выбрать активного игрока, или команду и предложить сыграть матч."
        >
            <MatchView />
        </Layout>
    );
};

export default Matches;
