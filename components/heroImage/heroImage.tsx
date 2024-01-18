import styles from './heroImage.module.css'
import Image from 'next/image'

export default function HeroImage({img}: {img: any} ) {

    return (

        <div className={styles.heroImage}>
        <Image
          fill
          sizes="100vw"
          priority
          quality={100}
          placeholder='blur'
          alt='Imagem de estudantes'
          src={img}
          style={{
            objectFit: 'cover',
          }}
        ></Image>
      </div>

        
    )
}