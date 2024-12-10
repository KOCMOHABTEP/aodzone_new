import styles from './Members.module.scss';

interface MembersProps {
  members: number;
}

export const Members = ({ members }: MembersProps) => {
  const maxMembers = 20;

  const membersPercentage = (members * 100) / maxMembers;

  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        {members} / {maxMembers}
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${membersPercentage}%` }}
        />
      </div>
    </div>
  );
};
