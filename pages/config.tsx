import dynamic from "next/dynamic"
import { useContext, useEffect, useState } from "react"
import { DatabaseContext } from "../utils/Database"
import { getCharacterKeyList } from "../utils/GetCharacters"
import { buildChar } from "../utils/Utils"
const CharacterConfig = dynamic(() => import("../components/CharacterConfig"), {
  ssr: false
})

export default function Config() {
  const [source, setSource] = useState<string>('')
  const [label, setLabel] = useState<string>('')
  const database = useContext(DatabaseContext)
  const [charKeyList, setCharKeyList] = useState<string[]>(() => getCharacterKeyList(database))
  const [state, setState] = useState<number>(() => charKeyList.length + 1)

  useEffect(() => {
    setState(() => {
      return charKeyList.length ? parseInt(charKeyList[charKeyList.length - 1].substring(5)) + 1 : 1
    })
  }, [charKeyList])
  return (
    <DatabaseContext.Provider value={database}>
      <table>
        <tbody>
          <tr>
            <th>
              Label
            </th>
            <th>
              Source
            </th>
            <th>
              Preview
            </th>
            <th>
              Delete?
            </th>
          </tr>
          {/* <div suppressHydrationWarning={true}> */}
          {!!charKeyList && charKeyList.map(charKey =>
            <CharacterConfig
              key={charKey}
              charKeyList={charKeyList}
              setCharKeyList={setCharKeyList}
              characterKey={charKey}
            />
          )}
          <tr>
            <td>
              <input onChange={(e) => setLabel(e.target.value)}></input>
            </td>
            <td>
              <input onChange={(e) => setSource(e.target.value)}></input>
            </td>
            <td>
              <button onClick={() => {
                if (label.length > 0 && source.length > 0) {
                  database.createChar(state!.toString(), buildChar(label, source))
                  setCharKeyList(oldState => [...oldState, `char_${state}`])
                }
              }}>
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => {
        database.clear()
        setCharKeyList([])
      }}>
        Clear Database {source}
      </button>
      <button onClick={() => {
        database.reloadDataFromServer()
        setCharKeyList(getCharacterKeyList(database))
      }}>
        Set Config as Default
      </button>
    </DatabaseContext.Provider>
  )
}
