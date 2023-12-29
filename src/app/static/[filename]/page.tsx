import { notFound } from "next/navigation";
import { type ComponentType } from "react";

// TODO Add SSG

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose mx-auto max-w-2xl px-5 py-10">
			<Content />
		</article>
	);
}
