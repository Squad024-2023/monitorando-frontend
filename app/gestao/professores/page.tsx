import Table from '@/components/table/table';
import Nav from '@/components/nav/nav'
import styles from '../gestao.module.css'



export default function Professores() {

   

    return (
        <main className={styles.professores}>
            <Nav/>
          <Table  entity='professores' /> 
        </main>
    )
}