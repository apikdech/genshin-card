export interface DBStorage {
  keys: string[]
  entries: [key: string, value: string][]

  get(key: string): any | undefined
  set(key: string, value: any): void

  remove(key: string): void
  clear(): void
}

export class DBLocalStorage implements DBStorage {
  get keys(): string[] {
    try {
      return Object.keys(localStorage)

    } catch (error) {
      // console.log(error)
      return []
    }
  }

  get entries(): [key: string, value: string][] {
    try {
      return Object.entries(localStorage)
    } catch (error) {
      // console.log(error)
      return []
    }
  }

  get(key: string) {
    try {
      const val = localStorage.getItem(key)
      return val ? JSON.parse(val) : undefined
    } catch {
      try {
        localStorage.removeItem(key)
      }
      catch { }
      return undefined
    }
  }

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      // console.log(error)
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      // console.log(error)
    }
  }

  clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      // console.log(error)
    }
  }
}

export class SandboxStorage implements DBStorage {
  private storage: Dict<string, string> = {}

  constructor(other: DBStorage | undefined = undefined) {
    other && this.copyFrom(other)
  }

  get keys(): string[] {
    return Object.keys(this.storage)
  }
  get entries(): [key: string, value: string][] {
    return Object.entries(this.storage)
  }

  get(key: string) {
    const string = this.storage[key]
    if (!string) return undefined
    try {
      return JSON.parse(string)
    } catch {
      delete this.storage[key]
      return undefined
    }
  }
  set(key: string, value: any): void {
    this.storage[key] = JSON.stringify(value)
  }

  getString(key: string): string | undefined {
    return this.storage[key]
  }
  setString(key: string, value: string): void {
    this.storage[key] = value
  }
  remove(key: string): void {
    delete this.storage[key]
  }

  copyFrom(other: DBStorage) {
    for (const [key, value] of other.entries) {
      this.setString(key, value)
    }
  }
  clear() {
    this.storage = {}
  }
  removeForKeys(shouldRemove: (key: string) => boolean) {
    this.storage = Object.fromEntries(Object.entries(this.storage).filter(([key]) => !shouldRemove(key)))
  }
}

export const dbStorage = new DBLocalStorage()
