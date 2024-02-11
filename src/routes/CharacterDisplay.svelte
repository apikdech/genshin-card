<script lang="ts">
	import Select from 'svelte-select';
	import { getCharacterState, getCharacters } from '$lib/utils';

	export let id: number;
	export let textColor: string;
	export let textSize: number;
	export let marginLeft: string;
	export let transparent: boolean;
	export let shadowSize: string;
	export let shadowColor: string;
	export let totalCards: number;

	const characterState = getCharacterState(totalCards);

	const handleChange = (event: CustomEvent) => {
		const { label, value } = event.detail;
		$characterState[id].label = label;
		$characterState[id].value = value;
	};

	const fontColor = `color:${transparent ? 'transparent' : textColor};`;
	const fontShadow = `text-shadow:${transparent ? '' : `1px 1px ${shadowSize}px ${shadowColor}`}`;
	const style = `width: 140px; --internal-padding: 0px; --item-padding: 0px; text-align: center; font-weight:bold; --font-size:${textSize}px; ${fontColor} ${fontShadow}`;

	$: img = `/assets/${$characterState[id].value}`;
	$: alt = $characterState[id].label;
</script>

<div style="width:200px; height:250px; margin-left:{marginLeft}; display:block;">
	<div style="display:flex; justify-content:center">
		<img src={img} {alt} width="100px" height="100px" />
	</div>
	<div style="display: flex; justify-content:center;">
		<Select
			items={getCharacters($characterState)}
			--border="none"
			--value-container-overflow="visible"
			--selected-item-overflow="visible"
			--selected-item-padding="0px"
			clearable={false}
			inputStyles={style}
			containerStyles={style + '; position: inherit'}
			value={$characterState[id].label}
			on:change={handleChange}
		/>
	</div>
</div>
