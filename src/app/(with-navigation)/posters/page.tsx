import { type Metadata } from "next";
import React from "react";
import { z } from "zod";
import { capitalizeFirstLetter } from "@/lib/utils";

const productsPageSchema = z.object({
	searchParams: z.object({
		page: z.coerce.number().min(1).optional(),
		category: z.string().optional(),
	}),
});

type ProductsPageProps = z.infer<typeof productsPageSchema>;

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
	return {
		title: searchParams.category
			? `Products | ${capitalizeFirstLetter(searchParams.category)}`
			: `Products | All products`,
	};
}

export default async function Products(props: ProductsPageProps) {
	const { searchParams } = productsPageSchema.parse(props);

	return (
		<div>
			<h1 className="mb-4 text-4xl font-bold capitalize">
				{searchParams.category ? searchParams.category : "All products"}
			</h1>
			<ul></ul>
		</div>
	);
}
