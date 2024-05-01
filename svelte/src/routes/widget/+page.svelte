<script lang="ts">
	import {
		getCharacterState,
		initState,
		parseMarginLeft,
		parseTextSize,
		type GameType
	} from '$lib/utils';
	import Checkbox from '@smui/checkbox';
	import Select from 'svelte-select';
	import Slider from '@smui/slider';
	import CharacterDisplay from '../CharacterDisplay.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { toast } from '@zerodevx/svelte-toast';

	let totalCards = 2;
	let textSize = 20;
	let distance = 20;
	let transparent = false;
	let textColor = '#000000';
	let shadowSize = -1;
	let shadowColor = '#000000';
	let gameType: GameType = 'genshin';

	$: marginLeft = parseMarginLeft(distance.toString());
	const characterStates = getCharacterState(totalCards);

	const items = Array.from({ length: 7 }, (v, k) => ({
		label: (k + 1).toString(),
		value: k + 1
	}));

	const handleLayoutChange = (event: CustomEvent) => {
		totalCards = event.detail.value;
		$characterStates = initState(totalCards);
	};

	const handleCopyButton = () => {
		navigator.clipboard.writeText(url);
		toast.push('Copied to clipboard!', {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	};

	$: key = `${textSize} ${shadowSize} ${textColor} ${shadowColor} ${transparent} ${gameType}`;

	$: url =
		`${import.meta.env.VITE_BACKEND_URL}/${gameType === 'genshin' ? '' : gameType.toLowerCase()}?layout=${totalCards}&textSize=${textSize}` +
		`&distance=${distance}&textColor=${encodeURIComponent(textColor)}` +
		`&shadowSize=${shadowSize}&shadowColor=${encodeURIComponent(shadowColor)}` +
		`&transparent=${transparent.toString()}`;
</script>

<div style="margin-left: 5%; margin-right: 10%">
	<div style="display: flex;">
		<p style="width: 25%;">Layout</p>
		<Select {items} placeholder="2" on:change={handleLayoutChange} />
	</div>

	<div style="display: flex; align-items:center">
		<p style="width: 25%">Font Size</p>
		<Slider
			style="flex-grow: 1; width:100%"
			bind:value={textSize}
			input$class="slider-input"
			min={1}
			max={25}
		/>
	</div>

	<div style="display: flex; align-items:center">
		<p style="width: 20%;">Font Color</p>
		<ColorPicker bind:hex={textColor} label={textColor} />
	</div>

	<div style="display: flex; align-items:center">
		<p style="width: 25%">Distance</p>
		<Slider
			style="flex-grow: 1; width:100%"
			bind:value={distance}
			input$class="slider-input"
			min={0}
			max={200}
		/>
	</div>

	<div style="display: flex; align-items:center">
		<p style="width: 25%">Shadow Size</p>
		<Slider
			style="flex-grow: 1; width:100%"
			bind:value={shadowSize}
			input$class="slider-input"
			min={-1}
			max={50}
		/>
	</div>

	<div style="display: flex; align-items:center">
		<p style="width: 20%;">Shadow Color</p>
		<ColorPicker bind:hex={shadowColor} label={shadowColor} />
	</div>

	<div style="display: flex; align-items:baseline">
		<p style="width: 20%;">Transparent?</p>
		<Checkbox bind:checked={transparent} />
	</div>

	<div style="display: flex; align-items:center">
		<p style="width: 20%;">Game</p>
		<div style="display: flex; flex-direction: column;">
			<label>
				<input type="radio" name="gameType" bind:group={gameType} value="genshin" />Genshin
			</label>
			<label>
				<input type="radio" name="gameType" bind:group={gameType} value="hsr" />HSR
			</label>
		</div>
	</div>

	<div>
		<p>
			Once you've finished configuring your widget, enter the following URL into a browser source:
		</p>
		<div style="display: flex; align-items:center">
			<a href={url} target="_blank">
				<pre>{url}</pre>
			</a>
			<button on:click={handleCopyButton} style="margin-left: 10px;">Copy to clipboard</button>
		</div>
	</div>

	<p>Preview</p>
	<div style="position: fixed; display: flex;">
		{#key key}
			{#each $characterStates as state (state)}
				<CharacterDisplay
					id={state.id}
					{totalCards}
					{textColor}
					textSize={parseTextSize(textSize.toString())}
					{shadowColor}
					shadowSize={shadowSize.toString()}
					{transparent}
					marginLeft={state.id === 0 ? '0' : marginLeft}
					type={gameType}
				/>
			{/each}
		{/key}
	</div>
</div>
