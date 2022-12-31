// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event **/
export async function load({ params }) {
	const res = await fetch(`http://localhost:3000/pref/${params.slug}`);
	let prefs = await res.json();

	return prefs;
}
