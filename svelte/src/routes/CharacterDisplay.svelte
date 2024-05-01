<script lang="ts">
	import Select from 'svelte-select';
	import { getCharacterState, getCharacters, resetStateHolder, type GameType } from '$lib/utils';
	import { getBanned } from '$lib/stores';
	import { onDestroy } from 'svelte';

	export let id: number;
	export let textColor: string;
	export let textSize: number;
	export let marginLeft: string;
	export let transparent: boolean;
	export let shadowSize: string;
	export let shadowColor: string;
	export let totalCards: number;
	export let type: GameType;

	const banned = getBanned;
	const characterState = getCharacterState(totalCards);

	const handleChange = (event: CustomEvent) => {
		const { label, value } = event.detail;
		$characterState[id].label = label;
		$characterState[id].value = value;
	};

	const handleClick = () => {
		$banned = !$banned;
	};

	const fontColor = `color:${transparent ? 'transparent' : textColor};`;
	const fontShadow = `text-shadow:${transparent ? '' : `1px 1px ${shadowSize}px ${shadowColor}`}`;
	const style = `background: transparent; --list-background: transparent; --item-hover-bg: transparent; width: 140px; --internal-padding: 0px; --item-padding: 0px; text-align: center; font-weight:bold; --font-size:${textSize}px; ${fontColor} ${fontShadow}`;

	$: img = `/assets/${type}/${$characterState[id].value}`;
	$: alt = $characterState[id].label;

	const floatingConfig = {
		strategy: 'fixed',
		placement: 'bottom',
		middleware: []
	};

	onDestroy(() => resetStateHolder());
</script>

<div style="width:200px; height:250px; margin-left:{marginLeft}; display:block;">
	<div style="display:flex; justify-content:center">
		<button
			type="button"
			on:click={handleClick}
			style="border: none; padding: 0px; background:none;"
		>
			{#if $banned}
				<img
					src="/assets/banned.webp"
					alt="banned"
					width="100px"
					height="100px"
					style="position: absolute;"
				/>
			{/if}
			<img src={img} {alt} width="100px" height="100px" />
		</button>
	</div>
	<div style="display: flex; justify-content:center;">
		<Select
			items={getCharacters(type, $characterState)}
			--border="none"
			--value-container-overflow="visible"
			--selected-item-overflow="visible"
			--selected-item-padding="0px"
			clearable={false}
			inputStyles={style}
			containerStyles={style + '; position: inherit'}
			value={$characterState[id].label}
			{floatingConfig}
			on:change={handleChange}
		/>
	</div>
</div>
