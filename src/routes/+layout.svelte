<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { ModeWatcher } from "mode-watcher";
	import { onMount } from "svelte";

	let { children } = $props();

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;
		registration.addEventListener("updatefound", () => {
			const newSW = registration.installing;
			newSW?.addEventListener("statechange", () => {
				if (newSW.state === "installed") {
					if (confirm("New update available! Would you like to reload?")) {
						newSW.postMessage({ type: "SKIP_WAITING" });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate();
	});
</script>

<ModeWatcher defaultMode="dark" />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
