// 'use client'
// import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import styles from '../../../gestao.module.css';
// import Formulario from '@/components/form/Formulario';
// import Input from '@/components/form/input/Input';
// import RadioInput from '@/components/form/radio/RadioInput';
// import BotaoForm from '@/components/form/botao/BotaoForm';

// type Turmas = {
//     id: string;
//     materiaTurma: string;
//     tipoTurma: string;
//     dataAula: string;
//     professor: Professor;
//     alunos: Aluno[];
// };
// type Aluno = {
//     nome: string;
// };
// type Professor = {
//     nome: string;
// };

// export default function EditarTurmas({ params }: { params: { id: any } }) {

//     const [aluno, setAluno] = useState<Aluno>({
//         nome: '',
//     });

//     useEffect(() => {
//         // Faça uma chamada GET para a API Spring Boot
//         axios
//             .get('http://localhost:8080/turmas')
//             .then((response) => {
//                 setTurmas(response.data);
//             })
//             .catch((error) => {
//                 console.error("Erro ao buscar a lista de turmas:", error);
//             });
//     }, []);

//     useEffect(() => {
//         // Faça uma chamada GET para a API para obter detalhes do aluno a ser atualizado
//         axios
//             .get("http://localhost:8080/alunos/" + params.id)
//             .then((response) => {
//                 setAluno(response.data);
//             })
//             .catch((error) => {
//                 console.error("Erro ao buscar detalhes do aluno:", error);
//             });
//     }, [params.id]);

//     const [turmas, setTurmas] = useState<Turma[]>([]);
//     const router = useRouter();

//     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

//         const { name, value, checked } = e.target;

//         if (e.target.type === 'checkbox') {
//             setAluno((prevAlunos) => {
//                 const updatedTurmas = checked
//                     ? [...prevAlunos.turmas, { id: String(value), materiaTurma: name }]
//                     : prevAlunos.turmas.filter((turma) => String(turma.id) !== String(value));

//                 return { ...prevAlunos, turmas: updatedTurmas };
//             });
//         } else {
//             setAluno((prevAlunos) => ({ ...prevAlunos, [name]: value }));
//         }
//     };

//     const handleUpdateProfessor = (e: FormEvent) => {
//         e.preventDefault(); // Previne o reload completo da página após o submit

//         console.log(aluno);
//         axios
//             .put("http://localhost:8080/alunos/" + params.id, aluno)
//             .then((response) => {
//                 alert("Aluno atualizado com sucesso!");
//                 router.push('/gestao/alunos');
//             })
//             .catch((error) => {
//                 console.error("Erro ao atualizar o aluno:", error);
//             });
//     };

//     return (
//         <section className={styles.alunos}>
//             <h1>Editar Aluno</h1>
//             <div className={styles.formContainer}>
//                 <Formulario>
//                     <Input type='text' nome='nome' placeholder='Nome' value={aluno.nome} onChange={handleInputChange} />
//                     <Input type='text' nome='telefone' placeholder='Telefone' value={aluno.telefone} onChange={handleInputChange} />
//                     <Input type='date' nome='dataNascimento' placeholder='Data de Nascimento' value={aluno.dataNascimento} onChange={handleInputChange} />
//                     <Input type='email' nome='email' placeholder='E-mail' value={aluno.email} onChange={handleInputChange} />
//                     <input type="text" name='tipoUsuario' value='USER' hidden />
//                     <Input type='password' nome='senha' placeholder='Senha' value={aluno.senha} onChange={handleInputChange} />
//                     {/* <div className={styles.checks}>
//                         <span className={styles.checksSpan}>Disciplinas</span>
//                         <div className={styles.checksOpcoes}>
//                             {turmas.map((turma, index) => (
//                                 <label key={index} htmlFor={turma.id}>
//                                     <input
//                                         name={turma.materiaTurma}
//                                         type='checkbox'
//                                         id={turma.id}
//                                         defaultChecked={aluno.turmas.some((d) => d.id === turma.id)}
//                                         value={turma.id}
//                                         onChange={handleInputChange}

//                                     />
//                                     <span>{turma.materiaTurma}</span>
//                                 </label>
//                             ))}
//                         </div>
//                     </div> */}
//                     <BotaoForm type='submit' texto='Atualizar' onClick={handleUpdateProfessor} />
//                 </Formulario>
//             </div>
//         </section>
//     )
// }