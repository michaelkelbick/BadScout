import { Kysely, PostgresDialect } from "kysely";
import type { DB } from "./types";
import { DATABASE_URL } from "$app/env/private";
import { Pool } from "pg";

export const dialect = new PostgresDialect({
	pool: new Pool({
		connectionString: DATABASE_URL
	})
});

export const db = new Kysely<DB>({
	dialect
});
