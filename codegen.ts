import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clph4t9gy180c01t2gut99q3w/master",
	documents: "src/**/*.tsx",
	generates: {
		"src/gql/": {
			preset: "client",
			plugins: [],
		},
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
