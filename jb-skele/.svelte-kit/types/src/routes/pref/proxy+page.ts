// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}
