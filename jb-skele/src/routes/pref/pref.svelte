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

<div>
	<h1>App List</h1>
	{#each apps as app (app.id)}
		<ul>
			<li>{app.id} - {app.name}</li>
		</ul>
	{:else}
		<!-- this block renders when users.length === 0 -->
		<p>loading...</p>
	{/each}
</div>
