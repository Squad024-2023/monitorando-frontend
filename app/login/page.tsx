
import Formulario from '@/components/form/Formulario'
import styles from './login.module.css'
import Input from '@/components/form/input/input'
import BotaoForm from '@/components/form/botao/BotaoForm'
import BotaoFormSec from '@/components/form/botao/BotaoFormSec'


export default function Login() {




  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          {/* login */}
          <Formulario>
            <Input type='email' nome='email' placeholder='E-mail' />
            <Input type='password' nome='password' placeholder='Senha' />
            <BotaoForm type='submit' texto='Entrar' />
            <BotaoFormSec type='submit' texto='Esqueci a senha' />
          </Formulario>
        </div>
      </section>
    </main>
  )
}
