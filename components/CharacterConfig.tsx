import { useContext } from "react";
import { DatabaseContext } from "../utils/Database";
import ImageLoader from "./ImageLoader";

type CharacterConfigProps = {
  charKeyList: string[]
  setCharKeyList: any
  characterKey: string
}

export default function CharacterConfig({ charKeyList, setCharKeyList, characterKey }: CharacterConfigProps) {
  const database = useContext(DatabaseContext)
  const entry = database._getChar(characterKey)
  return (
    <>
      <tr>
        <td>
          {entry.label}
        </td>
        <td>
          {entry.source}
        </td>
        <td>
          <ImageLoader imageName={entry.source} />
        </td>
        <td>
          <button onClick={() => {
            database.removeChar(characterKey)
            setCharKeyList(charKeyList.filter(item => item != characterKey))
          }}>
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}
