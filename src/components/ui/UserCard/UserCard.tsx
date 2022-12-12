import { useRef, useState } from "react";
import { UserCardMenu } from "@/components/ui/UserCard/UserCardMenu";
import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import { useClickOutsideContainer } from "@/hooks/use-click-outside-container";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user/user.selectors";
import { UserCardMenuItem } from "@/components/ui/UserCard/UserCardMenu/UserCardMenuItem";
import { useAppDispatch } from "@/redux/store";
import { logout } from "@/redux/auth/auth.slice";
import { useRouter } from "next/router";
import styles from "./UserCard.module.scss";

export const UserCard = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const userData = useSelector(getUser);

    const userCardMenuRef = useRef(null);
    const [userSettingsIsOpened, setUserSettingsIsOpened] = useState(false);
    useClickOutsideContainer(userCardMenuRef, () =>
        setUserSettingsIsOpened(false)
    );

    const handleSelectLogout = () => {
        dispatch(logout());
        setUserSettingsIsOpened(false);
    };

    const handleSelectProfile = () => {
        setUserSettingsIsOpened(false);
        router.push("/profile");
    };

    return (
        <div ref={userCardMenuRef} className={styles.component}>
            <div className={styles.card}>
                <div className={styles.avatar}>
                    <Link href="/profile" passHref>
                        <a>
                            <Avatar />
                        </a>
                    </Link>
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>{userData.nickName}</div>
                    {/* <div className={styles.level}>Уровень 32</div> */}
                </div>
                <div className={styles.control}>
                    <div
                        className={styles.button}
                        onClick={() =>
                            setUserSettingsIsOpened(!userSettingsIsOpened)
                        }
                    >
                        {userSettingsIsOpened ? (
                            <Icon name="arrow_up" size={16} />
                        ) : (
                            <Icon name="arrow_down" size={16} />
                        )}
                    </div>
                </div>
            </div>
            {userSettingsIsOpened && (
                <UserCardMenu>
                    <UserCardMenuItem
                        label="Профиль"
                        icon="profile"
                        onSelectItem={handleSelectProfile}
                    />
                    <UserCardMenuItem
                        label="Выйти"
                        icon="logout"
                        onSelectItem={handleSelectLogout}
                    />
                </UserCardMenu>
            )}
        </div>
    );
};
