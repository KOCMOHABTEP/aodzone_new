import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

interface LinkProps  {
    router: any;
    href: string;
    children: any;
    activeClassName: string;
}

const ActiveLink = ({ router, children, ...props }:LinkProps) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);