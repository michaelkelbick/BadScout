import type { ColumnType } from "kysely";
export type Generated<T> =
	T extends ColumnType<infer S, infer I, infer U>
		? ColumnType<S, I | undefined, U>
		: ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
	id: string;
	userId: string;
	accountId: string;
	providerId: string;
	accessToken: string | null;
	refreshToken: string | null;
	accessTokenExpiresAt: Timestamp | null;
	refreshTokenExpiresAt: Timestamp | null;
	scope: string | null;
	idToken: string | null;
	password: string | null;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};
export type Session = {
	id: string;
	userId: string;
	token: string;
	expiresAt: Timestamp;
	ipAddress: string | null;
	userAgent: string | null;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};
export type User = {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	image: string | null;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};
export type Verification = {
	id: string;
	identifier: string;
	value: string;
	expiresAt: Timestamp;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};
export type DB = {
	account: Account;
	session: Session;
	user: User;
	verification: Verification;
};
