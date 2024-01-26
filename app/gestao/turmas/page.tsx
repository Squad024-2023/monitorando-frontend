'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import Image from "next/image";
import edit from '@/public/icons/edit-32-32.svg';
import deleteI from '@/public/icons/delete-32-32.svg'
import styles from '../gestao.module.css';

type Turmas = {
    id: string;
    materiaTurma: string;
    tipoTurma: string;
    dataAula: string;
    professor: Professor;
    alunos: Aluno[];
};
type Aluno = {
    nome: string;
};
type Professor = {
    nome: string;
};


export default function Turmas() {
    const [turmas, setTurmas] = useState<Turmas[]>([]);
    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/turmas')
            .then((response) => {
                setTurmas(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de clientes:", error);
            });
    }, []);
    return (
        <section className={styles.turmas}>
            <div className={styles.tableWrapper}>
                <h1>Turmas</h1>
                <table className={styles.table}>
                    <thead>
           
                        <tr>
                            <th>ID</th>
                            <th>Matéria</th>
                            <th>Tipo da Turma</th>
                            <th>Data da Aula</th>
                            <th>Professor</th>
                            <th>Alunos</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map para listar os alunos dentro do vetor */}
                        {turmas.map((turma, index) => (
                            <tr className={styles.tr} key={index}>
                                <td key={index}>{turma.id}</td>
                                <td>{turma.materiaTurma}</td>
                                <td>{turma.tipoTurma}</td>
                                <td>{turma.dataAula}</td>
                                <td>{turma.professor.nome}</td>
                                <td>{turma.alunos.map((aluno, index) => (
                                    <span key={index}>{aluno.nome}</span>
                                ))}
                                </td>
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