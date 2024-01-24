import styles from '../form.module.css'

type Props = {
    type: 'submit' | 'button';
    texto: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export default function BotaoForm({ type, texto, onClick }: Props) {
    return (
        <button
            className={styles.botaoForm}
            type={type}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}