import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface LandingBannerProps {
	image: StaticImageData;
	alt: string;
	title: string;
	description: string;
}

export function LandingBanner({ image, alt, title, description }: LandingBannerProps) {
	return (
		<section className="relative flex h-[372px] w-full flex-row-reverse p-5 lg:p-10">
			<Image src={image} alt={alt} fill sizes="100vw" placeholder="blur" className="object-cover" />
			<div className="z-10 flex h-full w-fit flex-col items-end justify-between gap-2 bg-white p-5">
				<div className="flex flex-col gap-2">
					<p className="text-lg uppercase lg:text-2xl">{title}</p>
					<p className="text-xs uppercase lg:text-sm">{description}</p>
				</div>
				<Link className="text-sm font-medium uppercase underline lg:text-base" href="/posters">
					Shop now
				</Link>
			</div>
		</section>
	);
}
