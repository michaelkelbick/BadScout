import { BETTER_AUTH_URL } from "$app/env/private";
import { adminClient, inferOrgAdditionalFields, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/svelte";
import type { AuthType } from "./server/auth";

export const authClient = createAuthClient({
	baseURL: BETTER_AUTH_URL,
  plugins: [organizationClient({
    schema: inferOrgAdditionalFields<AuthType>()
	}), adminClient()]
});
