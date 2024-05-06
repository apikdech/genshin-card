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
	import CharacterDisplay from '../CharacterDisplay.svelte';
	import { browser } from '$app/environment';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	const searchParams = browser && $page.url.searchParams;

	if (!searchParams) {
		error(404);
	}

	const { textSize, textColor, distance, layout, transparent, shadowSize, shadowColor, id } =
		Object.fromEntries(searchParams.entries());
	if (id === undefined) {
		window.location.href = '/404';
	}
	const marginLeft = parseMarginLeft(distance);
	const totalCards = parseTotalCards(layout);
	const parsedTextSize = parseTextSize(textSize);

	const characterStates = getCharacterState(totalCards);

	onMount(() => {
		initCharacterData(id)
			.then((data) => ($characterDataStore = data))
			.catch((e) => {
				console.error(e);
				window.location.href = '/404';
			});
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
