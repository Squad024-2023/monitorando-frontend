'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Input from '@/components/form/input/Input'
import styles from '../../gestao.module.css'
import BotaoForm from '@/components/form/botao/BotaoForm'

export default function TurmasProfessor() {
    type Turma = {
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

    const [turma, setTurma] = useState<Turma>({
        id: '',
        materiaTurma: '',
        tipoTurma: '',
        dataAula: '',
        professor: { nome: '', },
        alunos: [],
    });

    const [id, setId] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handleFindTurma = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        console.log(turma);
        axios
            .get(`https://monitorando-deploy.onrender.com/turmas/${id}`)
            .then((response) => {
                setTurma(response.data);
            })
            .catch((error) => {
                alert('Não foi possível encontrar a turma com o ID informado.');
                console.error("Erro ao buscar a turma:", error);
            });
    };


    return (
        <section className={styles.turmas}>
            <div className={styles.busca}>
                <h1>Buscar Turma por ID</h1>
                <h2>Digite o ID do turma que deseja buscar:</h2>
                <div className={styles.buscarForm}>
                    <Input nome='buscar' type='number' placeholder='Digite o ID para buscar' onChange={handleInputChange} />
                    <BotaoForm texto='Buscar' type='button' onClick={handleFindTurma} />
                </div>
                <div>
                    <div className={styles.element2}>
                        <h5>Matéria da Turma</h5>
                        <h2>{turma.materiaTurma}</h2>
                        <h5>ID</h5>
                        <h2>{turma.id}</h2>
                    </div>
                    <h3>Dados da Turma</h3>
                    <div className={styles.element}>
                        <h4>TIPO DA TURMA:</h4>
                        <p>{turma.tipoTurma}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>DATA DA AULA:</h4>
                        <p>{turma.dataAula}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>PROFESSOR DA TURMA</h4>
                        <p>{turma.professor.nome}</p>
                    </div>
                    <div className={styles.elementArray}>
                        <h4>ALUNOS:</h4>
                        <p>{turma.alunos.map((aluno) => {
                            return (
                                <li>{aluno.nome}</li>
                            )
                        })}</p>
                    </div>
                </div>
            </div>


        </section>
    )
}