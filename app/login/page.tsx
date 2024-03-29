
'use client'
import { useState, ChangeEvent } from 'react'
import Input from '@/components/form/input/Input'
import Formulario from '@/components/form/Formulario'
import styles from './login.module.css'
import BotaoForm from '@/components/form/botao/BotaoForm'
import BotaoFormSec from '@/components/form/botao/BotaoFormSec'
import RadioInput from '@/components/form/radio/RadioInput'
import BotaoSocial from '@/components/form/botao/BotaoSocial'
import google from '@/public/icons/googleicon.svg'
import facebook from '@/public/icons/facebookicon.svg'



export default function Login() {

  const [show, setShow] = useState(true)
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          <div className={`${styles.switchLogin} ${show ? styles.active : ''}`}>
            <div className={`${styles.botaoLogin} ${show ? styles.activeL : ''}`} onClick={() => setShow(true)}>Login</div>
            <div className={`${styles.botaoCadastro} ${show ? '' : styles.activeC}`} onClick={() => setShow(false)}>Cadastrar</div>
          </div>
          <div className={show ? styles.container1 : styles.container2}>
            <Formulario>
              <h1>Login</h1>
              <Input type='email' nome='email' placeholder='E-mail' />
              <Input type='password' nome='password' placeholder='Senha' />
              <BotaoForm type='submit' texto='Entrar' />
              <BotaoFormSec type='submit' texto='Esqueci a senha' />
              <BotaoSocial texto='Entrar com Google' icon={google} link='' />
              <BotaoSocial texto='Entrar com Facebook' icon={facebook} link='' />
            </Formulario>
          </div>
          <div className={show ? styles.container1 : styles.container2}>
            <Formulario>
              <h1>Cadastrar</h1>
              <Input type='text' nome='nome' placeholder='Nome' />
              <Input type='text' nome='cpf' placeholder='CPF' />
              <Input type='email' nome='email' placeholder='E-mail' />
              <Input type='text' nome='telefone' placeholder='Telefone' />
              <Input type='date' nome='dataNascimento' placeholder='Data de Nascimento' />
              <input type="text" name='tipoUsuario' value='USER' readOnly hidden />
              <RadioInput
                name="tipoUsuario"
                texto1="Aluno"
                texto2="Professor"
                value={selectedValue}
                onChange={handleRadioChange}
              />
              <Input type='password' nome='password' placeholder='Senha' />
              <BotaoForm type='submit' texto='Cadastrar' />
            </Formulario>
          </div>
        </div>
      </section>
    </main>
  )
}
