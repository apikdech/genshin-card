import Image from 'next/image'

type ImageLoaderType = {
  imageName: string
}

export default ({ imageName }: ImageLoaderType) => (
  <Image
    src={imageName}
    width='100%'
    height='100%'
    alt={`${imageName}`}
    // unoptimized
  />
)
