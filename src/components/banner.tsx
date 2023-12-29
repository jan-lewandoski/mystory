"use client";

import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ActiveLink } from "./activeLink";
import { type CollectionItemFragment } from "@/gql/graphql";

interface BannerProps {
	collections: CollectionItemFragment[];
}

export function Banner({ collections }: BannerProps) {
	const [hidden, setHidden] = React.useState(false);

	if (hidden) {
		return null;
	}

	function onDismiss() {
		setHidden(true);
	}

	return (
		<div className="w-full bg-black">
			<div className="max-w-header col-span-12 mx-auto grid grid-cols-12 items-center justify-between bg-black py-5 text-white">
				<div className="col-span-10 col-start-2 flex items-center justify-center gap-5">
					<p className="text-center uppercase">black week! shop now</p>
					<ul className="flex gap-5">
						{collections.map((collection) => (
							<ActiveLink
								className="border border-white p-2 text-white hover:font-normal hover:text-white"
								key={collection.name}
								href={{
									pathname: "/posters",
								}}
							>
								{collection.name}
							</ActiveLink>
						))}
					</ul>
				</div>
				<Button
					variant="link"
					className="col-span-1 justify-self-end text-white"
					onClick={onDismiss}
					aria-label="Dismiss banner"
				>
					<XIcon />
				</Button>
			</div>
		</div>
	);
}
