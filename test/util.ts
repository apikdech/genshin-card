import type { CharacterState } from "../const/character";

export const parseMarginLeft = ((distance: string | undefined) => {
  let dist = 0;
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
    id: k.toString(),
    value: 'loading.gif',
    label: 'Loading...'
  } as CharacterState))
  return state;
}) 
