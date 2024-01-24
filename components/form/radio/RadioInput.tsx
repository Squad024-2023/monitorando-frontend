import styles from '../form.module.css'

type Props = {
    name: string;
    texto1: string; texto2: string;
    value1?: any; value2?: any;
    checked1?: boolean; checked2?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function RadioInput({
    name,
    texto1, texto2,
    value1, value2,
    checked1, checked2,
    onChange }: Props) {

    return (
        <div className={styles.radioContainer}>
            <label>
                <input type='radio' id={texto1} name={name} value={value1} checked={checked1} onChange={onChange} />
                {texto1}
            </label>
            <label>
                <input type='radio' id={texto2} name={name} value={value2} checked={checked2} onChange={onChange} />
                {texto2}</label>
        </div>
    )
}