import { Header } from "@/layouts/Header/Header";
import { Sidebar } from "@/layouts/Sidebar/Sidebar";
import { Container } from "@/layouts/Container/Container";
import Head from "next/head";

interface ILayout {
    title?: string;
    children: any;
}

const Layout = ({ title = "AOD Zone", children }: ILayout) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
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

export default Layout;
