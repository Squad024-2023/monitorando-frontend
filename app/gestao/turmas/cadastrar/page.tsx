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
    disciplina: string;
    professor: string;
    alunos: Aluno[];
};
type Disciplina = {
    id: string;
    nome: string;
};
type Professor = {
    id: string;
    nome: string;
};
type Aluno = {
    id: string;
    nome: string;
};
type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export default function CadastrarTurmas() {

    const [novaTurma, setNewTurma] = useState<Turma>({
        materiaTurma: '',
        tipoTurma: '',
        dataAula: '',
        disciplina: '',
        professor: '',
        alunos: [],
    });
    const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
    const [professores, setProfessores] = useState<Professor[]>([]);
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTurma({ ...novaTurma, [e.target.name]: e.target.value });
    };
    const handleDisciplinaChange = (e: SelectChangeEvent) => {
        setNewTurma({ ...novaTurma, disciplina: e.target.value });
        console.log(e.target.value);
    };
    const handleProfessorChange = (e: SelectChangeEvent) => {
        setNewTurma({ ...novaTurma, professor: e.target.value });
        console.log(e.target.value);
    };

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/disciplinas')
            .then((response) => {
                setDisciplinas(response.data);
            })

            .catch((error) => {
                console.error("Erro ao buscar a lista de disciplinas:", error);
            });
    }, []);
    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/professor')
            .then((response) => {
                setProfessores(response.data);
            })

            .catch((error) => {
                console.error("Erro ao buscar a lista de professores:", error);
            });
    }, []);


    const handleAddClient = () => {
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
                     <select name='disciplina' value={novaTurma.disciplina} onChange={handleDisciplinaChange}>
                        <option value='' disabled>Selecione a disciplina da turma</option>
                        {disciplinas.map((disciplina, index) => (
                            <option key={index} value={disciplina.id}>{disciplina.nome}</option>
                        ))}
                    </select>
                    <select name='professor' value={novaTurma.professor} onChange={handleProfessorChange}>
                        <option value='' disabled>Selecione o professor da turma</option>
                        {professores.map((professor, index) => (
                            <option key={index} value={professor.id}>{professor.nome}</option>
                        ))}
                    </select>
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleAddClient} />
                </Formulario>
            </div>
        </section>
    )
}