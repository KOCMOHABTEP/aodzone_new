import { Header } from "@/components/ui/Header/Header";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { Container } from "@/components/containers/Container/Container";
import Head from "next/head";
import styles from "./Layout.module.scss";
import {Footer} from "@/components/ui/Footer";

interface ILayout {
    title?: string;
    description?: string,
    name?: string,
    children: any;
}

export const Layout = ({
    title = "AOD Zone",
    children,
    description = "noindex",
    name = "robots",
}: ILayout) => {
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
