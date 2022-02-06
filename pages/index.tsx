import { useState } from 'react'
import type { NextPage } from 'next'
import ImageLoader from '../components/ImageLoader'
import { CharacterType, characters } from '../const/character'
import Select from 'react-select'
import { customStyles } from '../components/CharacterSelectStyles'
import style from '../components/CustomStyle.module.css'
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  const [character, setCharacter] = useState<CharacterType | null>({ value: "loading.gif", label: "Loading..." })
  const router = useRouter()
  const { width, height } = router.query
  let tw = 200
  let th = 100
  if (width !== undefined) {
    tw = Math.max(tw, parseInt(width as string))
  }
  if (height !== undefined) {
    th = Math.max(tw, parseInt(height as string))
  }


  return (
    <>
      <div className={style.container} style={{
        width: tw,
        height: th
      }}>
        <div className={style.image}>
          <ImageLoader imageName={character?.value} />
        </div>
        <div className='character'>
          <Select
            id='long-value-select' instanceId='long-value-select'
            styles={customStyles}
            value={character}
            onChange={setCharacter}
            options={characters}
          />
        </div>
      </div>
    </>
  )
}

export default Home
