import { Layout } from "@/components/layouts/Layout/Layout";
import { NotificationDetailView } from "@/components/views/NotificationDetailView";

const NotificationDetailPage = () => {
    return (
        <Layout>
            <NotificationDetailView
                title="У вас новое сообщение"
                data="24.09.2022 15:35"
                description={
                    "                    описаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописание\n" +
                    "                    описаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописание"
                }
            />
        </Layout>
    );
};

export default NotificationDetailPage;
