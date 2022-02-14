import dynamic from "next/dynamic"
import { useContext, useEffect, useState } from "react"
import { DatabaseContext } from "../utils/Database"
import { dbStorage } from "../utils/DBStorage"
import { download, exportChar } from "../utils/Export"
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
  const [showCharacter, setShowCharacter] = useState<boolean>(false)

  useEffect(() => {
    setState(() => {
      return charKeyList.length ? parseInt(charKeyList[charKeyList.length - 1].substring(5)) + 1 : 1
    })
  }, [charKeyList])
  return (
    <DatabaseContext.Provider value={database}>
      <div style={{ marginLeft: '5%', marginRight: '5%' }}>
        <button onClick={() => setShowCharacter(!showCharacter)}>
          List Characters: {charKeyList.length}
        </button>
        {!!showCharacter &&
          <table>
            <tbody>
              <tr>
                <th style={{ width: '10%' }}>
                  Label
                </th>
                <th>
                  Source
                </th>
                <th style={{ width: '10%' }}>
                  Preview
                </th>
                <th style={{ width: '10%' }}>
                  Action
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
                  <input style={{ width: '100%' }} onChange={(e) => setLabel(e.target.value)} placeholder='Label'></input>
                </td>
                <td>
                  <input style={{ width: '100%' }} onChange={(e) => setSource(e.target.value)} placeholder='Source URL'></input>
                </td>
                <td>
                  {/* <ImageLoader imageName={source} /> */}
                </td>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <button onClick={() => {
                      if (label.length > 0 && source.length > 0) {
                        database.createChar(state!.toString(), buildChar(label, source))
                        setCharKeyList(oldState => [...oldState, `char_${state}`])
                      }
                    }}>
                      Save
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        }
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
          Restore Config to Default
        </button>
        <button onClick={() => download(JSON.stringify(exportChar(dbStorage)))}>
          Export Data
        </button>
        <button>
          Import Data
        </button>
      </div>
    </DatabaseContext.Provider>
  )
}
