'use client'
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import RadioInput from '@/components/form/radio/RadioInput';
import BotaoForm from '@/components/form/botao/BotaoForm';

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

export default function CadastrarAlunoes() {

    const [novoAluno, setNewAluno] = useState<Aluno>({
        nome: '',
        telefone: '',
        dataNascimento: '',
        email: '',
        tipoUsuario: 'USER',
        senha: '',
        turmas: [],
    });
    const [turmas, setTurmas] = useState<Turma[]>([]);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            // Update checked state for the specific discipline
            setNewAluno((prevAluno) => {
                const updatedTurmas = checked
                    ? [...prevAluno.turmas, { id: value, materiaTurma: name }]  // Use both id and name
                    : prevAluno.turmas.filter((turma) => turma.id !== value);

                return { ...prevAluno, turmas: updatedTurmas };
            });
        } else {
            setNewAluno((prevAluno) => ({ ...prevAluno, [name]: value }));
        }
    };


    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/turmas')
            .then((response) => {
                setTurmas(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de turmas:", error);
            });
    }, []);


    const handleAddClient = () => {
        axios
            .post("http://localhost:8080/alunos", novoAluno)
            .then((response) => {
                alert("Aluno cadastrado com sucesso!");
                router.push("/gestao/alunos");
            })
            .catch((error) => {
                alert("Erro ao inserir aluno:" + error);
            });
    };

    return (
        <section className={styles.alunos}>
            <h1>Cadastrar Aluno</h1>
            <div className={styles.formContainer}>

                <Formulario>
                    <Input type='text' nome='nome' placeholder='Nome' value={novoAluno.nome} onChange={handleInputChange} />
                    <Input type='text' nome='telefone' placeholder='Telefone' value={novoAluno.telefone} onChange={handleInputChange} />
                    <Input type='date' nome='dataNascimento' placeholder='Data de Nascimento' value={novoAluno.dataNascimento} onChange={handleInputChange} />
                    <Input type='email' nome='email' placeholder='E-mail' value={novoAluno.email} onChange={handleInputChange} />
                    <input type="text" name='tipoUsuario' value='USER' hidden />
                    <Input type='password' nome='senha' placeholder='Senha' value={novoAluno.senha} onChange={handleInputChange} />

                    <div className={styles.checks}>
                        <span className={styles.checksSpan}>Turmas</span>
                        <div className={styles.checksOpcoes}>
                            {turmas.map((turma, index) => (
                                <label key={index} htmlFor={turma.id}>
                                    <input
                                        name={turma.materiaTurma}
                                        type='checkbox'
                                        id={turma.id}
                                        value={turma.id}
                                        onChange={handleInputChange}
                                    />
                                    <span>{turma.materiaTurma}</span>
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