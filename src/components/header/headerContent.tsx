"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLink } from "../activeLink";
import { type CollectionItemFragment } from "@/gql/graphql";
import { cn } from "@/lib/utils";

interface HeaderExtensionProps {
	collections: CollectionItemFragment[];
}

export function HeaderContent({ collections }: HeaderExtensionProps) {
	const pathname = usePathname();

	return (
		<div className="w-full">
			{/* <Banner collections={collections} /> */}
			<div className="max-w-header mx-auto">
				<nav className="flex w-full flex-row-reverse">
					<div
						className={cn("flex w-full flex-col items-end p-4", {
							"flex-row-reverse items-center justify-between": pathname !== "/",
						})}
					>
						<ul className="flex h-full min-h-[28px] w-fit items-center justify-between gap-5">
							<ActiveLink href="/">Home</ActiveLink>
							<ActiveLink href="/posters">Posters</ActiveLink>
						</ul>
						<Link
							href="/"
							className={cn(
								"w-full py-3 text-center text-3xl uppercase tracking-widest lg:py-5 lg:text-5xl",
								{
									"w-fit p-0 text-base lg:text-lg": pathname !== "/",
								},
							)}
						>
							MYSTORY.
						</Link>
						{pathname === "/" ? (
							<ul className="flex min-h-[28px] w-full items-center justify-center gap-5">
								{collections.map((collection) => (
									<ActiveLink
										key={collection.name}
										href={{
											pathname: "/posters",
										}}
									>
										{collection.name}
									</ActiveLink>
								))}
							</ul>
						) : null}
					</div>
				</nav>
			</div>
		</div>
	);
}
