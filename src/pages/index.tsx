import { Layout } from "@/components/layouts/Layout/Layout";
import { HomeView } from "@/components/views/HomeView";

const Home = () => {
    return (
        <Layout
            name="description"
            title="Сайт онлайн сообщества AODZONE"
            description="Первое игровое онлайн сообщество, где ты сможешь найти друзей, почитать актуальные новости и предложить свою новость. Вести свой рейтинг разных игр. Просматривать прикольные картинки.
            "
        >
            <HomeView />
        </Layout>
    );
};

export default Home;
