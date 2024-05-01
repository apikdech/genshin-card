import { writable, type Writable } from "svelte/store";
import { characters, type CharacterState, type CharacterType } from "../const/character";

export const parseMarginLeft = ((distance: string | undefined) => {
  let dist = -100;
  if (distance !== undefined) {
    dist = Math.max(parseInt(distance) ?? 0, 0) - 100;
  }
  return dist + 'px'
})

export const parseTotalCards = ((layout: string | undefined) => {
  let total = 1;
  if (layout !== undefined) {
    total = Math.min(Math.max(parseInt(layout), 1), 7)
  }

  return total;
})

export const parseTextSize = ((textSize: string | undefined) => {
  return Math.min(Math.max(parseInt(textSize as string) ?? 20, 1), 25);
})

export const initState = ((num: number) => {
  const state: CharacterState[] = Array.from({ length: num }, (v, k) => ({
    id: k,
    value: 'loading.gif',
    label: 'Loading...'
  } as CharacterState))

  return state;
})

let stateHolder: Writable<CharacterState[]> | undefined = undefined;

export const getCharacterState = (num: number) => {
  if (stateHolder === undefined) {
    stateHolder = writable(initState(num));
  }
  return stateHolder;
};

export const resetStateHolder = () => {
  stateHolder = undefined;
}

export const getCharacters = (type: GameType, excluded: CharacterState[]) => {
  let result: CharacterType[] = characters[type];

  for (let index = 0; index < excluded.length; index++) {
    const exChar: CharacterType = { value: excluded[index].value, label: excluded[index].label }
    result = result.filter(item => item.label !== exChar.label)
  }

  return result
}

export type GameType = 'genshin' | 'hsr';
