import { type Route } from "next";
import Link from "next/link";
import React from "react";

interface PaginationProps {
	pages: number;
	currentPage: number;
	baseHref: Route;
}

export function Pagination({ pages, currentPage, baseHref }: PaginationProps) {
	if (pages === 1) return null;

	return (
		<div className="flex w-fit gap-5 self-center">
			{Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
				<Link
					key={page}
					className={`rounded-full px-3 py-1 ${
						page === currentPage ? "bg-slate-900 text-white" : "bg-gray-200 text-gray-500"
					}`}
					href={{ pathname: baseHref, query: { page } }}
				>
					{page}
				</Link>
			))}
		</div>
	);
}
