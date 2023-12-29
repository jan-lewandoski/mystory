"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

export function ActiveLink({ className = "", children, ...props }: LinkProps<{}>) {
	const pathname = usePathname();
	const isCurrentPage =
		props.href === "/" ? pathname === props.href : pathname.startsWith(props.href as string);

	return (
		<Link
			aria-current={isCurrentPage ? "page" : undefined}
			className={cn(
				"text-xs uppercase tracking-wider text-slate-700 hover:font-bold hover:text-slate-900 lg:text-sm",
				className,
				{
					"font-bold text-slate-900": isCurrentPage,
				},
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
