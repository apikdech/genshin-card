<script lang="ts">
	import {
		getCharacterState,
		initCharacterData,
		parseMarginLeft,
		parseTextSize,
		parseTotalCards,
		characterDataStore
	} from '$lib/utils';
	import { page } from '$app/stores';
	import CharacterDisplay from '../../CharacterDisplay.svelte';
	import { browser } from '$app/environment';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';

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
	const spreadSheetId = '1bEye6zR-lmqot0nMHfIJ3YNoy3YJifj6Be56gtHK17k';

	onMount(() => {
		if (!!spreadSheetId) {
			initCharacterData(spreadSheetId)
				.then((data) => ($characterDataStore = data))
				.catch((e) => console.error(e));
		}
	});
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
