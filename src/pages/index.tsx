import Layout from "@layouts/Layout/Layout";
import Slider from "@components/Slider/Slider";
import NewsList from "@layouts/News/NewsList";

const Home = () => {
    return (
        <Layout>
            <Slider />
            <NewsList />
        </Layout>
    );
};

export default Home;
