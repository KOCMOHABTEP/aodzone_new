import { Header } from '@/components/ui/Header/Header';
import { Sidebar } from '@/components/ui/Sidebar/Sidebar';
import { Container } from '@/components/containers/Container/Container';
import Head from 'next/head';
import { Footer } from '@/components/ui/Footer';
import styles from './Layout.module.scss';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface ILayout {
  title?: string;
  description?: string;
  name?: string;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({
  title = 'AOD Zone',
  description = 'noindex',
  name = 'robots',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} key="desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Sidebar />
        <Container>{children}</Container>
        <Footer />
      </div>
      <div id="modal-root" />
      <div id="tooltip-root" />
    </>
  );
};
