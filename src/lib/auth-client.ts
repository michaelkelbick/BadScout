import { BETTER_AUTH_URL } from "$app/env/private";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/svelte";

export const authClient = createAuthClient({
	baseURL: BETTER_AUTH_URL,
	plugins: [organizationClient(), adminClient()]
});
