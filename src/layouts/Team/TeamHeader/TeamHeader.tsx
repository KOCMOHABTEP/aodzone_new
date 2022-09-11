import Tag from "@components/Tag/Tag";
import Button from "@components/Button/Button";
import styles from "./TeamHeader.module.css";

interface TeamHeaderProps {
    handleOpenTeamModal: () => void;
}

const TeamHeader = ({ handleOpenTeamModal }: TeamHeaderProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemHead}>
                <Tag label="ROKIE" />
                <Tag label="ROKIE" />
                <Tag label="ROKIE" />
            </div>
            <div>Серединка</div>
            <div className={styles.itemBottom}>
                <div className={styles.itemBottomLeft}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className={styles.itemBottomRight}>
                    <div className={styles.itemBottomRightButton}>
                        <Button
                            onClick={handleOpenTeamModal}
                            buttonClassName={styles.itemButton}
                            text="+ ADD TEAM"
                        />
                    </div>
                    <div>1</div>
                </div>
            </div>
        </div>
    );
};

export default TeamHeader;
