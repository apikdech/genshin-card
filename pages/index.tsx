import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { CharacterState } from '../const/character'
import style from '../components/CustomStyle.module.css'
import { useRouter } from 'next/router'
import CharacterDisplay from '../components/CharacterDisplay'
import { initCharacterState } from '../utils/Utils'

// let initState: CharacterState[] = Array.from({ length: 7 }, (v, k) => k).map(id => ({
//   id: id.toString(),
//   value: 'loading.gif',
//   label: 'Loading...'
// } as CharacterState))
// let width, height, textSize, textColor, distance, layout, transparent, shadowSize, shadowColor
const Home: NextPage = () => {
  const router = useRouter()
  if (!router.isReady) {
    return null
  }
  let { width, height, textSize, textColor, distance, layout, transparent, shadowSize, shadowColor } = router.query
  // let query = useEffect(() => {
  //   if (!router.isReady) return
  //   return router
  // }, [router.isReady])

  let tw = 200
  let th = 250
  let dist = Math.max(parseInt(distance as string) ?? 0, 0)
  let marginLeft = dist - 100 + 'px'
  console.log(layout)
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

  console.log('num =', num)
  const [characterState, setCharacterState] = useState<CharacterState[]>(() => initCharacterState(num))
  console.log(characterState)
  return (
    <>
      <div className={style['flex-container']} style={{
        position: 'fixed'
      }}>
        {/* {Array.from({ length: num }, (value, key) =>
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
        )} */}
      </div>
    </>
  )
}

export default Home
