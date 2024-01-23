import styles from '../sidenav.module.css'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
    label: string,
    link1: string,
    link2: string,
    link3: string,
}



export default function SubNav({ link1, link2, link3, label }: Props) {

    const [show, setShow] = useState(false)
    const HandleClickEvent = () => {
        setShow(!show)

    }

    return (
        <>
            <span className={styles.subNavlabel} onClick={HandleClickEvent}>{label}</span>
            <ul className={`${styles.subNav} ${show ? '' : styles.hide}`}>
                <li><Link href={link1}>Listar</Link></li>
                <li><Link href={link2}>Cadastrar</Link></li>
                <li><Link href={link3}>Consultar por ID</Link></li>
            </ul>
        </>
    )

}