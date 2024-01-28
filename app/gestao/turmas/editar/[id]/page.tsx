'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import RadioInput from '@/components/form/radio/RadioInput';
import BotaoForm from '@/components/form/botao/BotaoForm';
import BotaoVoltar from '@/components/form/botaoVoltar/BotaoVoltar';

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

export default function EditarTurmas({ params }: { params: { id: any } }) {

    const [turma, setTurma] = useState<Turma>({
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
        // Chamada GET para api de professores e alunos simultaneamente
        Promise.all([
            axios.get('https://monitorando-deploy.onrender.com/professores'),
            axios.get('https://monitorando-deploy.onrender.com/alunos'),
        ])
            .then(([professoresResponse, alunosResponse]) => {
                setProfessores(professoresResponse.data);
                setAlunos(alunosResponse.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de professores ou alunos:", error);
            });
    }, []);

    useEffect(() => {
        // Faça uma chamada GET para a API para obter detalhes da turma a ser atualizada
        axios
            .get("https://monitorando-deploy.onrender.com/turmas/" + params.id)
            .then((response) => {
                setTurma(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da turma:", error);
            });
    }, [params.id]);

    //usado exclusivamente para o select de professores para evidar estados inconsistentes
    const handleProfessorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedProfessorId = e.target.value;
        const selectedProfessor = professores.find(professor => professor.id == selectedProfessorId);
        setTurma({
            ...turma,
            professor: selectedProfessor || { id: '', nome: '' },
        });
    };
    //usado para outros inputs e para lidar com arrays mapeados em checkboxes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            setTurma((prevTurma) => {
                const updatedAlunos = checked
                    ? [...prevTurma.alunos, { id: String(value), nome: name }]
                    : prevTurma.alunos.filter((aluno) => String(aluno.id) !== String(value));

                return { ...prevTurma, alunos: updatedAlunos };
            });
        } else {
            setTurma((prevTurma) => ({ ...prevTurma, [name]: value }));
        }
    };


    const handleUpdateTurma = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        console.log(turma);
        axios
            .put("https://monitorando-deploy.onrender.com/turmas/" + params.id, turma)
            .then((response) => {
                alert("Turmas atualizado com sucesso!");
                router.push('/gestao/turmas');
            })
            .catch((error) => {
                console.error("Erro ao atualizar a turma:", error);
            });
    };

    return (
        <section className={styles.turmas}>
            <h1>Cadastrar Turma</h1>
            <div className={styles.formContainer}>
                <Formulario>
                    <Input type='text' nome='materiaTurma' placeholder='Matéria da Turma' value={turma.materiaTurma} onChange={handleInputChange} />
                    <Input type='datetime-local' nome='dataAula' placeholder='Data da Aula' value={turma.dataAula} onChange={handleInputChange} />
                    <RadioInput
                        name='tipoTurma'
                        texto1='INDIVIDUAL'
                        texto2='COLETIVA'
                        value={turma.tipoTurma}
                        onChange={handleInputChange}
                    />
                    <div className={styles.select}>
                        <label htmlFor='professor'>Professor da Turma</label>
                        <select name='professor' id='professor' value={turma.professor.id} onChange={handleProfessorChange}>
                            <option value='' disabled>Selecione um professor</option>
                            {professores.map((professor, index) => (
                                <option key={index} value={professor.id}>
                                    {professor.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.checks}>
                        <span className={styles.checksSpan}>Alunos</span>
                        <div className={styles.checksOpcoes}>
                            {alunos.map((aluno, index) => (
                                <label key={index} htmlFor={aluno.id}>
                                    <input
                                        name={aluno.nome}
                                        type='checkbox'
                                        id={aluno.id}
                                        defaultChecked={turma.alunos.some((a) => a.id === aluno.id)}
                                        value={aluno.id}
                                        onChange={handleInputChange}
                                    />
                                    <span>{aluno.nome}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleUpdateTurma} />
                </Formulario>
            </div>
            <div className={styles.linksUteis}>
                <BotaoVoltar />
            </div>
        </section>
    )
}