'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '../../../gestao.module.css';
import Formulario from '@/components/form/Formulario';
import Input from '@/components/form/input/Input';
import RadioInput from '@/components/form/radio/RadioInput';
import BotaoForm from '@/components/form/botao/BotaoForm';



type Disciplina = {
    nome: string;
};

export default function EditarDiscplina({ params }: { params: { id: any } }) {

    const [disciplina, setDisciplina] = useState<Disciplina>({
        nome: '',
    });


    useEffect(() => {
        // Faça uma chamada GET para a API para obter detalhes do disciplina a ser atualizado
        axios
            .get("http://localhost:8080/disciplinas/" + params.id)
            .then((response) => {
                setDisciplina(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do disciplina:", error);
            });
    }, [params.id]);

    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDisciplina({ ...disciplina, [e.target.name]: e.target.value });
    };

    const handleUpdateDisciplina = (e: FormEvent) => {
        e.preventDefault(); // Previne o reload completo da página após o submit

        console.log(disciplina);
        axios
            .put("http://localhost:8080/disciplinas/" + params.id, disciplina)
            .then((response) => {
                alert("Disciplina atualizado com sucesso!");
                router.push('/gestao/disciplinas');
            })
            .catch((error) => {
                console.error("Erro ao atualizar a disciplina:", error);
            });
    };

    return (
        <section className={styles.disciplinas}>
            <h1>Editar Disciplina</h1>
            <div className={styles.formContainer}>
                <Formulario>
                    <Input type='text' nome='nome' placeholder='Nome' value={disciplina.nome} onChange={handleInputChange} />
                    <BotaoForm type='submit' texto='Cadastrar' onClick={handleUpdateDisciplina} />
                </Formulario>
            </div>
        </section>
    )
}