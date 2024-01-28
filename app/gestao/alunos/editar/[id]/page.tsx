'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import BotaoForm from '@/components/form/botao/BotaoForm';
import BotaoVoltar from '@/components/form/botaoVoltar/BotaoVoltar';

type Aluno = {
    nome: string;
    telefone: string;
    dataNascimento: string;
    email: string;
    tipoUsuario: string;
    senha: string;
    turmas: Turma[];
};

type Turma = {
    id: string;
    materiaTurma: string;
};

export default function EditarAlunos({ params }: { params: { id: any } }) {

    const [aluno, setAluno] = useState<Aluno>({
        nome: '',
        telefone: '',
        dataNascimento: '',
        email: '',
        tipoUsuario: '',
        senha: '',
        turmas: [],
    });

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('https://monitorando-deploy.onrender.com/turmas')
            .then((response) => {
                setTurmas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de turmas:", error);
            });
    }, []);

    useEffect(() => {
        // Faça uma chamada GET para a API para obter detalhes do aluno a ser atualizado
        axios
            .get("https://monitorando-deploy.onrender.com/alunos/" + params.id)
            .then((response) => {
                setAluno(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do aluno:", error);
            });
    }, [params.id]);

    const [turmas, setTurmas] = useState<Turma[]>([]);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            setAluno((prevAlunos) => {
                const updatedTurmas = checked
                    ? [...prevAlunos.turmas, { id: String(value), materiaTurma: name }]
                    : prevAlunos.turmas.filter((turma) => String(turma.id) !== String(value));

                return { ...prevAlunos, turmas: updatedTurmas };
            });
        } else {
            setAluno((prevAlunos) => ({ ...prevAlunos, [name]: value }));
        }
    };

    const handleUpdateProfessor = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        console.log(aluno);
        axios
            .put("https://monitorando-deploy.onrender.com/alunos/" + params.id, aluno)
            .then((response) => {
                alert("Aluno atualizado com sucesso!");
                router.push('/gestao/alunos');
            })
            .catch((error) => {
                console.error("Erro ao atualizar o aluno:", error);
            });
    };

    return (
        <section className={styles.alunos}>
            <h1>Editar Aluno</h1>
            <div className={styles.formContainer}>
                <Formulario>
                    <Input type='text' nome='nome' placeholder='Nome' value={aluno.nome} onChange={handleInputChange} />
                    <Input type='text' nome='telefone' placeholder='Telefone' value={aluno.telefone} onChange={handleInputChange} />
                    <Input type='date' nome='dataNascimento' placeholder='Data de Nascimento' value={aluno.dataNascimento} onChange={handleInputChange} />
                    <Input type='email' nome='email' placeholder='E-mail' value={aluno.email} onChange={handleInputChange} />
                    <input type="text" name='tipoUsuario' value='USER' hidden />
                    <Input type='password' nome='senha' placeholder='Senha' value={aluno.senha} onChange={handleInputChange} />
                    <BotaoForm type='submit' texto='Atualizar' onClick={handleUpdateProfessor} />
                </Formulario>
            </div>
            <div className={styles.linksUteis}>
                <BotaoVoltar />
            </div>
        </section>
    )
}