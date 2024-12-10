import { Layout } from '@/components/layouts/Layout/Layout';
import { ProfileView } from '@/components/views/ProfileView';

const Profile = () => {
  return (
    <Layout name="robots" description="noindex">
      <ProfileView />
    </Layout>
  );
};

export default Profile;
