import { auth } from "$lib/server/auth"; // path to your auth file
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from "$app/env";
import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { tryCatch } from "$lib/util/try-catch";

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.request.headers.get("session_token");

	if (!token) {
		return svelteKitHandler({ event, resolve, auth, building });
	}

	const session = await tryCatch(
		db
			.selectFrom("session")
			.where("token", "=", token)
			.innerJoin("user", "session.userId", "user.id")
			.selectAll()
			.executeTakeFirstOrThrow()
	);

	if (session.data) {
		event.locals.session = session.data;
		event.locals.user = session.data;
	}
	return svelteKitHandler({ event, resolve, auth, building });
};
