import { Layout } from "@/components/layouts/Layout/Layout";
import { HomeView } from "@/components/views/HomeView";

const Home = () => {
    return (
        <Layout
            title="Игровое онлайн сообщество AODZONE"
            description="Первое игровое онлайн сообщество, где ты сможешь найти единомышленников, почитать актуальные новости и предложить свою новость. Вести свой рейтинг разных игр. Просматривать прикольные картинки.
            "
        >
            <HomeView />
        </Layout>
    );
};

export default Home;
