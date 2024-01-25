import styles from '../form.module.css'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    texto: string
    icon: any
    link: string

}

export default function BotaoSocial({ texto, icon, link }: Props) {


    return (
        <Link href={link}
            className={styles.btnSocial}>
            <span>
                {texto}
            </span>
            <Image
            className={styles.btnSocialIcon}
                src={icon}
                alt='icone de login'
            />
        </Link>

    )
}