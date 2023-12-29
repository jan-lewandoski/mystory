"use client";

import Slider from "react-slick";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { type LandingHeroImageItemFragment } from "@/gql/graphql";
import { HERO_IMAGE_SIZE } from "@/lib/constants";

interface SlideshowProps {
	slides: LandingHeroImageItemFragment[];
}

export function Slideshow({ slides }: SlideshowProps) {
	return (
		<Slider
			autoplay
			autoplaySpeed={5000}
			speed={1000}
			arrows={false}
			fade
			infinite
			pauseOnHover={false}
		>
			{slides.map((slide) => (
				<div className="relative h-[calc(100vh_-_148px)] w-full lg:h-auto" key={slide.image.url}>
					<Image
						alt={slide.alt}
						className="h-full w-screen object-cover brightness-75"
						src={slide.image.url}
						width={HERO_IMAGE_SIZE.width}
						height={HERO_IMAGE_SIZE.height}
						sizes="100vw"
					/>
					<div className="absolute left-0 top-0 flex h-full w-full  flex-col items-center justify-center gap-5 text-center">
						<h1 className="-mr-[0.2em] text-6xl font-bold uppercase tracking-[0.2em] text-white lg:text-8xl">
							sale
						</h1>
						<h3 className="text-lg font-normal text-white lg:text-xl">
							Browse our collection of stunning posters
						</h3>
						<Button variant="secondary" className="mt-5 font-bold uppercase" asChild>
							<Link href="/posters">Shop now</Link>
						</Button>
					</div>
				</div>
			))}
		</Slider>
	);
}
