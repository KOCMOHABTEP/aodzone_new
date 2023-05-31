import { Layout } from "@/components/layouts/Layout/Layout";
import { StreamView } from "@/components/views/StreamView";

const Streams = () => {
    return (
        <Layout
            title="Стримы онлайн игр"
            description="Последние стримы различных онлайн игр на портале AODZONE. На одной странице, можно посмотреть онлайн и записи стримов, по играм: Dota2, Call Of Duty, Stalker и т.д."
        >
            <StreamView />
        </Layout>
    );
};

export default Streams;
