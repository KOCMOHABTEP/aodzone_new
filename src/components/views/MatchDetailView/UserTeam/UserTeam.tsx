import cn from 'classnames';
import { UserTeamItem } from '@/components/views/MatchDetailView/UserTeam/UserTeamItem';
import styles from './UserTeam.module.scss';

export const UserTeam = () => {
  return (
    <div className={styles.item}>
      <div
        className={cn(styles.statistic, {
          [styles.statistic__left]: true,
          [styles.statistic__right]: false,
        })}
      >
        <div className={styles.header}>
          <div className={styles.header__name}>user team</div>
          <div>K-A-D</div>
          <div>K/D</div>
          <div>HS</div>
        </div>
        <UserTeamItem
          title="КОСМОНАВТ"
          level={6}
          steamNickName="КОСМОНАВТЕР"
          src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1476661/draw_svg20220113-19449-1pj5omn.svg.png"
        />
      </div>
    </div>
  );
};
