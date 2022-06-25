import Layout from "@layouts/Layout/Layout";
import ProfileUserBanner from "@layouts/Profile/ProfileUserBanner/ProfileUserBanner";
import { Widget } from "@components/Widget/Widget";
import { WidgetLastMatches } from "@components/Widget/WidgetLastMatches/WidgetLastMatches";

const Profile = () => {
    return (
        <Layout>
            <ProfileUserBanner />

            <Widget title="Опачки" />
            <WidgetLastMatches />
        </Layout>
    );
};

export default Profile;
