import { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from '../components/CustomStyle.module.css'
import { SketchPicker } from 'react-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CharacterState } from '../const/character'
import CharacterDisplay from '../components/CharacterDisplay'
import Select from 'react-select'
import { initCharacterState } from '../utils/Utils';

export default function Widget() {
  const [layout, setLayout] = useState({ value: 2, label: '2' })
  const [fontSize, setFontSize] = useState<number>(20)
  const [distance, setDistance] = useState<number>(20)
  const [transparent, setTransparent] = useState<boolean>(false)
  const [color, setColor] = useState<string>('#000000')
  const [shadowSize, setShadowSize] = useState<number>(-1)
  const [shadowColor, setShadowColor] = useState<string>('#000000')
  const [bgColor, setBgColor] = useState<string>('#ffffff')
  const [characterState, setCharacterState] = useState<CharacterState[]>(() => initCharacterState(8))
  const [displayPickerBg, setDisplayPickerBg] = useState<boolean>(false)
  const [displayPickerTextColor, setDisplayPickerTextColor] = useState<boolean>(false)
  const [displayPickerShadowColor, setDisplayPickerShadowColor] = useState<boolean>(false)

  let layoutOptions = Array.from({ length: 8 }, (v, k) => k).map(idx => ({
    value: idx + 1,
    label: (idx + 1).toString()
  }))

  let word = `https://genshin-card-beta.vercel.app/?layout=${layout ? layout.value : '1'}&textSize=${fontSize ? fontSize : '100'}&distance=${distance}&textColor=${encodeURIComponent(color)}&shadowSize=${shadowSize}&shadowColor=${encodeURIComponent(shadowColor)}&transparent=${transparent.toString()}`
  return (
    <>
      <div className='container'>
        <div className={style['flex-container']}>
          <div className={style['text-left']}>Layout</div>
          <div style={{ flexGrow: 1, float: 'right', marginRight: '25%' }}>
            <Select
              id='layout' instanceId='layout'
              styles={{
                singleValue: (provided) => ({
                  ...provided,
                  textAlign: 'center'
                }),
                menuList: (provided) => ({
                  ...provided,
                  textAlign: 'center'
                })
              }}
              value={layout}
              onChange={(param) => setLayout(param!)}
              options={layoutOptions}
            />
          </div>
        </div>
        <div className={style['flex-container']}>
          <div className={style['text-left']}>Font Size</div>
          <div style={{ flexGrow: 1, float: 'right', marginRight: '25%', marginTop: '10px' }}>
            <Slider
              min={1}
              max={25}
              value={fontSize}
              onChange={(value) => setFontSize(value)}
            />
          </div>
        </div>
        <div id='font-color' className={style['flex-container']}>
          <div className={style['text-left']}>Font Color</div>
          <div>
            <div className={style.swatch} onClick={() => setDisplayPickerTextColor(!displayPickerTextColor)}>
              {color}
              <div className={style['color-box']} style={{
                background: color,
              }} />
            </div>
            {displayPickerTextColor ? <div className={style.popover}>
              <div className={style.cover} onClick={() => setDisplayPickerTextColor(false)} />
              <SketchPicker
                color={color}
                onChange={(col) => setColor(col.hex)}
              />
            </div> : null}
          </div>
        </div>
        <div id='distance' className={style['flex-container']}>
          <div className={style['text-left']}>Distance</div>
          <div style={{ flexGrow: 1, float: 'right', marginRight: '25%', marginTop: '10px' }}>
            <Slider
              min={0}
              max={200}
              value={distance}
              onChange={(value) => setDistance(value)}
            />
          </div>
        </div>
        <div id='shadow-size' className={style['flex-container']}>
          <div className={style['text-left']}>Shadow Size</div>
          <div style={{ flexGrow: 1, float: 'right', marginRight: '25%', marginTop: '10px' }}>
            <Slider
              min={-1}
              max={50}
              value={shadowSize}
              onChange={(value) => setShadowSize(value)}
            />
          </div>
        </div>
        <div id='shadow-color' className={style['flex-container']}>
          <div className={style['text-left']}>Shadow Color</div>
          <div>
            <div className={style.swatch} onClick={() => setDisplayPickerShadowColor(!displayPickerShadowColor)}>
              {shadowColor}
              <div className={style['color-box']} style={{
                background: shadowColor,
              }} />
            </div>
            {displayPickerShadowColor ? <div className={style.popover}>
              <div className={style.cover} onClick={() => setDisplayPickerShadowColor(false)} />
              <SketchPicker
                color={shadowColor}
                onChange={(col) => setShadowColor(col.hex)}
              />
            </div> : null}
          </div>
        </div>
        <div id='transparent' className={style['flex-container']}>
          <div className={style['text-left']}>Transparent?</div>
          <div style={{ marginTop: '5px', marginBottom: '5px' }}>
            <label className={style['checkbox-container']}>
              <input type='checkbox' onClick={e => setTransparent((e.target as HTMLInputElement).checked)} />
              <span className={style.checkmark}></span>
            </label>
          </div>
        </div>
        <div className={style['flex-container']}>
          <div className={style['text-left']}>Background Color (for preview only)</div>
          <div>
            <div className={style.swatch} onClick={() => setDisplayPickerBg(!displayPickerBg)}>
              {bgColor}
              <div className={style['color-box']} style={{
                background: bgColor,
              }} />
            </div>
            {displayPickerBg ? <div className={style.popover}>
              <div className={style.cover} onClick={() => setDisplayPickerBg(false)} />
              <SketchPicker
                color={bgColor}
                onChange={(col) => setBgColor(col.hex)}
              />
            </div> : null}
          </div>
        </div>
        <div>
          <div className={style['text-left']}>Once you've finished configuring your widget, enter the following URL into a browser source:</div>
          <div className={style['text-url']}>{word}</div>
          <CopyToClipboard text={word}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>

        <div className={style['text-left']}>
          <p>Preview</p>
        </div>
        <div style={{
          marginLeft: '5%',
          backgroundColor: bgColor,
          marginRight: '5%'
        }}>
          <div className={style['flex-container']}>
            {Array.from({ length: layout.value }, (value, key) =>
              <CharacterDisplay
                id={key.toString()}
                characterState={characterState}
                setCharacterState={setCharacterState}
                tw={200}
                th={300}
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
        </div>
      </div>
    </>
  )
}
