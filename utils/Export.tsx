import { ICharacter } from "../types/character";
import { DBStorage } from "./DBStorage";

export function download(JSONstr: string, filename = 'genshin-card-config.json') {
  const contentType = 'application/json;charset=utf-8'
  const a = document.createElement('a');
  a.download = filename
  a.href = `data:${contentType},${encodeURIComponent(JSONstr)}`
  a.target = "_blank"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function exportChar(storage: DBStorage): IDB {
  return {
    dbVersion: 1,
    version: 1,
    characters: storage.entries
      .filter(([key]) => key.startsWith('char_'))
      .map(([_, value]) => {
        return JSON.parse(value)
      })
  }
}

type IDB = {
  dbVersion: number,
  version: number,
  characters?: ICharacter[]
}
