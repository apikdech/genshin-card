import Image from 'next/image'

type ImageLoaderType = {
    imageName: string | undefined
}

export default ({ imageName }: ImageLoaderType) => (
    <Image
        src={`/assets/${imageName}`}
        width='100%'
        height='100%'
    />
)
