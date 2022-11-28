import { Header } from "@/layouts/Header/Header";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { Container } from "@/components/containers/Container/Container";
import Head from "next/head";
import styles from "./Layout.module.scss";

interface ILayout {
    title?: string;
    children: any;
}

export const Layout = ({ title = "AOD Zone", children }: ILayout) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link
                    rel="icon"
                    href="/Vika Files/CodeProjects/aodzone_new/public/favicon.ico"
                />
            </Head>
            <div>
                <Header />
                <Sidebar />
                <Container>{children}</Container>
            </div>
            <div id="modal-root" />
            <div id="tooltip-root" />
        </>
    );
};
