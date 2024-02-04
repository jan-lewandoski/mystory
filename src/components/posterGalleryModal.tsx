"use client";

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import Image from "next/image";
import { Circle } from "lucide-react";
import React from "react";
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PostersGalleryDialogProps {
	poster: PosterItemFragment;
	startIndex?: number;
}

export function PosterGalleryDialog({ poster, startIndex = 0 }: PostersGalleryDialogProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(2);
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
	}, [api, startIndex]);

	return (
		<Dialog>
			<DialogTrigger>
				<Image
					src={poster.images[startIndex].url}
					alt={poster.title}
					fill
					className="object-contain"
				/>
			</DialogTrigger>
			<DialogContent className="flex h-[100svh] w-screen max-w-4xl items-center justify-center border-none bg-transparent shadow-none">
				<div className="flex h-full flex-1 flex-col gap-5">
					<Carousel opts={{ startIndex }} setApi={setApi} className="h-full w-full">
						<CarouselContent>
							{poster.images.map(({ url }, i) => (
								<CarouselItem
									key={url}
									className={cn("relative flex h-full w-full justify-center", {
										"mr-5": i < poster.images.length - 1,
									})}
								>
									<Image src={url} alt={poster.title} fill className="object-contain" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="-left-3 md:left-0" />
						<CarouselNext className="-right-3 md:right-0" />
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
			</DialogContent>
		</Dialog>
	);
}
