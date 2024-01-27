'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
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
    alunos: Aluno[];
};
type Aluno = {
    id: string;
    nome: string;
}
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
        alunos: [],
    });

    const [professores, setProfessores] = useState<Professor[]>([]);
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch professors and students only once
        Promise.all([
            axios.get('http://localhost:8080/professores'),
            axios.get('http://localhost:8080/alunos'),
        ])
            .then(([professoresResponse, alunosResponse]) => {
                setProfessores(professoresResponse.data);
                setAlunos(alunosResponse.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de professores ou alunos:", error);
            });
    }, []);

    const handleProfessorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        const selectedProfessorId = e.target.value;
        const selectedProfessor = professores.find(professor => professor.id == selectedProfessorId);
        setNewTurma({
            ...novaTurma,
            professor: selectedProfessor || { id: '', nome: '' },
        });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            // atualiza o estado marcado para o aluno específico
            setNewTurma((prevTurma) => {
                const updatedAlunos = checked
                    ? [...prevTurma.alunos, { id: value, nome: name }]   // usando id e nome para adicionar
                    : prevTurma.alunos.filter((aluno) => aluno.id !== value);
                return { ...prevTurma, alunos: updatedAlunos };
            });
        } else {
            setNewTurma((prevTurma) => ({ ...prevTurma, [name]: value }));
        }
    };

    const handleAddTurma = (e: FormEvent) => {
        e.preventDefault();
        console.log(novaTurma.alunos)
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
                    <label htmlFor="professor">Professor da Turma</label>
                    <select name="professor" value={novaTurma.professor.id} onChange={handleProfessorChange}>
                        <option value="" disabled>Selecione um professor</option>
                        {professores.map((professor, index) => (
                            <option key={index} value={professor.id}>
                                {professor.nome}
                            </option>
                        ))}
                    </select>
                    <div className={styles.checks}>
                        <span className={styles.checksSpan}>Alunos</span>
                        <div className={styles.checksOpcoes}>
                            {alunos.map((aluno, index) => (
                                <label key={index} htmlFor={aluno.id}>
                                    <input
                                        name={aluno.nome}
                                        type='checkbox'
                                        id={aluno.id}
                                        value={aluno.id}
                                        onChange={handleInputChange}
                                    />
                                    <span>{aluno.nome}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleAddTurma} />
                </Formulario>
            </div>
        </section>
    )
}