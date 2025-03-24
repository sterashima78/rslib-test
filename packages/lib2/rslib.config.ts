import { defineConfig } from "@rslib/core";

export default defineConfig({
	lib: [
		{
			format: "esm",
			bundle: false,
			output: {
				distPath: {
					root: "./libs",
				},
			},
			dts: true,
		},
	],
});
