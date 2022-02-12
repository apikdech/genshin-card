import { CharacterState } from "../const/character";
import { ICharacter } from "../types/character";

export function initCharacterState(num: number): CharacterState[] {
  const result: CharacterState[] = []
  for (let index = 0; index < num; index++) {
    result.push({
      id: index.toString(),
      value: '/assets/loading.gif',
      label: 'Loading...'
    })
  }
  return result;
}

export const toSnakeCase = str => str[0].toLowerCase() + str.slice(1, str.length).replace(' ', '').replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

export function buildChar(label: string, source: string): ICharacter {
  return {
    key: toSnakeCase(label),
    source: source,
    label: label
  }
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
