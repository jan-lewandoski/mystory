/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CollectionItem on Collection {\n  name\n}": types.CollectionItemFragmentDoc,
    "query CollectionsGet($take: Int!) {\n  collections(first: $take) {\n    ...CollectionItem\n  }\n}": types.CollectionsGetDocument,
    "fragment LandingHeroImageItem on LandingHeroImage {\n  id\n  image {\n    url(\n      transformation: {image: {resize: {width: $width, height: $height, fit: clip}}}\n    )\n  }\n  alt\n}": types.LandingHeroImageItemFragmentDoc,
    "query LandingHeroImagesGet($width: Int, $height: Int) {\n  landingHeroImages {\n    ...LandingHeroImageItem\n  }\n}": types.LandingHeroImagesGetDocument,
    "query PosterGetBySlug($slug: String!) {\n  poster(where: {slug: $slug}) {\n    ...PosterItem\n  }\n}": types.PosterGetBySlugDocument,
    "fragment PosterItem on Poster {\n  id\n  title\n  images {\n    url\n  }\n  currentPrice\n  slug\n  description\n  orientation\n}": types.PosterItemFragmentDoc,
    "query PostersGetByOrientation($take: Int!, $orientation: Orientation) {\n  posters(first: $take, where: {orientation: $orientation}) {\n    ...PosterItem\n  }\n}": types.PostersGetByOrientationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionItem on Collection {\n  name\n}"): typeof import('./graphql').CollectionItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGet($take: Int!) {\n  collections(first: $take) {\n    ...CollectionItem\n  }\n}"): typeof import('./graphql').CollectionsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment LandingHeroImageItem on LandingHeroImage {\n  id\n  image {\n    url(\n      transformation: {image: {resize: {width: $width, height: $height, fit: clip}}}\n    )\n  }\n  alt\n}"): typeof import('./graphql').LandingHeroImageItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query LandingHeroImagesGet($width: Int, $height: Int) {\n  landingHeroImages {\n    ...LandingHeroImageItem\n  }\n}"): typeof import('./graphql').LandingHeroImagesGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PosterGetBySlug($slug: String!) {\n  poster(where: {slug: $slug}) {\n    ...PosterItem\n  }\n}"): typeof import('./graphql').PosterGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PosterItem on Poster {\n  id\n  title\n  images {\n    url\n  }\n  currentPrice\n  slug\n  description\n  orientation\n}"): typeof import('./graphql').PosterItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PostersGetByOrientation($take: Int!, $orientation: Orientation) {\n  posters(first: $take, where: {orientation: $orientation}) {\n    ...PosterItem\n  }\n}"): typeof import('./graphql').PostersGetByOrientationDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
