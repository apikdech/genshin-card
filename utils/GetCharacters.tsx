import { CharacterState, CharacterType } from "../const/character";
import { Database } from "./Database";

export function getCharacters(database: Database, exclude: CharacterState[]): CharacterType[] {
  let result: CharacterType[] = getCharacterKeyList(database).map((key) => {
    let tmp = database._getChar(key)
    return {
      value: tmp.source,
      label: tmp.label
    }
  })
  for (let index = 0; index < exclude.length; index++) {
    let exChar: CharacterType = { value: exclude[index].value, label: exclude[index].label }
    result = result.filter(item => item.label !== exChar.label)
  }
  return result
}

export function getCharacterKeyList(database: Database): string[] {
  return database._getCharKeys().filter((char) => char.startsWith('char_')).sort(
    (a: string, b: string) => {
      let x = parseInt(a.substring(5))
      let y = parseInt(b.substring(5))
      return x - y
    }
  )
}
