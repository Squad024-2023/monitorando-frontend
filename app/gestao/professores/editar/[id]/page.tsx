'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../../gestao.module.css';
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

export default function EditarProfessores({ params }: { params: { id: any } }) {

    const [professor, setProfessor] = useState<Professor>({
        nome: '',
        telefone: '',
        dataNascimento: '',
        email: '',
        tipoUsuario: '',
        profDescricao: '',
        senha: '',
        disciplinas: [],
    });

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
        // Faça uma chamada GET para a API para obter detalhes do professor a ser atualizado
        axios
            .get("http://localhost:8080/professores/" + params.id)
            .then((response) => {
                setProfessor(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do professor:", error);
            });
    }, [params.id]);

    const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value, checked } = e.target;

        if (e.target.type === 'checkbox') {
            setProfessor((prevProfessor) => {
                const updatedDisciplinas = checked
                    ? [...prevProfessor.disciplinas, { id: String(value), nome: name }]
                    : prevProfessor.disciplinas.filter((disciplina) => String(disciplina.id) !== String(value));

                return { ...prevProfessor, disciplinas: updatedDisciplinas };
            });
        } else {
            setProfessor((prevProfessor) => ({ ...prevProfessor, [name]: value }));
        }
    };

    const handleUpdateProfessor = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit
    
        console.log(professor);
        axios
            .put("http://localhost:8080/professores/" + params.id, professor)
            .then((response) => {
                alert("Professor atualizado com sucesso!");
                router.push('/gestao/professores');
            })
            .catch((error) => {
                console.error("Erro ao atualizar o professor:", error);
            });
    };

    return (
        <section className={styles.professores}>
            <h1>Editar Professor</h1>
            <div className={styles.formContainer}>
                <Formulario>
                    <Input type='text' nome='nome' placeholder='Nome' value={professor.nome} onChange={handleInputChange} />
                    <Input type='text' nome='telefone' placeholder='Telefone' value={professor.telefone} onChange={handleInputChange} />
                    <Input type='date' nome='dataNascimento' placeholder='Data de Nascimento' value={professor.dataNascimento} onChange={handleInputChange} />
                    <Input type='email' nome='email' placeholder='E-mail' value={professor.email} onChange={handleInputChange} />
                    <RadioInput
                        name='tipoUsuario'
                        texto1='ADMIN'
                        texto2='USER'
                        value={professor.tipoUsuario}
                        onChange={handleInputChange}
                    />
                    <Input type='text' nome='profDescricao' placeholder='Descrição do Professor' value={professor.profDescricao} onChange={handleInputChange} />
                    <Input type='password' nome='senha' placeholder='Senha' value={professor.senha} onChange={handleInputChange} />

                    <div className={styles.checks}>
                        <span className={styles.checksSpan}>Disciplinas</span>
                        <div className={styles.checksOpcoes}>
                            {disciplinas.map((disciplina, index) => (
                                <label key={index} htmlFor={disciplina.id}>
                                    <input
                                        name={disciplina.nome}
                                        type='checkbox'
                                        id={disciplina.id}
                                        defaultChecked={professor.disciplinas.some((d) => d.id === disciplina.id)}
                                        value={disciplina.id}
                                        onChange={handleInputChange}

                                    />
                                    <span>{disciplina.nome}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <BotaoForm type='submit' texto='Atualizar' onClick={handleUpdateProfessor} />
                </Formulario>
            </div>
        </section>
    )
}