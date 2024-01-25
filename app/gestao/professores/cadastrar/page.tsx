'use client'
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import RadioInput from '@/components/form/radio/RadioInput';
import BotaoForm from '@/components/form/botao/BotaoForm';

type Professor = {
    nome: string;
    telefone: string;
    dataNascimento: string;
    email: string;
    tipoUsuario: string;
    profDescricao: string;
    senha: string;
    disciplinas: Disciplina[];
};

type Disciplina = {
    id: string;
    nome: string;
};

export default function CadastrarProfessores() {

    const [novoProfessor, setNewProfessor] = useState<Professor>({
        nome: '',
        telefone: '',
        dataNascimento: '',
        email: '',
        tipoUsuario: '',
        profDescricao: '',
        senha: '',
        disciplinas: [],
    });
    const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            // Update checked state for the specific discipline
            setNewProfessor((prevProfessor) => {
                const updatedDisciplinas = checked
                    ? [...prevProfessor.disciplinas, { id: value, nome: name }]  // Use both id and name
                    : prevProfessor.disciplinas.filter((disciplina) => disciplina.id !== value);

                return { ...prevProfessor, disciplinas: updatedDisciplinas };
            });
        } else {
            setNewProfessor((prevProfessor) => ({ ...prevProfessor, [name]: value }));
        }
    };


    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get('http://localhost:8080/disciplinas')
            .then((response) => {
                setDisciplinas(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de disciplinas:", error);
            });
    }, []);


    const handleAddClient = () => {
        axios
            .post("http://localhost:8080/professores", novoProfessor)
            .then((response) => {
                alert("Professor cadastrado com sucesso!");
                router.push("/gestao/professores");
            })
            .catch((error) => {
                alert("Erro ao inserir professor:" + error);
            });
    };

    return (
        <section className={styles.professores}>
            <h1>Cadastrar Professor</h1>
            <div className={styles.formContainer}>

                <Formulario>
                    <Input type='text' nome='nome' placeholder='Nome' value={novoProfessor.nome} onChange={handleInputChange} />
                    <Input type='text' nome='telefone' placeholder='Telefone' value={novoProfessor.telefone} onChange={handleInputChange} />
                    <Input type='date' nome='dataNascimento' placeholder='Data de Nascimento' value={novoProfessor.dataNascimento} onChange={handleInputChange} />
                    <Input type='email' nome='email' placeholder='E-mail' value={novoProfessor.email} onChange={handleInputChange} />
                    <RadioInput
                        name='tipoUsuario'
                        texto1='ADMIN'
                        texto2='USER'
                        value={novoProfessor.tipoUsuario}
                        onChange={handleInputChange}
                    />
                    <Input type='text' nome='profDescricao' placeholder='Descrição do Professor' value={novoProfessor.profDescricao} onChange={handleInputChange} />
                    <Input type='password' nome='senha' placeholder='Senha' value={novoProfessor.senha} onChange={handleInputChange} />

                    <div className={styles.checks}>
                        <span className={styles.checksSpan}>Disciplinas</span>
                        <div className={styles.checksOpcoes}>
                            {disciplinas.map((disciplina, index) => (
                                <label key={index} htmlFor={disciplina.id}>
                                    <input
                                        name={disciplina.nome}
                                        type='checkbox'
                                        id={disciplina.id}
                                        value={disciplina.id}
                                        onChange={handleInputChange}
                                    />
                                    <span>{disciplina.nome}</span>
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