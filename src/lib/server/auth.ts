import { betterAuth } from "better-auth";
import { dialect } from "./db";
import { getRequestEvent } from "$app/server";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { BETTER_AUTH_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$app/env/private";

export const auth = betterAuth({
	baseURL: BETTER_AUTH_URL,
	database: {
		type: "postgres",
		dialect: dialect
	},
	emailAndPassword: {
		enabled: true
	},
	socialProviders: {
		google: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}
	},
	plugins: [sveltekitCookies(getRequestEvent)]
});
