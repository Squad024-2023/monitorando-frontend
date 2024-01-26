'use client'
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import RadioInput from '@/components/form/radio/RadioInput';
import BotaoForm from '@/components/form/botao/BotaoForm';

type Turma = {
    materiaTurma: string;
    tipoTurma: string;
    dataAula: string;
    professor: Professor;
};
type Professor = {
    id: string;
    nome: string;
};



export default function CadastrarTurmas() {

    const [novaTurma, setNewTurma] = useState<Turma>({
        materiaTurma: '',
        tipoTurma: '',
        dataAula: '',
        professor: { id: '', nome: '' },
    });
    const [professores, setProfessores] = useState<Professor[]>([]);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTurma({ ...novaTurma, [e.target.name]: e.target.value });
    };
    const handleProfessorChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedProfessorId = e.target.value;
        const selectedProfessor = professores.find(professor => professor.id == selectedProfessorId);

        setNewTurma({
            ...novaTurma,
            professor: selectedProfessor || { id: '', nome: '' }

        });
        console.log(selectedProfessor)
    };

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/professores')
            .then((response) => {
                setProfessores(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de professores:", error);
            });
    }, []);


    const handleAddClient = () => {
        console.log(novaTurma.professor)
        axios
            .post("http://localhost:8080/turmas", novaTurma)
            .then((response) => {
                alert("Turma cadastrada com sucesso!");
                router.push("/gestao/turmas");
            })
            .catch((error) => {
                alert("Erro ao inserir turma:" + error);
            });
    };

    return (
        <section className={styles.turmas}>
            <h1>Cadastrar Turma</h1>
            <div className={styles.formContainer}>
                <Formulario>
                    <Input type='text' nome='materiaTurma' placeholder='Matéria da Turma' value={novaTurma.materiaTurma} onChange={handleInputChange} />
                    <Input type='datetime-local' nome='dataAula' placeholder='Data da Aula' value={novaTurma.dataAula} onChange={handleInputChange} />
                    <RadioInput
                        name='tipoTurma'
                        texto1='INDIVIDUAL'
                        texto2='COLETIVA'
                        value={novaTurma.tipoTurma}
                        onChange={handleInputChange}
                    />
                    <div className={styles.checks}>
                        <span className={styles.checksSpan}>Professores</span>
                        <div className={styles.checksOpcoes}>
                            {professores.map((professor, index) => (
                                <label key={index} htmlFor={professor.id}>
                                    <input
                                        name={professor.nome}
                                        type='checkbox'
                                        id={professor.id}
                                        value={professor.id}
                                        onChange={handleInputChange}
                                    />
                                    <span>{professor.nome}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleAddClient} />
                </Formulario>
            </div>
        </section>
    )
}