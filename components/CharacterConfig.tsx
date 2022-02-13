import { useContext, useState } from "react";
import style from '../components/CustomStyle.module.css';
import { DatabaseContext } from "../utils/Database";
import { buildChar } from "../utils/Utils";
import ImageLoader from "./ImageLoader";

type CharacterConfigProps = {
  charKeyList: string[]
  setCharKeyList: any
  characterKey: string
}

export default function CharacterConfig({ charKeyList, setCharKeyList, characterKey }: CharacterConfigProps) {
  const database = useContext(DatabaseContext)
  const entry = database._getChar(characterKey)
  const [label, setLabel] = useState<string>(() => entry.label as string)
  const [source, setSource] = useState<string>(() => entry.source as string)
  const [enableEdit, setenableEdit] = useState<boolean>(false)

  return (
    <>
      <tr>
        <td>
          <input className={style['input-noborder']} value={label} onChange={(e) => setLabel(e.target.value)} disabled={!enableEdit} style={enableEdit ? {
            border: '5px',
            borderRadius: '4px',
            boxSizing: 'border-box',
            outline: '5px',
            background: '#e8e4d8',
            display: 'inline-block'
          } : {}} />
        </td>
        <td>
          <input className={style['input-noborder']} value={source} onChange={(e) => setSource(e.target.value)} disabled={!enableEdit} style={enableEdit ? {
            border: '5px',
            borderRadius: '4px',
            boxSizing: 'border-box',
            outline: '5px',
            background: '#e8e4d8',
            display: 'inline-block'
          } : {}} />
        </td>
        <td className={style.image}>
          <ImageLoader imageName={entry.source} />
        </td>
        <td>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={style.pencil}
              onClick={() => {
                if (enableEdit && label.length > 0 && source.length > 0) {
                  database.updateChar(characterKey, buildChar(label, source))
                  setCharKeyList(charKeyList)
                }
                setenableEdit(!enableEdit)
              }}
              style={enableEdit ? {
                filter: 'invert(28%) sepia(79%) saturate(1246%) hue-rotate(83deg) brightness(101%) contrast(106%)',
              } : {}}>
              <ImageLoader imageName="/pencil.svg" />
            </div>
            <div className={style.trash} onClick={() => {
              database.removeChar(characterKey)
              setCharKeyList(charKeyList.filter(item => item != characterKey))
            }}>
              <ImageLoader imageName="/trash.svg" />

            </div>
          </div>
        </td>
      </tr>
    </>
  )
}
