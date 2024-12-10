import { Layout } from '@/components/layouts/Layout/Layout';
import { MediaView } from '@/components/views/MediaView';

const MediaPage = () => {
  return (
    <Layout
      name="description"
      title="Мемы про игры"
      description="Мемы про онлайн игры: Counter Strike, Valorant, Dota2, League of Legends, Fifa, Call of Duty. "
    >
      <MediaView />
    </Layout>
  );
};

export default MediaPage;
