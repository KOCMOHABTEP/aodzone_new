import TeamForm from "@layouts/Team/TeamForm/TeamForm";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import Layout from "@layouts/Layout/Layout";
import ProfileUserInfo from "@layouts/Profile/ProfileUserInfo/ProfileUserInfo";
import TeamMembers from "@layouts/Team/TeamMembers/TeamMembers";

const Team = () => {
    return (
        <Layout>
            {/* <TeamBanner /> */}
            <TeamForm />
            <div>
                <div>
                    <ProfileUserInfo />
                </div>
                <div>
                    <TeamMembers />
                </div>
            </div>
            <WidgetLastMatches />
        </Layout>
    );
};

export default Team;
