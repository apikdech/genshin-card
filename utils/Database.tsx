export interface DBStorage {
  keys: string[]
  entries: [key: string, value: string][]

  get(key: string): any | undefined
  set(key: string, value: any): void

  remove(key: string): void
  clear(): void
}

export class DBLocalStorage implements DBStorage {
  private storage: Storage

  constructor(storage: Storage) {
    this.storage = storage
  }

  get keys(): string[] {
    return Object.keys(this.storage)
  }

  get entries(): [key: string, value: string][] {
    return Object.entries(this.storage)
  }

  get(key: string) {
    const val = this.storage.getItem(key)
    if (!val) return undefined
    try {
      return JSON.parse(val)
    } catch {
      this.storage.removeItem(key)
      return undefined
    }
  }

  set(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value))
  }

  remove(key: string): void {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }
}

export const dbStorage = new DBLocalStorage(localStorage)
