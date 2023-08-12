import { Button } from '@/components/ui/Button';
import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './HeaderActionMenu.module.scss';

interface HeaderActionMenuProps {
    title: string;
    visible: boolean;
    children: ReactNode;
}

export const HeaderActionMenu = ({
    title,
    visible,
    children,
}: HeaderActionMenuProps) => {
    if (!visible) {
        return null;
    }

    return (
        <div className={styles.item}>
            <div className={styles.title}>{title}</div>
            <div className={styles.container}>{children}</div>
            <Link href="/notifications">
                <a className={styles.button}>
                    <Button
                        buttonClassName={styles.btn}
                        text="Посмотреть все"
                    />
                </a>
            </Link>
        </div>
    );
};
