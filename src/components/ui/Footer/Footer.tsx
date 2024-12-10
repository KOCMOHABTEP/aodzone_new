import { useSelector } from 'react-redux';
import { getSidebarCollapsed } from '@/redux/app/app.selectors';
import cn from 'classnames';
import Link from 'next/link';
import moment from 'moment/moment';
import { Fragment } from 'react';
import styles from './Footer.module.scss';

const SIDEBAR_FOOTER_LINKS_LIST = [
  {
    label: 'Политика конфиденциальности',
    href: '',
  },
  {
    label: 'FAQ',
    href: '',
  },
  {
    label: 'Контакты',
    href: '',
  },
  {
    label: 'О нас',
    href: '',
  },
];

export const Footer = () => {
  const sidebarCollapsed = useSelector(getSidebarCollapsed);
  const currentYear = moment().year();

  return (
    <div
      className={cn(styles.footer, {
        [styles.footerCollapsed]: sidebarCollapsed,
      })}
    >
      <div className={styles.footerLinkList}>
        {SIDEBAR_FOOTER_LINKS_LIST.map((item, idx) => (
          <Fragment key={item.label}>
            <Link href={item.href} className={styles.footerLink}>
              {item.label}
            </Link>
            {idx < SIDEBAR_FOOTER_LINKS_LIST.length - 1 && ', '}
          </Fragment>
        ))}
      </div>

      <div className={styles.footerCopyright}>
        © 2007 — {currentYear}, Aodzone
      </div>
    </div>
  );
};
