import { characters, CharacterState, CharacterType } from "../const/character";

export default function getCharacters(exclude: CharacterState[]): CharacterType[] {
    let result: CharacterType[] = characters
    for (let index = 0; index < exclude.length; index++) {
        let exChar: CharacterType = { value: exclude[index].value, label: exclude[index].label }
        result = result.filter(item => item.label !== exChar.label)
    }
    return result
}