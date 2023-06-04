import { AchievementsBar } from "@/components/ui/AchievementsBar";
import { WidgetLastMatches } from "@/components/ui/Widget/WidgetLastMatches/WidgetLastMatches";
import { UserHeader } from "@/components/ui/UserHeader";
import { TeamMembers } from "@/components/views/ProfileView/TeamMembers";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import styles from "./ProfileView.module.scss";

export const ProfileView = () => {
    const userData = useAppSelector(state => state.auth.user);
    console.log(userData);

    const achievementsVisible = true;
    const matchesVisible = false;
    const teamVisible = false;

    return (
        <>
            <div className={styles.item}>
                {userData && (
                    <UserHeader
                        nickname={userData.nickname}
                        firstName={userData.firstName}
                        lastName={userData.lastName}
                        birthdayDate={userData.birthdayDate}
                        createdDate={userData.createdDate}
                    />
                )}
            </div>
            <div className={styles.wrapper}>
                {achievementsVisible && <AchievementsBar />}
            </div>
            {/* <div className={styles.row}> */}
            {/* <div className={styles.column}> */}
            {/*    <ProfileUserActivity /> */}
            {/* </div> */}
            {/* </div> */}
            <div className={styles.team}>
                {teamVisible && <TeamMembers />}
                {!teamVisible && (
                    <div className={styles.noTeam}>
                        <div className={styles.noTeamTitle}>
                            На данный момент у Вас ещё нет команды.
                        </div>
                        <Link href="/teams/create">
                            <a>
                                <Button text="Создать команду" />
                            </a>
                        </Link>
                    </div>
                )}
            </div>
            {matchesVisible && <WidgetLastMatches title="Последние матчи" />}
            {!matchesVisible && (
                <div className={styles.matches}>
                    <div className={styles.matchesTitle}>
                        На данный момент у вас нет матчей
                    </div>
                    <Link href="/matches/add">
                        <a>
                            <Button text="Создать матч" />
                        </a>
                    </Link>
                </div>
            )}
        </>
    );
};
