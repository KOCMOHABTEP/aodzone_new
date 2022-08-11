import Layout from "@layouts/Layout/Layout";
import MatchesBanner from "@layouts/Matches/MatchesBanner/MatchesBanner";
import MatchesRound from "@layouts/Matches/MatchesRound/MatchesRound";
import TournamentTable from "@layouts/Matches/TournamentTable/TournamentTable";

const Matches = () => {
    return (
        <Layout>
            <MatchesBanner />
            <MatchesRound />
            <TournamentTable />
        </Layout>
    );
};

export default Matches;
