import TeamForm from "@layouts/Team/TeamForm/TeamForm";
import ProfileUserInfo from "@layouts/Profile/ProfileUserInfo/ProfileUserInfo";
import TeamMembers from "@layouts/Team/TeamMembers/TeamMembers";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import styles from "./TeamPage.module.css";

const TeamPage = () => {
    return (
        <div className={styles.teamPage}>
            <div className={styles.teamPageForm}>
                <TeamForm />
            </div>
            <div>
                <div className={styles.teamProfileUser}>
                    <ProfileUserInfo />
                    <TeamMembers />
                </div>
            </div>
            <div>
                <WidgetLastMatches />
            </div>
        </div>
    );
};

export default TeamPage;
