import React from "react";
import { HeaderContent } from "./headerContent";
import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetDocument } from "@/gql/graphql";

const COLLECTIONS_COUNT = 3;

export async function Header() {
	const { collections } = await executeGraphql(CollectionsGetDocument, { take: COLLECTIONS_COUNT });

	return <HeaderContent collections={collections} />;
}
