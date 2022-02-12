import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CharacterDisplay from '../components/CharacterDisplay'
import style from '../components/CustomStyle.module.css'
import { CharacterState } from '../const/character'
import { initCharacterState } from '../utils/Utils'

const Home: NextPage = () => {
  const [characterState, setCharacterState] = useState<CharacterState[]>(() => initCharacterState(8))
  const router = useRouter()
  let { width, height, textSize, textColor, distance, layout, transparent, shadowSize, shadowColor } = router.query

  useEffect(() => {
    if (layout !== undefined)
      setCharacterState(initCharacterState(num))
  }, [layout])

  let tw = 200
  let th = 250
  let dist = Math.max(parseInt(distance as string) ?? 0, 0)
  let marginLeft = dist - 100 + 'px'
  let num = Math.max(parseInt(layout as string), 1)
  if (isNaN(num)) {
    num = 1
  }
  if (width !== undefined) {
    tw = Math.max(tw, parseInt(width as string))
  }
  if (height !== undefined) {
    th = Math.max(tw, parseInt(height as string))
  }
  textColor = textColor as string
  let tsize = Math.min(Math.max(parseInt(textSize as string) ?? 20, 1), 25)

  return (
    <>
      <div className={style['flex-container']} style={{
        position: 'fixed'
      }}>
        {Array.from({ length: num }, (value, key) =>
          <CharacterDisplay
            id={key.toString()}
            characterState={characterState}
            setCharacterState={setCharacterState}
            tw={tw}
            th={th}
            textColor={textColor}
            textSize={tsize}
            shadowColor={shadowColor}
            shadowSize={shadowSize}
            key={key.toString()}
            transparent={transparent === 'true' ? true : false}
            marginLeft={key === 0 ? 0 : marginLeft}
          />
        )}
      </div>
    </>
  )
}

export default Home
