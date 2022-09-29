import Layout from "@layouts/Layout/Layout";
import FriendsList from "@layouts/Friends/FriendsList";

const FriendsPage = () => {
    return (
        <Layout>
            <FriendsList onlineFriends={256} allFriends={512} />
        </Layout>
    );
};

export default FriendsPage;
