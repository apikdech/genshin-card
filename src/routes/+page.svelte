<script lang="ts">
	import { getCharacterState, parseMarginLeft, parseTextSize, parseTotalCards } from '$lib/utils';
	import { page } from '$app/stores';
	import CharacterDisplay from './CharacterDisplay.svelte';

	const { textSize, textColor, distance, layout, transparent, shadowSize, shadowColor } =
		Object.fromEntries($page.url.searchParams.entries());

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
		/>
	{/each}
</div>
