// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event **/
export async function load({ params }) {
	console.log(params)

	const res = await fetch(`http://localhost:3000/pref/7`);
	let prefs = await res.json();

	return prefs;
}
