"use client";
import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

interface IProps {
    children: React.ReactNode;
    to: string
}

const ClientNavLinkComponent: FC<IProps> = ({children, to}) => {
    let pathname: string = usePathname();
    return (
        <Link href={to} className={pathname === to ? "activeMenuLink" : ""}>
            {children}
        </Link>
    );
};

export default ClientNavLinkComponent;