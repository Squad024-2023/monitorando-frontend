'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import Image from "next/image";
import edit from '@/public/icons/edit-32-32.svg';
import deleteI from '@/public/icons/delete-32-32.svg'
import styles from '../gestao.module.css';

type Disciplinas = {
    id: string;
    nome: string;
    professores: Professores[];
};

type Professores = {
    nome: string;
};

export default function Disciplinas() {
    const [disciplinas, setDisciplinas] = useState<Disciplinas[]>([]);
    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/disciplinas')
            .then((response) => {
                setDisciplinas(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de disciplinas:", error);
            });
    }, []);
    return (
        <section className={styles.disciplinas}>
            <div className={styles.tableWrapper}>
                <h1>Disciplinas</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Professores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map para listar os alunos dentro do vetor */}
                        {disciplinas.map((disciplina, index) => (
                            <tr className={styles.tr} key={index}>
                                <td key={index}>{disciplina.id}</td>
                                <td>{disciplina.nome}</td>
                                <td>
                                    <div className={styles.arrays} >
                                        {disciplina.professores.map((professor, index) => (
                                            <span key={index}>{professor.nome}</span>
                                        ))}
                                    </div>
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