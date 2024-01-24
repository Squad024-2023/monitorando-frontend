'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import styles from './table.module.css';
import Link from "next/link";
import Image from "next/image";
import edit from '@/public/icons/edit-32-32.svg';
import deleteI from '@/public/icons/delete-32-32.svg'

type Entity = {
    [key: string]: string;
};

type TableProps = {
    entity: string;
};

export default function Table({ entity }: TableProps) {

    const [entities, setEntities] = useState<Entity[]>([]);
    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get(`http://localhost:8080/${entity}`)
            .then((response) => {
                setEntities(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de clientes:", error);
            });
    }, [entity]);
    const getAllPropertyNames = () => {
        // Extract all unique property names from all entities
        return Array.from(
            new Set(entities.flatMap((entity) => Object.keys(entity)))
        );
    };
    const labels = getAllPropertyNames();

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={styles.tableWrapper}>
        <h1>{entity}</h1>
            <table className={styles.table}>
                {/* Dynamically generate table headers based on property names */}
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        {labels.map((label) => (
                            <th className={styles.th} key={label}>{label}</th>
                        ))}
                        <th className={styles.th}>Ações</th>
                    </tr>
                </thead>

                {/* Map through the entities to generate the table rows */}
                <tbody>
                    {entities.map((entity, index) => (
                        <tr className={styles.tr} key={index}>
                            {labels.map((label) => (
                                <td className={styles.th} key={label}>{entity[label]}</td>
                            ))}
                            <td className={styles.td}>
                                <div className={styles.bts}>
                            <Link className={styles.edit} href={'/'}><Image 
                            className={styles.edit}
                            width={24}
                            height={24}
                            src={edit}
                            alt="edit"
                            /></Link>
                            <Link className={styles.delete} href={'/'}><Image 
                            className={styles.delete}
                            width={24}
                            height={24}
                            src={deleteI}
                            alt="edit"
                            /></Link>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}