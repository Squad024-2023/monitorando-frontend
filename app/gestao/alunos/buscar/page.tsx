'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Input from '@/components/form/input/Input'
import styles from '../../gestao.module.css'
import BotaoForm from '@/components/form/botao/BotaoForm'
import BotaoVoltar from '@/components/form/botaoVoltar/BotaoVoltar'

export default function BuscarAluno() {
    type Aluno = {
        id: string;
        nome: string;
        telefone: string;
        dataNascimento: string;
        email: string;
        tipoUsuario: string;
    };

    const [aluno, setAluno] = useState<Aluno>({
        id: '',
        nome: '',
        telefone: '',
        dataNascimento: '',
        email: '',
        tipoUsuario: '',
    });
    const [id, setId] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handleFindAluno = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        console.log(aluno);
        axios
            .get(`https://monitorando-deploy.onrender.com/alunos/${id}`)
            .then((response) => {
                setAluno(response.data);
            })
            .catch((error) => {
                alert('Não foi possível encontrar o aluno com o ID informado.');
                console.error("Erro ao buscar o aluno:", error);
            });
    };


    return (
        <section className={styles.alunos}>
            <div className={styles.busca}>
                <h1>Buscar Aluno por ID</h1>
                <h2>Digite o ID do aluno que deseja buscar:</h2>
                <div className={styles.buscarForm}>
                    <Input nome='buscar' type='number' placeholder='Digite o ID para buscar' onChange={handleInputChange} />
                    <BotaoForm texto='Buscar' type='button' onClick={handleFindAluno} />
                </div>
                <div>
                    <div className={styles.element2}>
                        <h5>Nome</h5>
                        <h2>{aluno.nome}</h2>
                        <h5>ID</h5>
                        <h2>{aluno.id}</h2>
                    </div>
                    <h3>Dados Pessoais</h3>
                    <div className={styles.element}>
                        <h4>E-MAIL:</h4>
                        <p>{aluno.email}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>TELEFONE:</h4>
                        <p>{aluno.telefone}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>DATA DE NASCIMENTO:</h4>
                        <p>{aluno.dataNascimento}</p>
                    </div>
                </div>
            </div>
            <div className={styles.linksUteis}>
                <BotaoVoltar />
            </div>
        </section>
    )
}