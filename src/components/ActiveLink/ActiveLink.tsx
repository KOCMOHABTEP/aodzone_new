import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

interface ActiveLinkProps {
    href: string;
    children: any;
    activeClassName: string;
    passHref?: boolean;
    exact?: boolean;
}

const ActiveLink = ({ children, exact, ...props }: ActiveLinkProps) => {
    const router = useRouter();

    const segment = p =>
        new URL(p, "http://www.example.com").pathname.split("/").filter(s => s);
    const currentPath = segment(router.asPath);
    const targetPath = segment(props.href);

    const isActive =
        currentPath.length >= targetPath.length &&
        targetPath.every((p, i) => currentPath[i] === p) &&
        (!exact || targetPath.length === currentPath.length);

    const child = Children.only(children);
    const childClassName = child.props.className || "";

    const className = isActive
        ? `${childClassName} ${props.activeClassName}`.trim()
        : childClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
