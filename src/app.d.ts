// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Session, User } from "$lib/server/db/types";
import type { Selectable } from "kysely";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Selectable<Session>;
			user: Selectable<User>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
