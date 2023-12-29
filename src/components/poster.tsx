import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { type Orientation, type PosterItemFragment } from "@/gql/graphql";
import { cn } from "@/lib/utils";

interface PosterProps {
	poster: PosterItemFragment;
	className?: string;
}

export function Poster({ poster, className }: PosterProps) {
	return (
		<div
			key={poster.id}
			className={cn(
				"flex flex-col",
				{
					"w-[200px]": poster.orientation === "vertical",
					"w-[300px]": poster.orientation === "horizontal",
				},
				className,
			)}
		>
			<Link href={`/posters/${poster.slug}`}>
				<Image
					src={poster.images[0].url}
					alt={poster.title}
					width={poster.orientation === "vertical" ? 200 : 300}
					height={poster.orientation === "vertical" ? 300 : 200}
					className="shadow-poster"
				/>
			</Link>
		</div>
	);
}

export function PosterSkeleton({ orientation }: { orientation: Orientation }) {
	return (
		<div className="flex flex-col gap-5">
			<Skeleton
				className={cn("animate-pulse bg-stone-200", {
					"h-[300px] w-[200px]": orientation === "vertical",
					"h-[200px] w-[300px]": orientation === "horizontal",
				})}
			/>
		</div>
	);
}

Poster.Skeleton = PosterSkeleton;
