<script lang="ts">
	// !!!!!!!!!!!!!!!!!!!
	// this file will be replaced by pages in /pref/[slug]/
	// !!!!!!!!!!!!!!!!!!!

	import { onMount } from 'svelte';

	export let app_id: number;
	export let app_name: string;

	type Pref = {
		id: number;
		app_id: number;
		name: string;
		value: string;
		created_at: Date;
		updated_at: Date;
	};

	let prefs: Pref[] = [];
	onMount(async () => {
		const res = await fetch(`http://localhost:3000/pref/${app_id}`);
		prefs = await res.json();
	});
</script>

{#if app_id}
	<p class="font-bold">App Preferences for {app_name} ({app_id})</p>
{:else}
	Loading!!!
{/if}
