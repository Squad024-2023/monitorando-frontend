'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
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


    const handleAddDisciplina = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit
        axios
            .post("https://monitorando-deploy.onrender.com/disciplinas", novaDisciplina)
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
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleAddDisciplina} />
                </Formulario>
            </div>
        </section>
    )
}