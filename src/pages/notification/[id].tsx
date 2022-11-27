import Layout from "@/layouts/Layout/Layout";
import NotificationDetail from "@/layouts/Notification/NotificationDetail/NotificationDetail";

const NotificationDetailPage = () => {
    return (
        <Layout>
            <NotificationDetail
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
