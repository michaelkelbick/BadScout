import { defineEnvVars } from "@sveltejs/kit/hooks";

export const variables = defineEnvVars({
	DATABASE_URL: {},
	BETTER_AUTH_URL: {},
	GOOGLE_CLIENT_ID: {},
	GOOGLE_CLIENT_SECRET: {}
});
