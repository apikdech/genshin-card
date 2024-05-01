<script lang="ts">
	import { getCharacterState, parseMarginLeft, parseTextSize, parseTotalCards } from '$lib/utils';
	import { page } from '$app/stores';
	import CharacterDisplay from '../CharacterDisplay.svelte';
	import { browser } from '$app/environment';
	import { error } from '@sveltejs/kit';

	const searchParams = browser && $page.url.searchParams;

	if (!searchParams) {
		error(404);
	}

	const { textSize, textColor, distance, layout, transparent, shadowSize, shadowColor } =
		Object.fromEntries(searchParams.entries());
	const marginLeft = parseMarginLeft(distance);
	const totalCards = parseTotalCards(layout);
	const parsedTextSize = parseTextSize(textSize);

	const characterStates = getCharacterState(totalCards);
</script>

<div style="position: fixed; display: flex;">
	{#each $characterStates as state (state.id)}
		<CharacterDisplay
			id={state.id}
			{totalCards}
			{textColor}
			textSize={parsedTextSize}
			{shadowColor}
			{shadowSize}
			transparent={transparent === 'true' ? true : false}
			marginLeft={state.id === 0 ? '0' : marginLeft}
			type="hsr"
		/>
	{/each}
</div>
