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

    const handleDeleteTurma = (id: string) => {
        axios
            .delete(`http://localhost:8080/turmas/${id}`)
            .then((response) => {
                alert("Turmas deletado com sucesso!");
                // Atualizar o estado baseado no professor deletado
                setTurmas((prevTurmas) =>
                    prevTurmas.filter((turma) => turma.id !== id)
                );
            })
            .catch((error) => {
                alert("Erro ao deletar turma:" + error);
            });
    };

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
                                <td>
                                    <div className={styles.arrays} >
                                        {turma.alunos.map((aluno, index) => (
                                            <span key={index}>{aluno.nome}</span>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.bts}>
                                        <Link className={styles.edit} href={`/gestao/turmas/editar/${turma.id}`}><Image
                                            className={styles.edit}
                                            width={24}
                                            height={24}
                                            src={edit}
                                            alt='editar'
                                        /></Link>
                                        <Link className={styles.delete} href=''
                                            onClick={() => {
                                                const confirmed = window.confirm('Tem certeza que deseja deletar a Turma?');
                                                if (confirmed) {
                                                    handleDeleteTurma(turma.id);
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