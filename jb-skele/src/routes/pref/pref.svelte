<script lang="ts">
	import { onMount } from 'svelte';
	import App from './app.svelte';

	type App = {
		id: number;
		name: string;
		created_at: Date;
		updated_at: Date;
	};

	let apps: App[] = [];
	onMount(async () => {
		const res = await fetch(`http://localhost:3000/app`);
		apps = await res.json();
	});
</script>

<h1 class="m-3 text-3xl font-bold underline">Preferences</h1>

<section class="m-3">
	{#each apps as app (app.id)}
		<h2 class="text-2xl font-bold"><a href="/pref/{app.id}">{app.name}</a></h2>
		<!-- code special case for global/app specific prefs -->
		{#if app.id > 6}
			<!-- per app -->
			<App app_id={app.id} app_name={app.name} />
		{:else}
			<!-- global -->
			Global
		{/if}
	{:else}
		<!-- this block renders when users.length === 0 -->
		<p>loading....</p>
	{/each}
</section>
