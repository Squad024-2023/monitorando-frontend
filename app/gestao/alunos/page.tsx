'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import Image from "next/image";
import edit from '@/public/icons/edit-32-32.svg';
import deleteI from '@/public/icons/delete-32-32.svg'
import styles from '../gestao.module.css';

type Alunos = {
    id: string;
    nome: string;
    telefone: string;
    dataNascimento: string;
    email: string;
    tipoUsuario: string;
    turmas: Turma[];
};

type Turma = {
    materiaTurma: string;
};

export default function Alunos() {
    const [alunos, setAlunos] = useState<Alunos[]>([]);
    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/alunos')
            .then((response) => {
                setAlunos(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de alunos:", error);
            });
    }, []);
    return (
        <section className={styles.alunos}>
            <div className={styles.tableWrapper}>
                <h1>Alunos</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Data de Nascimento</th>
                            <th>E-Mail</th>
                            <th>Credencial</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map para listar os alunos dentro do vetor */}
                        {alunos.map((aluno, index) => (
                            <tr className={styles.tr} key={index}>
                                <td key={index}>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.telefone}</td>
                                <td>{aluno.dataNascimento}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.tipoUsuario}</td>
                                <td>
                                    <div className={styles.bts}>
                                        <Link className={styles.edit} href={'/'}><Image
                                            className={styles.edit}
                                            width={24}
                                            height={24}
                                            src={edit}
                                            alt="edit"
                                        /></Link>
                                        <Link className={styles.delete} href={'/'}><Image
                                            className={styles.delete}
                                            width={24}
                                            height={24}
                                            src={deleteI}
                                            alt="edit"
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