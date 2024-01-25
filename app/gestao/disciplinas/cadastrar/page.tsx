'use client'
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import RadioInput from '@/components/form/radio/RadioInput';
import BotaoForm from '@/components/form/botao/BotaoForm';

type Disciplina = {
    nome: string;
    professores: Professor[];
    turmas: Turma[];
};

type Professor = {
};
type Turma = {
};

export default function CadastrarDisciplinas() {

    const [novaDisciplina, setNewDisciplina] = useState<Disciplina>({
        nome: '',
        professores: [],
        turmas: [],
    });
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewDisciplina({ ...novaDisciplina, [e.target.name]: e.target.value });
    };


    const handleAddClient = () => {
        axios
            .post("http://localhost:8080/disciplinas", novaDisciplina)
            .then((response) => {
                alert("Disciplina cadastrada com sucesso!");
                router.push("/gestao/disciplinas");
            })
            .catch((error) => {
                alert("Erro ao inserir disciplina:" + error);
            });
    };

    return (
        <section className={styles.disciplinas}>
            <h1>Cadastrar Disciplina</h1>
            <div className={styles.formContainer}>
                <Formulario>
                    <Input type='text' nome='nome' placeholder='Nome' value={novaDisciplina.nome} onChange={handleInputChange} />
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleAddClient} />
                </Formulario>
            </div>
        </section>
    )
}