import { Layout } from "@/components/layouts/Layout/Layout";
import { FriendsView } from "@/components/views/FriendsView";

const FriendsPage = () => {
    return (
        <Layout>
            <FriendsView onlineFriends={256} allFriends={512} />
        </Layout>
    );
};

export default FriendsPage;
