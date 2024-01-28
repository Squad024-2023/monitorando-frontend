import styles from './gestao.module.css'
import Link from 'next/link'

export default function Gestao() {
  return (
    <section className={styles.gestao}>
      <h1>Gestão</h1>
      <ul className={styles.linksGestao}>
        <li><Link href='/gestao/professores'>Professores</Link></li>
        <li><Link href='/gestao/alunos'>Alunos</Link></li>
        <li><Link href='/gestao/disciplinas'>Disciplinas</Link></li>
        <li><Link href='/gestao/turmas'>Turmas</Link></li>
      </ul>
      <div className={styles.textoGestao}>
        <h2>Diretrizes para o bom funcionamento</h2>
        <p><span>Todas as operações podem ser encontradas no menu na lateral esquerda da tela.</span></p>
        <p>Professores, Alunos e Disciplinas são entidades independentes ou seja, não precisam de outras entidades para serem cadastradas.</p>
        <p>Só é possível cadastrar uma Turma, após o cadastro de ao menos um Professor.</p>
        <p>Essas diretrizes são baseadas no modelo de negócios do projeto monitorando e devem ser seguidas.</p>
        <p>Qualquer dúvida ou sugestão, favor entrar em contato com algum dos nossos desenvolvedores.</p>
      </div>
    </section>
  )
}
