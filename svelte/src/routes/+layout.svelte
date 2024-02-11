<script>
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div>
	<main>
		<SvelteToast />
		<slot />
	</main>
</div>
