<script lang="ts">
	import { onMount } from 'svelte';

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

<h1>Preferences</h1>

<section>
	{#each apps as app (app.id)}
		<h3 class="text-3xl font-bold underline">{app.name}</h3>
	{:else}
		<!-- this block renders when users.length === 0 -->
		<p>loading....</p>
	{/each}
</section>
