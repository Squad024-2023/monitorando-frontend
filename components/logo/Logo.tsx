import Image from 'next/image'
import styles from './logo.module.css'
import logo from '@/public/icons/logo-pink.svg'
import Link from 'next/link'

export default function Logo(){

    return(
        <Link className={styles.logo} href="/">
      <Image src={logo}
      priority
      className={styles.logo}
      quality={100}
      alt="Logo da Monitorando"
      style={{
        objectFit: 'contain',
      }}
      /></Link>
    )
}