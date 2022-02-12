import { CharacterState } from "../const/character"

export function initCharacterState(num: number): CharacterState[] {
  const result: CharacterState[] = []
  for (let index = 0; index < num; index++) {
    result.push({
      id: index.toString(),
      value: 'loading.gif',
      label: 'Loading...'
    })
  }
  return result;
}
