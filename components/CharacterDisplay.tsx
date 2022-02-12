import { useContext } from 'react'
import Select from 'react-select'
import { CharacterState } from '../const/character'
import { DatabaseContext } from '../utils/Database'
import { getCharacters } from '../utils/GetCharacters'
import customStyles from './CharacterSelectStyles'
import style from './CustomStyle.module.css'
import ImageLoader from './ImageLoader'

export default function CharacterDisplay({ id, characterState, setCharacterState, tw, th, textColor, textSize, marginLeft, transparent, shadowSize, shadowColor }) {
  const database = useContext(DatabaseContext)
  if (database._getCharKeys().length === 0) {
    database.reloadDataFromServer()
  }
  return (
    <div className={style.container} style={{
      width: tw,
      height: th,
      marginLeft: marginLeft
    }}>
      <div className={style.image}>
        <ImageLoader imageName={characterState[id].value} />
      </div>
      <div className='character'>
        <Select
          id='long-value-select' instanceId='long-value-select'
          styles={customStyles({ textColor, textSize, shadowSize, shadowColor, transparent })}
          value={{ value: characterState[id].value, label: characterState[id].label }}
          onChange={(param) => setCharacterState(characterState.map((ch: CharacterState) => ch.id === id ? { ...ch, label: param!.label, value: param!.value } : { ...ch }))}
          options={getCharacters(database, characterState)}
        />
      </div>
    </div>
  )
}
