"use client";

import React from "react";
import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {};
type LinkInformation = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const links: LinkInformation[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
];

export default function NavLink({}: Props) {
  const pathName = usePathname();
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 my-1",
              {
                "bg-sky-100 text-blue-600": pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
