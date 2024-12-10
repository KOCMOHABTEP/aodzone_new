import { useSelector } from 'react-redux';
import cn from 'classnames';
import { getSidebarCollapsed } from '@/redux/app/app.selectors';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Container.module.scss';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  const sidebarCollapsed = useSelector(getSidebarCollapsed);

  return (
    <div
      className={cn(styles.root, {
        [styles.rootFull]: sidebarCollapsed,
      })}
    >
      <div
        className={cn(styles.content, {
          [styles.contentFull]: sidebarCollapsed,
        })}
      >
        {children}
      </div>
    </div>
  );
};
