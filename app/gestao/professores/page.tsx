'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import edit from '@/public/icons/edit-32-32.svg';
import deleteI from '@/public/icons/delete-32-32.svg'
import styles from '../gestao.module.css';

type Professores = {
    id: string;
    nome: string;
    telefone: string;
    dataNascimento: string;
    email: string;
    tipoUsuario: string;
    profDescricao: string;
    disciplinas: Disciplina[];
};

type Disciplina = {
    nome: string;
};

export default function Professores() {

    const router = useRouter();
    const [professores, setProfessores] = useState<Professores[]>([]);

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('https://monitorando-deploy.onrender.com/professores')
            .then((response) => {
                setProfessores(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar a lista de professores:', error);
            });
    }, []);

    const handleDeleteProfessor = (id: string) => {
        console.log('o id é: ' + id);
        axios
            .delete(`https://monitorando-deploy.onrender.com/professores/${id}`)
            .then((response) => {
                alert("Professor deletado com sucesso!");
                // Atualizar o estado baseado no professor deletado
                setProfessores((prevProfessores) =>
                    prevProfessores.filter((professor) => professor.id !== id)
                );
            })
            .catch((error) => {
                alert("Erro ao deletar professor:" + error);
            });
    };

    return (
        <section className={styles.professores}>
            <div className={styles.tableWrapper}>
                <h1>Professores</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Data de Nascimento</th>
                            <th>E-Mail</th>
                            <th>Credencial</th>
                            <th>Disciplinas</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map para listar os alunos dentro do vetor */}
                        {professores.map((professor, index) => (
                            <tr className={styles.tr} key={index}>
                                <td key={index}>{professor.id}</td>
                                <td>{professor.nome}</td>
                                <td>{professor.telefone}</td>
                                <td>{professor.dataNascimento}</td>
                                <td>{professor.email}</td>
                                <td>{professor.tipoUsuario}</td>
                                     <td>
                                    <div className={styles.arrays} >
                                        {professor.disciplinas.map((disciplina, index) => (
                                            <span key={index}>{disciplina.nome}</span>
                                        ))}
                                    </div>
                                </td>
                                <td>{professor.profDescricao}</td>
                                <td>
                                    <div className={styles.bts}>
                                        <Link className={styles.edit} href={`/gestao/professores/editar/${professor.id}`}><Image
                                            className={styles.edit}
                                            width={24}
                                            height={24}
                                            src={edit}
                                            alt='editar'
                                        /></Link>
                                        <Link className={styles.delete} href=''
                                            onClick={() => {
                                                const confirmed = window.confirm('Tem certeza que deseja deletar o professor?');
                                                if (confirmed) {
                                                    handleDeleteProfessor(professor.id);
                                                }
                                            }}><Image
                                                className={styles.delete}
                                                width={24}
                                                height={24}
                                                src={deleteI}
                                                alt='deletar'
                                            /></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}