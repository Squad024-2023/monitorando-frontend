import styles from '../form.module.css';

type Props = {
    type: string;
    nome: string;
    placeholder: string;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
export default function Input({ type, nome, placeholder, value, onChange }: Props) {

   return (
        <>
            <label
                className={styles.label}
                htmlFor={nome}>
                <input type={type}
                    name={nome}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <span className={styles.span}>{placeholder}</span>
            </label >
        </>
    )
}