import FramesImage from "../../../public/images/landing/banners/frames.jpg";
import { executeGraphql } from "@/api/graphqlApi";
import { LandingBanner } from "@/components/landingBanner";
import { PostersShowcase } from "@/components/postersShowcase";
import { Slideshow } from "@/components/slideshow";
import { LandingHeroImagesGetDocument } from "@/gql/graphql";
import { HERO_IMAGE_SIZE } from "@/lib/constants";

export default async function RootPage() {
	const { landingHeroImages } = await executeGraphql(LandingHeroImagesGetDocument, {
		height: HERO_IMAGE_SIZE.height,
		width: HERO_IMAGE_SIZE.width,
	});

	return (
		<div className="max-w-header mx-auto">
			<div className="w-full">
				<Slideshow slides={landingHeroImages} />
				<PostersShowcase orientation="vertical" title="Posters you may enjoy" />
				<LandingBanner
					title="10% discount"
					description="for posters with frames"
					image={FramesImage}
					alt="Frames"
				/>
				<PostersShowcase orientation="horizontal" title="You may also like" />
			</div>
		</div>
	);
}
