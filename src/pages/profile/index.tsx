import Layout from "@layouts/Layout/Layout";
import ProfileUserBanner from "@layouts/Profile/ProfileUserBanner/ProfileUserBanner";
import { Widget } from "@features/Widget/Widget";
import { WidgetLastMatches } from "@features/Widget/WidgetLastMatches/WidgetLastMatches";
import AchievementsBar from "@features/AchievementsBar/AchievementsBar";
import Achievement from "@components/Achievement/Achievement";

const Profile = () => {
    return (
        <Layout>
            <ProfileUserBanner />
            <AchievementsBar />
            <Achievement
                level={1}
                image="https://cdn3.iconfinder.com/data/icons/unigrid-phantom-achievements-badges/60/028_007_achievement_badge_wreath_award_game_joystick_play_player_rank_highscore_console-512.png"
            />
            <Achievement image="https://img.freepik.com/free-psd/cartoon-look-3-star-icon-3d-render-concept-for-achievements-games-customer-rating-feedback_492780-2650.jpg?w=2000" />
            <Achievement image="https://w7.pngwing.com/pngs/842/774/png-transparent-computer-icons-video-game-developer-game-fonts-game-text-logo.png" />
            <Achievement image="https://mpng.subpng.com/20171128/226/gold-cup-trophy-png-clipart-image-5a1d42e2b6f099.7848411215118671067493.jpg" />
            <Achievement
                level={23}
                image="https://cdn-icons-png.flaticon.com/512/470/470340.png"
            />
            <Widget title="Опачки" />
            <WidgetLastMatches />
        </Layout>
    );
};

export default Profile;
