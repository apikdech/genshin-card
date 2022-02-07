import Select from 'react-select'
import ImageLoader from './ImageLoader'
import customStyles from './CharacterSelectStyles'
import style from './CustomStyle.module.css'
import { CharacterState } from '../const/character'
import getCharacters from '../utils/GetCharacters'

export default function CharacterDisplay({ id, characterState, setCharacterState, tw, th, textColor, textSize, marginLeft }) {
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
                    styles={customStyles({ textColor, textSize })}
                    value={{ value: characterState[id].value, label: characterState[id].label }}
                    onChange={(param) => setCharacterState(characterState.map((ch: CharacterState) => ch.id === id ? { ...ch, label: param!.label, value: param!.value } : { ...ch }))}
                    options={getCharacters(characterState)}
                />
            </div>
        </div>
    )
}