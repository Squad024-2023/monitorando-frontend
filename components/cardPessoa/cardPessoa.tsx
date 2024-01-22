import styles from './cardPessoa.module.css'
import Image from 'next/image'


type Props = {
    img: any,
    nome: string,
    descricao: string
}

export default function CardPessoa({ img, nome, descricao }: Props) {


    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImagem}>
                <Image
                    src={img}
                    quality={100}
                    placeholder='blur'
                    alt={`'Imagem de ${nome}'`}
                />
            </div>
            <div className={styles.cardTexto}>
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}