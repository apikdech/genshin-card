import { useState } from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from '../components/CustomStyle.module.css'
import { SketchPicker } from 'react-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CharacterState } from '../const/character'
import CharacterDisplay from '../components/CharacterDisplay'

let initState: CharacterState[] = Array.from({ length: 7 }, (v, k) => k).map(id => ({
    id: id.toString(),
    value: 'loading.gif',
    label: 'Loading...'
} as CharacterState))

export default function Widget() {
    const [layout, setLayout] = useState<number>(2)
    const [fontSize, setFontSize] = useState<number>(20)
    const [distance, setDistance] = useState<number>(20)
    const [transparent, setTransparent] = useState<boolean>(false)
    const [color, setColor] = useState<string>('#000')
    const [shadowSize, setShadowSize] = useState<number>(-1)
    const [shadowColor, setShadowColor] = useState<string>('#000')
    const [characterState, setCharacterState] = useState<CharacterState[]>(initState)

    let word = `https://genshin-card-beta.vercel.app/?layout=${layout ? layout : '1'}&textSize=${fontSize ? fontSize : '100'}&distance=${distance}&textColor=${encodeURIComponent(color)}&shadowSize=${shadowSize}&shadowColor=${encodeURIComponent(shadowColor)}&transparent=${transparent.toString()}`
    return (
        <>
            <div className={style['flex-container']}>
                <div>Layout</div>
                <select id='layout' key='layout' value={layout} onChange={e => setLayout(parseInt(e.target.value))}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select>
            </div>
            <div id='font-size' className={style['flex-container']}>
                <div>Font Size</div>
                <Slider
                    min={1}
                    max={25}
                    style={{
                        width: '500px'
                    }}
                    value={fontSize}
                    onChange={(value) => setFontSize(value)}
                />
            </div>
            <div id='font-color' className={style['flex-container']}>
                <div>Font Color</div>
                <SketchPicker
                    color={color}
                    onChange={(col) => setColor(col.hex)}
                />
            </div>
            <div id='distance' className={style['flex-container']}>
                <div>Distance</div>
                <Slider
                    min={0}
                    max={200}
                    style={{
                        width: '500px'
                    }}
                    value={distance}
                    onChange={(value) => setDistance(value)}
                />
            </div>
            <div id='shadow-size' className={style['flex-container']}>
                <div>Shadow Size</div>
                <Slider
                    min={-1}
                    max={50}
                    style={{
                        width: '500px'
                    }}
                    value={shadowSize}
                    onChange={(value) => setShadowSize(value)}
                />
            </div>
            <div id='shadow-color' className={style['flex-container']}>
                <div>Shadow Color</div>
                <SketchPicker
                    color={shadowColor}
                    onChange={(col) => setShadowColor(col.hex)}
                />
            </div>
            <div id='transparent' className={style['flex-container']}>
                <div>Transparent?</div>
                <input type='checkbox' onClick={e => setTransparent((e.target as HTMLInputElement).checked)} />
            </div>
            <div>
                <div>{word}</div>
                <CopyToClipboard text={word}>
                    <button>Copy to clipboard with button</button>
                </CopyToClipboard>
            </div>

            <div className={style['flex-container']}>
                {Array.from({ length: layout }, (value, key) =>
                    <CharacterDisplay
                        id={key.toString()}
                        characterState={characterState}
                        setCharacterState={setCharacterState}
                        tw={200}
                        th={150}
                        textColor={color}
                        textSize={fontSize}
                        shadowColor={shadowColor}
                        shadowSize={shadowSize}
                        key={key.toString()}
                        transparent={transparent}
                        marginLeft={key === 0 ? 0 : distance - 100}
                    />
                )}
            </div>
        </>
    )
}