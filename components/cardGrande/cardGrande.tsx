import Link from 'next/link'
import styles from './cardGrande.module.css'
import Image from 'next/image'

type Props = {
    titulo: string  //titulo do card
    img: any //imagem do card
}



export default function CardGrande({ titulo, img }: Props) {


    return (
        <Link href='/'
            className={styles.cardWrapper}>
            <Image
                src={img}
                alt='imagem de um professor'
            />
            <h2>{titulo}</h2>
        </Link>
    )
}