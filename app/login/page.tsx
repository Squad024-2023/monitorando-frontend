
import Form from '@/components/form/form'
import styles from './login.module.css'
import Input from '@/components/form/input/input'


export default function Login() {




  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <Form>
          <Input type='email' nome='email' placeholder='E-mail' />
          <Input type='password' nome='password' placeholder='Senha' />
        </Form>
      </section>
    </main>
  )
}
