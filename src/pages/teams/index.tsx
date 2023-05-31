import { Layout } from "@/components/layouts/Layout/Layout";
import { TeamsView } from "@/components/views/TeamsView/TeamsView";

const Team = () => {
    return (
        <Layout
            title="Рейтинг лучших команд"
            description="Рейтинг команд информационного игрового сообщества AODZONE.
         Зарегистрируйся и веди статистику своей команды по разным играм.">
            <TeamsView />
        </Layout>
    );
};

export default Team;
