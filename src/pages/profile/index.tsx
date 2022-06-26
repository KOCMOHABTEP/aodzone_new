import Layout from "@layouts/Layout/Layout";
import ProfileUserBanner from "@layouts/Profile/ProfileUserBanner/ProfileUserBanner";
import { Widget } from "@features/Widget/Widget";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";

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
