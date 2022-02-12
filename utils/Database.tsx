import { createContext } from "react";
import { characters } from "../const/character";
import { ICharacter } from "../types/character";
import { dbStorage, DBStorage } from "./DBStorage";
import { getRandomInt, toSnakeCase } from "./Utils";

export class Database {
  private storage: DBStorage

  constructor(storage: DBStorage) {
    this.storage = storage
  }

  private saveChar(key: string, value: ICharacter) {
    this.storage.set(key, value)
  }

  _getChar(key: string) { return key ? this.storage.get(key) : undefined }
  _getCharKeys(): string[] { return this.storage.keys }

  createChar(key: string, value: ICharacter) {
    // const id = this.generateCharKey(key)
    const id = key
    this.saveChar(`char_${id}`, value)
    return key
  }

  updateChar(key: string, value: ICharacter) {
    const oldChar = this.storage.get(key)
    if (!oldChar) return
    this.saveChar(key, value)
  }

  removeChar(key: string) {
    const char = this.storage.get(key)
    if (!char) return
    this.storage.remove(key)
  }

  private generateCharKey(key: string): string {
    const keys = this.storage.keys
    let candidate = toSnakeCase(key)
    do {
      candidate = `${candidate}_${getRandomInt(1, 2 * (keys.length + 1))}`
    } while (keys.includes(candidate))
    return candidate
  }

  // DELETE THIS?
  clear() {
    this.storage.clear()
  }

  reloadDataFromServer() {
    this.storage.clear()
    const chars = characters
    let index = 1
    chars.forEach(char => {
      const result: ICharacter = {
        key: toSnakeCase(char.label),
        label: char.label,
        source: char.value
      }
      this.createChar(index.toString(), result)
      index += 1
    })
  }
}

export const database = new Database(dbStorage)
export const DatabaseContext = createContext(database)
