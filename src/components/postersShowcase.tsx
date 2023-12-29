import React from "react";
import Link from "next/link";
import { Poster } from "./poster";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { executeGraphql } from "@/api/graphqlApi";
import { type Orientation, PostersGetByOrientationDocument } from "@/gql/graphql";

const POSTERS_SHOWCASE_COUNT = 10;
const POSTERS_SHOWCASE_SKELETON_COUNT = 4;

interface PostersShowcaseProps {
	title: string;
	orientation: Orientation;
}

export async function PostersShowcase({ title, orientation }: PostersShowcaseProps) {
	const { posters } = await executeGraphql(PostersGetByOrientationDocument, {
		take: POSTERS_SHOWCASE_COUNT,
		orientation,
	});

	return (
		<div className="max-w-content mx-auto flex w-full flex-col items-center justify-center px-5 py-10">
			<h2 className="text-sm font-medium uppercase tracking-wider lg:text-base">{title}</h2>
			<ScrollArea className="w-full">
				<div className="mx-auto flex h-full w-max space-x-5 px-5 py-5">
					{posters.map((poster) => (
						<Poster key={poster.id} poster={poster} className="h-full" />
					))}
					<ScrollBar orientation="horizontal" />
				</div>
			</ScrollArea>
			<Link href="/posters" className="self-end text-end text-sm uppercase underline lg:text-base">
				See all
			</Link>
		</div>
	);
}

export function PostersShowcaseSkeleton({ orientation }: { orientation: Orientation }) {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-10 py-10">
			<h2 className="font-medium uppercase tracking-wider">Posters</h2>
			<div className="flex flex-col items-end gap-5">
				<ul className="flex gap-5">
					{Array.from({ length: POSTERS_SHOWCASE_SKELETON_COUNT }).map((_, i) => (
						<li key={i}>
							<Poster.Skeleton orientation={orientation} />
						</li>
					))}
				</ul>
				<Link href="/posters" className=" text-sm uppercase underline">
					See all
				</Link>
			</div>
		</div>
	);
}

PostersShowcase.Skeleton = PostersShowcaseSkeleton;
