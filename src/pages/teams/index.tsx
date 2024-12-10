import { Layout } from '@/components/layouts/Layout/Layout';
import { TeamsView } from '@/components/views/TeamsView/TeamsView';

const Team = () => {
  return (
    <Layout
      name="description"
      title="Рейтинг лучших игровых команд онлайн игр"
      description="Рейтинг команд информационного игрового сообщества AODZONE.
         Зарегистрируйся и веди статистику своей команды по разным играм."
    >
      <TeamsView />
    </Layout>
  );
};

export default Team;
