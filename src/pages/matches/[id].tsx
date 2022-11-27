import Layout from "@/layouts/Layout/Layout";
import MatchDetail from "@/layouts/Matches/MatchDetail/MatchDetail";

const MatchDetailPage = () => {
    return (
        <Layout title="AOD Zone | Матч">
            <MatchDetail
                title="лучший из 1"
                description="КРАКЕН ВЫСШАЯ ЛИГА"
                src="https://pngimg.com/uploads/call_of_duty/call_of_duty_PNG1.png"
                data="30 мая 2022"
                time="16:30"
            />
        </Layout>
    );
};

export default MatchDetailPage;
