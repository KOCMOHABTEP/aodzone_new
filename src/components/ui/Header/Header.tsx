import { Icon } from "@/components/ui/Icon";
import { UserCard } from "@/components/ui/UserCard";
import { HeaderActionMenu } from "@/components/ui/Header/HeaderActionMenu";
import { useState } from "react";
import { HeaderNotification } from "@/components/ui/Header/HeaderNotification";
import { Button } from "@/components/ui/Button";
import { useSelector } from "react-redux";
import { getUserAuth } from "@/redux/auth/auth.selector";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
    const isAuth = useSelector(getUserAuth);

    console.log(isAuth);

    const [menuNotificationsVisible, setMenuNotificationsVisible] =
        useState(false);
    const [menuFriendsVisible, setMenuFriendsVisible] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                {/* <div className={styles.controls}> */}
                {/*    <div */}
                {/*        className={styles.controlsItem} */}
                {/*        onClick={() => */}
                {/*            setMenuNotificationsVisible( */}
                {/*                !menuNotificationsVisible */}
                {/*            ) */}
                {/*        } */}
                {/*    > */}
                {/*        <Icon name="notification" /> */}
                {/*        <div className={styles.activities}>1</div> */}
                {/*        <HeaderActionMenu */}
                {/*            visible={menuNotificationsVisible} */}
                {/*            title="Уведомления" */}
                {/*        > */}
                {/*            <HeaderNotification */}
                {/*                title="Вас приглашают на игру" */}
                {/*                data="22.09.2022 16:45" */}
                {/*                read={false} */}
                {/*            /> */}
                {/*            <HeaderNotification */}
                {/*                title="У вас новое сообщение" */}
                {/*                data="22.09.2022 16:45" */}
                {/*                description="Описание" */}
                {/*                read={true} */}
                {/*            /> */}
                {/*            <HeaderNotification */}
                {/*                title="Новый ответ на форум" */}
                {/*                data="22.09.2022 16:45" */}
                {/*                read={true} */}
                {/*            /> */}
                {/*        </HeaderActionMenu> */}
                {/*    </div> */}
                {/*    <a href="/friends"> */}
                {/*        <div className={styles.controlsItem}> */}
                {/*            <Icon name="comments" /> */}
                {/*            <div className={styles.activities}>2</div> */}
                {/*        </div> */}
                {/*    </a> */}
                {/* </div> */}
                {isAuth ? (
                    <UserCard />
                ) : (
                    <Link href="/login/">
                        <a className={styles.wrapper}>
                            <Button buttonClassName={styles.btn} text="Войти" />
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
};
