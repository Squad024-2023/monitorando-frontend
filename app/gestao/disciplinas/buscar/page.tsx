'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Input from '@/components/form/input/Input'
import styles from '../../gestao.module.css'
import BotaoForm from '@/components/form/botao/BotaoForm'

export default function BuscarDisciplina() {

    type Disciplina = {
        id: string;
        nome: string;
    };

    const [disciplina, setDisciplina] = useState<Disciplina>({
        id: '',
        nome: '',
    });
    const [id, setId] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handleFindDisciplina = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        axios
            .get(`http://localhost:8080/disciplinas/${id}`)
            .then((response) => {
                setDisciplina(response.data);
            })
            .catch((error) => {
                alert('Não foi possível encontrar a disciplina com o ID informado.');
                console.error("Erro ao buscar a disciplina:", error);
            });
    };


    return (
        <section className={styles.disciplinas}>
            <div className={styles.busca}>
                <h1>Buscar Disciplina por ID</h1>
                <h2>Digite o ID do disciplina que deseja buscar:</h2>
                <div className={styles.buscarForm}>
                    <Input nome='buscar' type='number' placeholder='Digite o ID para buscar' onChange={handleInputChange} />
                    <BotaoForm texto='Buscar' type='button' onClick={handleFindDisciplina} />
                </div>
                <div>
                    <div className={styles.element2}>
                        <h5>Nome</h5>
                        <h2>{disciplina.nome}</h2>
                        <h5>ID</h5>
                        <h2>{disciplina.id}</h2>
                    </div>
                </div>
            </div>


        </section>
    )
}