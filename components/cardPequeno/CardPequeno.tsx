import Image from 'next/image'
import styles from './cardPequeno.module.css'
type Props = {
    titulo: string,
    texto: string,
    ani: any,

}

export default function CardPequeno({ titulo, texto, ani }: Props) {

    return (
        <div className={styles.cardWrapper}
        >
            <Image
                className={styles.cardImg}
                src={ani}
                alt='imagem do card'
            />
            <div className={styles.cardTexto}>
                <h4>{titulo}</h4>
                <p>{texto}</p>
            </div>
        </div>
    )
}