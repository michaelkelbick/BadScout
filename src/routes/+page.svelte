<script lang="ts">
	import { authClient } from "$lib/auth-client";
	const session = authClient.useSession();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Hello {$session.data ? $session.data.user.name : ""}!</p>

<div>
	{#if $session.data}
		<div>
			<p>
				{$session.data.user.name}
			</p>
			<button
				onclick={async () => {
					await authClient.signOut();
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		<button
			onclick={async () => {
				await authClient.signIn.social({
					provider: "google"
				});
			}}
		>
			Continue with Google
		</button>
	{/if}
</div>
