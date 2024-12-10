import { Layout } from '@/components/layouts/Layout/Layout';
import { NewsView } from '@/components/views/NewsView';

const NewsPage = () => {
  return (
    <Layout
      title="Интересные новости игрового онлайн сообщества"
      description="Можно посмотреть интересные новости по разным играм, поставить лайк и оставить комментарий.
            Та кже, можно предложить свою новость для размещения на портале сообщества."
    >
      <NewsView />
    </Layout>
  );
};

export default NewsPage;
