import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckIcon, ShoppingBag } from "lucide-react";
import { Suspense } from "react";
import FramesImage from "../../../../../public/images/landing/banners/frames.jpg";
import { executeGraphql } from "@/api/graphqlApi";
import { PosterGetBySlugDocument } from "@/gql/graphql";
import { Button } from "@/components/ui/button";
import { PosterImagesCarousel } from "@/components/posterImagesCarousel";
import { PostersShowcase } from "@/components/postersShowcase";
import { LandingBanner } from "@/components/landingBanner";

function fetchPoster(slug: string) {
	return executeGraphql(PosterGetBySlugDocument, { slug });
}

type PosterPageProps = {
	params: { slug: string };
};

export async function generateMetadata({ params }: PosterPageProps): Promise<Metadata> {
	const { poster } = await fetchPoster(params.slug);

	if (!poster) {
		return {
			title: `Posters | Not found`,
			description: `Product not found`,
		};
	}

	return {
		title: `Posters | ${poster.title}`,
		description: poster.description,
	};
}

export default async function PosterPage({ params }: PosterPageProps) {
	const { poster } = await fetchPoster(params.slug);

	if (!poster) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-white">
			<div className="w-full bg-stone-200 bg-opacity-75">
				<div className="max-w-content mx-auto grid min-h-[512px] w-full grid-cols-1 gap-10 px-5 pb-5 pt-10 lg:grid-cols-2 lg:gap-20 lg:px-10">
					<PosterImagesCarousel poster={poster} />
					<div className="flex w-full flex-col gap-5">
						<div className="flex flex-col gap-0">
							<h1 className="text-lg font-extrabold uppercase tracking-wide lg:text-xl">
								{poster.title}
							</h1>
							<p className="font-medium uppercase tracking-wide text-slate-700 lg:text-lg">
								{Math.floor(poster.currentPrice / 100)} €
							</p>
						</div>
						<Button size="lg" className="font-bold uppercase">
							Add to bag <ShoppingBag className="ml-2 h-6 w-6" />
						</Button>
						<section className="mt-5 grid grid-cols-2 gap-2">
							<div className="flex items-center gap-2">
								<CheckIcon width={16} height={16} className="stroke-green-800" />
								<p className="text-xs font-medium text-green-800 lg:text-sm">In stock</p>
							</div>
							<div className="flex items-center gap-2">
								<CheckIcon width={16} height={16} />
								<p className="text-xs font-medium lg:text-sm">Delivery within 2-3 days</p>
							</div>
							<div className="flex items-center gap-2">
								<CheckIcon width={16} height={16} />
								<p className="text-xs font-medium lg:text-sm">Free return</p>
							</div>
							<div className="flex items-center gap-2">
								<CheckIcon width={16} height={16} />
								<p className="text-xs font-medium lg:text-sm">Free delivery above 100€</p>
							</div>
						</section>
						<section className="flex flex-col gap-2 border-t border-gray-300 pt-5 lg:mt-10">
							<h3 className="text-sm font-medium uppercase tracking-wide text-gray-600">
								About this poster
							</h3>
							<p className="text-sm text-gray-600">
								Tempor deserunt consectetur magna do dolore cupidatat sint veniam fugiat amet.
								Cillum quis in incididunt non laboris enim cupidatat laboris reprehenderit aute.
								Proident eiusmod id eiusmod do. Anim nulla voluptate nulla pariatur minim proident
								occaecat sunt pariatur commodo labore. Reprehenderit commodo fugiat ex velit
								voluptate tempor occaecat minim sunt. Voluptate eiusmod elit officia duis cillum
								tempor commodo culpa labore.
							</p>
						</section>
					</div>
				</div>
			</div>

			<Suspense
				fallback={
					<PostersShowcase.Skeleton
						orientation={poster.orientation === "horizontal" ? "horizontal" : "vertical"}
					/>
				}
			>
				<PostersShowcase
					orientation={poster.orientation === "horizontal" ? "horizontal" : "vertical"}
					title="You may also like"
				/>
			</Suspense>

			<div className="max-w-content mx-auto ">
				<LandingBanner
					title="10% discount"
					description="for posters with frames"
					image={FramesImage}
					alt="Frames"
				/>
			</div>

			<Suspense
				fallback={
					<PostersShowcase.Skeleton
						orientation={poster.orientation === "horizontal" ? "vertical" : "horizontal"}
					/>
				}
			>
				<PostersShowcase
					orientation={poster.orientation === "horizontal" ? "vertical" : "horizontal"}
					title="How about these?"
				/>
			</Suspense>
		</div>
	);
}
