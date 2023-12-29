/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import Image from "next/image";
import React from "react";
import { Circle } from "lucide-react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { type PosterItemFragment } from "@/gql/graphql";
import { cn } from "@/lib/utils";

interface PosterImagesCarouselProps {
	poster: PosterItemFragment;
}

export function PosterImagesCarousel({ poster }: PosterImagesCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="flex h-[calc(100svh/2)] flex-col gap-5 lg:h-auto">
			<Carousel setApi={setApi} className="h-full w-full">
				<CarouselContent>
					{poster.images.map(({ url }, i) => (
						<CarouselItem
							key={url}
							className={cn("relative flex h-full w-full justify-center", {
								"mr-5": poster.orientation === "horizontal" && i < poster.images.length - 1,
							})}
						>
							<Image src={url} alt={poster.title} fill className="object-contain" />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="-left-3" />
				<CarouselNext className="-right-3" />
			</Carousel>
			<div className="flex h-3 w-full items-center justify-center gap-5">
				{Array.from({ length: count }, (_, i) => (
					<Button
						size="icon"
						aria-label={`Go to image ${i + 1}`}
						key={i}
						onClick={() => api.scrollTo(i)}
						className={`h-fit w-fit rounded-full bg-transparent p-0`}
					>
						<Circle
							className={cn("h-3 w-3", {
								"fill-gray-900 stroke-gray-900": current === i + 1,
								"fill-gray-400 stroke-gray-400": current !== i + 1,
							})}
						/>
					</Button>
				))}
			</div>
		</div>
	);
}
