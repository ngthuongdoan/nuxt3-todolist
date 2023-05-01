// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],
	// @ts-ignore
	apollo: {
		clients: {
			default: {
				httpEndpoint: "https://living-typhoon-writer.glitch.me/graphql",
			},
		},
	},
})
