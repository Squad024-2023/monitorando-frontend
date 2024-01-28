'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Input from '@/components/form/input/Input'
import styles from '../../gestao.module.css'
import BotaoForm from '@/components/form/botao/BotaoForm'

export default function BuscarProfessor() {
    type Professor = {
        id: string;
        nome: string;
        telefone: string;
        dataNascimento: string;
        email: string;
        tipoUsuario: string;
        profDescricao: string;
        disciplinas: Disciplina[];
    };

    type Disciplina = {
        nome: string;
    };

    const [professor, setProfessor] = useState<Professor>({
        id: '',
        nome: '',
        telefone: '',
        dataNascimento: '',
        email: '',
        tipoUsuario: '',
        profDescricao: '',
        disciplinas: [],
    });

    const [id, setId] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handleFindProfessor = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        console.log(professor);
        axios
            .get(`https://monitorando-deploy.onrender.com/professores/${id}`)
            .then((response) => {
                setProfessor(response.data);
            })
            .catch((error) => {
                alert('Não foi possível encontrar o professor com o ID informado.');
                console.error("Erro ao buscar o professor:", error);
            });
    };


    return (
        <section className={styles.professores}>
            <div className={styles.busca}>
                <h1>Buscar Professor por ID</h1>
                <h2>Digite o ID do professor que deseja buscar:</h2>
                <div className={styles.buscarForm}>
                    <Input nome='buscar' type='number' placeholder='Digite o ID para buscar' onChange={handleInputChange} />
                    <BotaoForm texto='Buscar' type='button' onClick={handleFindProfessor} />
                </div>
                <div>
                    <div className={styles.element2}>
                        <h5>Nome</h5>
                        <h2>{professor.nome}</h2>
                        <h5>ID</h5>
                        <h2>{professor.id}</h2>
                        <h5>Credencial</h5>
                        <h2>{professor.tipoUsuario}</h2>
                    </div>
                    <h3>Dados Pessoais</h3>
                    <div className={styles.element}>
                        <h4>E-MAIL:</h4>
                        <p>{professor.email}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>TELEFONE:</h4>
                        <p>{professor.telefone}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>DATA DE NASCIMENTO:</h4>
                        <p>{professor.dataNascimento}</p>
                    </div>
                    <div className={styles.element}>
                        <h4>DESCRICÃO:</h4>
                        <p>{professor.profDescricao}</p>
                    </div>
                    <div className={styles.elementArray}>
                        <h4>DISCIPLINAS:</h4>
                        <p>{professor.disciplinas.map((disciplina) => {
                            return (
                                <li>{disciplina.nome}</li>
                            )
                        })}</p>
                    </div>
                </div>
            </div>


        </section>
    )
}