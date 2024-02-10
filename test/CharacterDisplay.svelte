<script lang="ts">
  import Select from 'svelte-select'
  import type { CharacterType } from "../../test/character";

  export let id: string;
  export let characterState: CharacterType;
  export let textColor: string;
  export let textSize: number;
  export let marginLeft: string;
  export let transparent: boolean;
  export let shadowSize: string;
  export let shadowColor: string;

  let collection = [
    {value: 'OK', label: 'OK'},
    {value: 'NO', label: 'NO'}
  ]

  const style = 'font-size:25px'
</script>

<div style="width: 200px; height:250px; marginLeft: {marginLeft}">
  <Select items={collection} clearable={false} inputStyles={style} containerStyles={style}/>
</div>

