'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import Image from "next/image";
import edit from '@/public/icons/edit-32-32.svg';
import deleteI from '@/public/icons/delete-32-32.svg'
import styles from '../gestao.module.css';
import BotaoVoltar from '@/components/form/botaoVoltar/BotaoVoltar';

type Disciplinas = {
    id: string;
    nome: string;
};



export default function Disciplinas() {

    const [disciplinas, setDisciplinas] = useState<Disciplinas[]>([]);
    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('https://monitorando-deploy.onrender.com/disciplinas')
            .then((response) => {
                setDisciplinas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de disciplinas:", error);
            });
    }, []);

    const handleDeleteDisciplina = (id: string) => {
        console.log('o id é: ' + id);
        axios
            .delete(`https://monitorando-deploy.onrender.com/disciplinas/${id}`)
            .then((response) => {
                alert("Disciplina deletada com sucesso!");
                // Atualizar o estado baseado no professor deletado
                setDisciplinas((prevDisciplinas) =>
                    prevDisciplinas.filter((disciplina) => disciplina.id !== id)
                );
            })
            .catch((error) => {
                alert("Erro ao deletar disciplina:" + error);
            });
    };
    return (
        <section className={styles.disciplinas}>
            <div className={styles.tableWrapper}>
                <h1>Disciplinas</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
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
                                    <div className={styles.bts}>
                                        <Link className={styles.edit} href={`/gestao/disciplinas/editar/${disciplina.id}`}><Image
                                            className={styles.edit}
                                            width={24}
                                            height={24}
                                            src={edit}
                                            alt="editar"
                                        /></Link>
                                        <Link className={styles.delete} href=''
                                            onClick={() => {
                                                const confirmed = window.confirm('Tem certeza que deseja deletar a disciplina?');
                                                if (confirmed) {
                                                    handleDeleteDisciplina(disciplina.id);
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
            <div className={styles.linksUteis}>
                <BotaoVoltar />
            </div>
        </section>
    )
}