<script>
	import { initState, parseMarginLeft, parseTextSize, parseTotalCards } from '$lib/utils';
	import { page } from '$app/stores';
	import CharacterDisplay from './CharacterDisplay.svelte';

	const { textSize, textColor, distance, layout, transparent, shadowSize, shadowColor } =
		Object.fromEntries($page.url.searchParams.entries());

	const marginLeft = parseMarginLeft(distance);
	const totalCards = parseTotalCards(layout);
	const parsedTextSize = parseTextSize(textSize);

	const states = initState(totalCards);
</script>

<div style="display: flex; position:fixed; background:blue">
	{#each states as state (state)}
		<CharacterDisplay
			id={state.id}
			characterState={states}
			{textColor}
			textSize={parsedTextSize}
			{shadowColor}
			{shadowSize}
			transparent={transparent === 'true' ? true : false}
			marginLeft={state.id === '0' ? '0' : marginLeft}
		/>
	{/each}
</div>
