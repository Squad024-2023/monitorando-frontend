import styles from '../form.module.css'

type Props = {
    name: string;
    texto1: string; texto2: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function RadioInput({
    name,
    texto1, texto2,
    value,
    onChange }: Props) {

    return (
        <div className={styles.radioContainer}>
            <label>
                <input type="radio"
                    name={name}
                    value={texto1}
                    checked={value === texto1}
                    onChange={onChange} />
                {texto1}
            </label>
            <label>
                <input
                    type="radio"
                    name={name}
                    value={texto2}
                    checked={value === texto2}
                    onChange={onChange}
                />
                {texto2}</label>
        </div>
    )
}