<script lang="ts">
	import Select from 'svelte-select';
	import type { CharacterState } from '../const/character';
	import { getCharacters } from '$lib/utils';

	export let id: string;
	export let characterState: CharacterState[];
	export let textColor: string;
	export let textSize: number;
	export let marginLeft: string;
	export let transparent: boolean;
	export let shadowSize: string;
	export let shadowColor: string;

	function setImage(event: CustomEvent) {
		const props = event.detail as CharacterState;
		img = `/assets/${props.value}`;
		alt = props.label;
	}

	const style = `font-weight:bold; font-size:${textSize}px; color:${transparent ? 'transparent' : textColor};`;

	let img = '/assets/loading.gif';
	let alt = 'alt';
</script>

<div style="width: 200px; height:250px; marginLeft: {marginLeft}">
	<img src={img} {alt} width="100%" height="100%" />
	<Select
		items={getCharacters(characterState)}
		clearable={false}
		inputStyles={style}
		containerStyles={style}
		on:change={setImage}
	/>
</div>
