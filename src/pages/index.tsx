import { NewsView } from "@/components/views/NewsView";
import { Layout } from "@/components/layouts/Layout/Layout";
import { Slider } from "@/components/ui/Slider";

const Home = () => {
    return (
        <Layout>
            <Slider />
            <NewsView />
        </Layout>
    );
};

export default Home;
