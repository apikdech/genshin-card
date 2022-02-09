import { CharacterState } from "../const/character"

export function initCharacterState(num: number): CharacterState[] {
  const result: CharacterState[] = []
  console.log('num = ', num)
  for (let index = 0; index < num; index++) {
    result.push({
      id: index.toString(),
      value: 'loading.gif',
      label: 'Loading...'
    })
  }
  console.log(result)
  return result;
}

export const getQueryFromUrl = async () => {
  return await router
}
